import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Weapon, Character, UltraMutation} from '../model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {WeaponSelectorModal} from '../weapon-selector/weapon-selector.component';
import {MutationSelectorComponent} from '../mutation-selector/mutation-selector.component';
interface ImprovedArea{
  area: number, subarea:number, loop:number, enemies:Enemy[], baseDifficulty:number
}

interface Enemy{
  name:string,
  id:number
}

interface Crown{
  id:number,
  name:string,
  available_after:ImprovedArea
}

enum GameTypeEnum{
  DAILY="daily",
  WEEKLY="weekly"
}




@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})

export class GameFormComponent implements OnInit {
  name = new FormControl('');
  daily = new FormControl(GameTypeEnum.DAILY);
  bskin = new FormControl('');
  GameType=GameTypeEnum;

  noneUltra = {id:0,name:"None"};
  noneWeapon:Weapon = {difficultyRequired:0,id:0,imagePath:"",name:"None"};

  areas:ImprovedArea[];
  crowns:Crown[];
  characters:Character[];
  weapons:Weapon[];
  primaryWeapon:Weapon;
  secondaryWeapon:Weapon;
  
  deadForm:FormGroup;
//TODO:  CharacterDictionary={1:"Fish",2:"Crystal",3:"Eyes",4:"Melting",5:"Plant",6:"Y.V",7:"Steroids",8:"Robot",9:"Chicken",10:"Rebel",11:"Horror",12:"Rogue"}
                    
  constructor(private fb:FormBuilder,private modalService: NgbModal) {
    
    this.deadForm = fb.group({
      'deadArea':[1,Validators.required], //TODO How to avoid incoherence in the default value if I dont create the areas in the constructor.
      'deadSubarea':[null,Validators.required],
      'killedBy':[{value:null},Validators.required],
      'bskin':[null,null],
      'type':[GameTypeEnum.DAILY,null],
      'character':[null,null],
      'crown':[null,null],
      'ultramutation':[null,Validators.required]
    });

    this.primaryWeapon = this.noneWeapon;
    this.secondaryWeapon = this.noneWeapon;
 
   }

   getDeadArea():number{
      return this.deadForm.get("deadArea").value; //TODO Refactor confusing with  getEndingArea
   }



   
  ngOnInit() {
    this.areas = [{ area: 1, subarea: 1, loop:0,enemies:[{name:"Pipo",id:0}],baseDifficulty:1 },
    { area: 1, subarea: 2, loop:0,enemies:[{name:"Duck",id:1},],baseDifficulty:2 },
    { area: 2, subarea: 1, loop:0,enemies:[{name:"Duck",id:1}], baseDifficulty:3},
    { area: 3, subarea: 1, loop:0,enemies:[{name:"Quack",id:2}], baseDifficulty:4}
  
  ]

    this.weapons = [{id:1,difficultyRequired:1,imagePath:"pipo.com",name:"MegaWeapon"},
  {id:2,difficultyRequired:4,imagePath:"poptheflop",name:"UAAAAAAAAPOOOON"}];
    
    this.characters = [
      {id:0,name:"Fish",iconPath:"",startingWeapon:{id:0,name:"Pipo",difficultyRequired:0,imagePath:""},
      ultramutations:[{
        id:1,name:"Ultra1Fish"},{
          id:2,name:"Ultra2Fish"}]
      },
      {id:1,name:"Pepo",iconPath:"",startingWeapon:{id:0,name:"Pipo",difficultyRequired:0,imagePath:""},
      ultramutations:[{
        id:1,name:"Ultra2Pepo"},{
          id:2,name:"Ultra2Pepo"}]
      }

    ];
    //TODO: Set default crown
      this.crowns = [{id:0, available_after:{area:0,subarea:0,loop:0, enemies:[], baseDifficulty:0}, name:"None"},
        {id:2,available_after: {area:1, subarea:1, loop:0, enemies:[], baseDifficulty:1}, name:"Pipo crown",},
      {id:1,available_after: {area:2, subarea:1, loop:0, enemies:[], baseDifficulty:3}, name:"Mega duper truper pipo crown"}
    
    ];
   
    this.deadForm.get("crown").setValue(this.crowns[0]);
    this.deadForm.get("deadSubarea").setValue(this.areas[0]);
    this.deadForm.get("character").setValue(this.characters[0]);
    this.deadForm.get("ultramutation").setValue(this.noneUltra);

  }
//TODO Reset selected crown if area changes?
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
      if (difficulty>=this.weapons[i].difficultyRequired)
        weapons.push(this.weapons[i]);

    }

    return weapons;
    //TODO add specific character weapons
  }

  openPrimaryWeaponSelector() {
    const modalRef = this.modalService.open(WeaponSelectorModal);
    modalRef.componentInstance.weapons = this.getAvailableWeapons();
  }

  openSecondaryWeaponSelector() {
    const modalRef = this.modalService.open(WeaponSelectorModal);
    modalRef.componentInstance.weapons = this.getAvailableWeapons();
  }

  openMutations() {
    const modalRef = this.modalService.open(MutationSelectorComponent);
    modalRef.componentInstance.weapons = this.getAvailableWeapons();
  }

  getAvailableUltraMutations():UltraMutation[]{
    let ultra = this.getSelectedCharacter().ultramutations.slice();
    console.log(ultra);
    ultra.unshift(this.noneUltra);
    return ultra;
  }

  typeOf(x){
    return typeof(x);
  }

}
