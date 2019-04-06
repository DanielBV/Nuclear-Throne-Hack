import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Crown, Enemy,crowns, ImprovedArea,weapons,characters,Weapon, Character,Mutation,FinalData, getNumOfRemainingMutations,areas, GameTypeEnum} from '../model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {WeaponSelectorModal} from '../weapon-selector/weapon-selector.component';
import {MutationSelectorComponent} from '../mutation-selector/mutation-selector.component';
import {WeeklyDataService,WeeklySeedInfo} from '../weekly-data.service';
import {ConfirmationBoxComponent} from '../confirmation-box/confirmation-box.component';


const CROWN_OF_DESTINY_ID = 8;


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})

export class GameFormComponent implements OnInit {
  name = new FormControl('');
  bskin = new FormControl('');
  GameType=GameTypeEnum;

  noneWeapon:Weapon = weapons[0];
  noneCrown:Crown = crowns[0];

  areas:ImprovedArea[];
  crowns:Crown[];
  characters:Character[];
  weapons:Weapon[];
  primaryWeapon:Weapon;
  secondaryWeapon:Weapon;
  selectedMutations:Mutation[];
  weekly_data:WeeklySeedInfo;
  
  deadForm:FormGroup;

                    
  constructor(private fb:FormBuilder,private modalService: NgbModal,dailyWeeklyData: WeeklyDataService) {
    
    this.deadForm = fb.group({
      'deadArea':[1,Validators.required], 
      'deadSubarea':[null,Validators.required],
      'killedBy':[{value:null},Validators.required],
      'bskin':[null,null],
      'type':[GameTypeEnum.DAILY,null],
      'character':[null,null],
      'crown':[null,null],
    });

    this.primaryWeapon = this.noneWeapon;
    this.secondaryWeapon = this.noneWeapon;
    this.selectedMutations = [];
    dailyWeeklyData.getWeeklyInfo().subscribe(
      
      (data)=>{
        this.weekly_data=data;
        if (!this.weekly_data.enabled)
        this.disableWeekly();}
      
      
      );
  
   }


  disableWeekly(){
    this.deadForm.get("type").setValue(GameTypeEnum.DAILY);
    this.deadForm.get("type").disable();
  }


  setWeeklyOrDailyData(){
    if (this.isWeekly()){
      this.setWeeklyData();
    }else{
      this.unsetWeeklyData();
    }

    this.assertConsistentData();


  }
   setWeeklyData(){
      if (this.weekly_data.enforceBSkin){
        this.deadForm.get("bskin").setValue(this.weekly_data.bskin);
        this.deadForm.get("bskin").disable();
        this.deadForm.get("character").setValue(this.weekly_data.character);
        this.deadForm.get("character").disable();
      }
   }

   unsetWeeklyData(){
    this.deadForm.get("bskin").enable();
    this.deadForm.get("character").enable();
   }


   assertConsistentData(){
     let availableWeapons = this.getAvailableWeapons();
     let crown = this.getSelectedCrown();
     if(this.primaryWeapon!==this.noneWeapon && !availableWeapons.includes(this.primaryWeapon)){
        this.primaryWeapon = this.noneWeapon;
     }
     if(this.secondaryWeapon!==this.noneWeapon && !availableWeapons.includes(this.secondaryWeapon)){
      this.secondaryWeapon = this.noneWeapon;
     }

     if(crown!==this.noneCrown && !this.getAvailableCrowns().includes(crown)){ 
        this.setSelectedCrown(this.noneCrown);

     if(!this.getEndingArea().enemies.includes(this.deadForm.get("killedBy").value))
        this.deadForm.setValue(null,{emitEvent:false});
      
   }

   }

   setSelectedCrown(crown:Crown){
     console.log(this.getAvailableCrowns().includes(this.crowns[0]));
     this.deadForm.get("crown").setValue(crown);
   }

   isWeekly():boolean{
     return this.deadForm.get("type").value===this.GameType.WEEKLY;
   }

   getDeadArea():number{
      return this.deadForm.get("deadArea").value; //TODO Refactor confusing with  getEndingArea
   }

   getGameType():GameTypeEnum{
     return this.deadForm.get("type").value;
   }
   /** TODO: Añadir armas que solo se pueden coger una vez (no se pueden tener como primary y secondary weapon a la vez) */

   
  ngOnInit() {
    this.areas = areas;

    this.weapons = weapons;
    this.characters = characters;
    this.crowns = crowns;
   
    this.deadForm.get("crown").setValue(this.crowns[0]);
    this.deadForm.get("deadSubarea").setValue(this.areas[0]);
    this.deadForm.get("character").setValue(this.characters[0]);

    this.deadForm.get("type").valueChanges.subscribe(() => this.setWeeklyOrDailyData());
    this.deadForm.get("deadSubarea").valueChanges.subscribe(()=>this.assertConsistentData());
    this.deadForm.get("crown").valueChanges.subscribe(()=>this.assertConsistentData());
    this.deadForm.get("character").valueChanges.subscribe(()=>this.assertConsistentData());
  }

  getLoop():Number{
    return 0;
  }

  getAreas():Number[]{
    return  Array.from(new Set(this.areas.map(area=>area.area)));
  }
  getAvailableSubareas():ImprovedArea[]{
    let deadArea = this.getDeadArea();
    return this.areas.filter(area=>area.area===deadArea && area.loop===this.getLoop());
  }


  getEnemies():Enemy[]{
    return this.deadForm.get("deadSubarea").value.enemies;
  }

  getEndingArea():ImprovedArea{
   
      return this.deadForm.get("deadSubarea").value; 
  }
  getAvailableCrowns():Crown[]{
    let area = this.getEndingArea();
    let crowns = [];
    for(let i=0;i<this.crowns.length;i++){
      if (this.areaIsAfter(area,this.crowns[i].available_after,false))
        crowns.push(this.crowns[i]);

    }

    if (this.isWeekly() && this.weekly_data.crown!=null)
      crowns.push(this.weekly_data.crown);

    return crowns;
  }


  /**
   * Returns true if area1 if after area2.
   * If area1 == area2, returns the equal parameter (by default false)
   * Otherwise, returns false
   * @param area1 first area
   * @param area2 second area
   * @param equal if true, the method will return true if area1 == area2
   */
  areaIsAfter(area1:ImprovedArea,area2:ImprovedArea,equal=false):boolean{
    if(area1.loop>area2.loop)
      return true;
    else if (area1.loop === area2.loop)
      if (area1.area>area2.area)
        return true;
      else if (area1.area === area2.area)
        if (area1.subarea>area2.subarea)
          return true
        else if (area1.subarea === area2.subarea)
          return equal
        

      return false;
  }

  getSelectedCharacter():Character{
    return this.deadForm.get("character").value;
  }

  getSelectedCrown():Crown{
    return this.deadForm.get("crown").value;
  }
  getDifficulty():number{
    
      let difficulty = this.getEndingArea().baseDifficulty;
      //TODO Make more explicit the character is robot. Enums don't work with object

      if (this.getSelectedCharacter().id == 8) //Robot's passive reduces the difficulty number for weapon drops by 1
        difficulty+=1

      if (this.getSelectedCrown().id!=0)  //Having a crown ==> Entering a Crown Vault, which counts as entering a portal and 
             //increases the difficulty by one each time you exit them
          difficulty+=1;

      if (this.getSelectedCrown().id==11) //Crown of curses increases the probability of getting cursed chests, which include 
          difficulty+=2;              // weapons of +2 difficulty.
         
     
    
    return difficulty;
  }
 
  getAvailableWeapons(){
    let weapons = [];
    let difficulty = this.getDifficulty();

    for (let i=0;i<this.weapons.length;i++){
      if (this.weapons[i].obtainable && difficulty>=this.weapons[i].difficultyRequired)
        weapons.push(this.weapons[i]);

    }

    if (this.isWeekly() && this.weekly_data.startWep!=null)
      weapons.push(this.weekly_data.startWep);
    else if (this.getSelectedCharacter().startingWeapon !=null)
      weapons.splice(1, 0, this.getSelectedCharacter().startingWeapon);

    return weapons;
    //TODO add specific character weapons
  }

  openPrimaryWeaponSelector() {
    const modalRef = this.modalService.open(WeaponSelectorModal, { size: 'lg' });
    modalRef.componentInstance.selectedWeapon = this.primaryWeapon;
    modalRef.componentInstance.headerText= "Select Primary Weapon";
    modalRef.componentInstance.weapons = this.getAvailableWeapons();

    modalRef.result.then((result) => {
      this.primaryWeapon = result;
    }).catch(excp =>{});
  
  }

  openSecondaryWeaponSelector() {
    const modalRef = this.modalService.open(WeaponSelectorModal, { size: 'lg' });
    modalRef.componentInstance.weapons = this.getAvailableWeapons();
    modalRef.componentInstance.headerText= "Select Secondary Weapon";
    modalRef.componentInstance.selectedWeapon = this.secondaryWeapon;
    modalRef.result.then((result) => {
      this.secondaryWeapon = result;
    }).catch(excp =>{});
  }

  openMutations() {
    const modalRef = this.modalService.open(MutationSelectorComponent, { size: 'lg' });
    modalRef.componentInstance.activeMutations = this.selectedMutations; 
    modalRef.componentInstance.numberOfMutations = this.getNumOfAllowedMutations();
    modalRef.result.then((result) => {
      this.selectedMutations = result;
    }).catch(excp =>{});
  }

  openConfirmationBox(){
    const modalRef = this.modalService.open(ConfirmationBoxComponent, { size: 'lg' });
    let area = this.getEndingArea();
    let data:FinalData = {area:area.area,subarea:area.subarea,loop:area.loop,bskin:this.hasBskin(),charlevel:this.getNumOfAllowedMutations()+1,
    character:this.getSelectedCharacter(),crown:this.getSelectedCrown(),kills:this.getKills(),seq:null,lasthit:this.getLastHit(),
  mutations:this.selectedMutations,primaryWeapon:this.primaryWeapon,secondaryWeapon:this.secondaryWeapon,type:this.getGameType(),
  win:false};

  modalRef.componentInstance.data = data;

    /** TODO getKills y seq */
  }

  getKills():number{
    let minKills = this.getEndingArea().minKills;
    let maxKills = this.getEndingArea().maxKills;

    return Math.floor(Math.random() * minKills) + maxKills;
  }
  getLastHit():Enemy{
    return this.deadForm.get("killedBy").value;

  }
  hasBskin():boolean{
    return this.deadForm.get("bskin").value;
  }

  getNumOfAllowedMutations():number{
    let base =  this.getEndingArea().mutations;

    if (this.getSelectedCrown().id == CROWN_OF_DESTINY_ID)
        base+=1;

    return base;
  }

  getMutationsLeft():number{
   
    return getNumOfRemainingMutations(this.getNumOfAllowedMutations(),this.selectedMutations);
  }

  typeOf(x){
    return typeof(x);
  }

}
