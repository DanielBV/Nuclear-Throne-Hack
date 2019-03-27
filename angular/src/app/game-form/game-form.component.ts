import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Crown, Enemy,crowns, ImprovedArea,weapons,characters,Weapon, Character,Mutation, getNumOfRemainingMutations} from '../model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {WeaponSelectorModal} from '../weapon-selector/weapon-selector.component';
import {MutationSelectorComponent} from '../mutation-selector/mutation-selector.component';
import {WeeklyDataService,WeeklySeedInfo} from '../weekly-data.service';




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
  bskin = new FormControl('');
  GameType=GameTypeEnum;

  noneWeapon:Weapon = {difficultyRequired:0,id:0,imagePath:"",name:"None"}; /** Move this none weapon to its file TODO */
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
      'deadArea':[1,Validators.required], //TODO How to avoid incoherence in the default value if I dont create the areas in the constructor.
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
        console.log("PIPO");
        this.weekly_data=data;
        console.log(this.weekly_data);
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

   /** TODO: Añadir armas que solo se pueden coger una vez (no se pueden tener como primary y secondary weapon a la vez) */

   
  ngOnInit() {
    this.areas = [{area:1, subarea:1, loop:0, baseDifficulty:0,enemies:[{name:"Bandit", imagePath:"Bandit.png", id:0 },{name:"Maggot", imagePath:"Maggot.png", id:1 },{name:"Rad Maggot", imagePath:"RadMaggot.png", id:2 },{name:"Big Maggot", imagePath:"BigMaggot.png", id:3 },{name:"Scorpion", imagePath:"Scorpion.png", id:4 },{name:"Gold Scorpion", imagePath:"GoldScorpion.png", id:5 },{name:"Explosion", imagePath:"None", id:55 },{name:"Barrel", imagePath:"Barrel.png", id:61 },] },
    {area:1, subarea:2, loop:0, baseDifficulty:1,enemies:[{name:"Bandit", imagePath:"Bandit.png", id:0 },{name:"Maggot", imagePath:"Maggot.png", id:1 },{name:"Rad Maggot", imagePath:"RadMaggot.png", id:2 },{name:"Big Maggot", imagePath:"BigMaggot.png", id:3 },{name:"Scorpion", imagePath:"Scorpion.png", id:4 },{name:"Gold Scorpion", imagePath:"GoldScorpion.png", id:5 },{name:"Explosion", imagePath:"None", id:55 },{name:"Barrel", imagePath:"Barrel.png", id:61 },] },
    {area:1, subarea:3, loop:0, baseDifficulty:2,enemies:[{name:"Bandit", imagePath:"Bandit.png", id:0 },{name:"Maggot", imagePath:"Maggot.png", id:1 },{name:"Rad Maggot", imagePath:"RadMaggot.png", id:2 },{name:"Big Maggot", imagePath:"BigMaggot.png", id:3 },{name:"Scorpion", imagePath:"Scorpion.png", id:4 },{name:"Gold Scorpion", imagePath:"GoldScorpion.png", id:5 },{name:"Big Bandit", imagePath:"BigBandit.png", id:6 },{name:"Barrel", imagePath:"Barrel.png", id:61 },{name:"Explosion", imagePath:"None", id:55 },] },
    {area:2, subarea:1, loop:0, baseDifficulty:3,enemies:[{name:"Bandit", imagePath:"Bandit.png", id:0 },{name:"Rat", imagePath:"Rat.png", id:7 },{name:"Rat King", imagePath:"RatKing.png", id:8 },{name:"Green Rat", imagePath:"GreenRat.png", id:9 },{name:"Alligartor", imagePath:"Alligator.png", id:10 },{name:"Buff Aligator", imagePath:"BuffAlligator.png", id:95 },{name:"Ballguy", imagePath:"Ballguy.png", id:11 },{name:"Toxic Ballguy", imagePath:"ToxicBallguy.png", id:12 },{name:"Assasin", imagePath:"Assasin.png", id:14 },{name:"Mimic", imagePath:"Mimic.png", id:49 },{name:"Health Mimic", imagePath:"HealthMimic.png", id:50 },{name:"Toxic Barrel", imagePath:"ToxicBarrel.png", id:62 },{name:"Toxin", imagePath:"None", id:59 },{name:"Explosion", imagePath:"None", id:55 },] },
    {area:3, subarea:1, loop:0, baseDifficulty:4,enemies:[{name:"Bandit", imagePath:"Bandit.png", id:0 },{name:"Assasin", imagePath:"Assasin.png", id:14 },{name:"Raven", imagePath:"Raven.png", id:15 },{name:"Fire Salamander", imagePath:"FireSalamander.png", id:16 },{name:"Sniper", imagePath:"Sniper.png", id:17 },{name:"Mimic", imagePath:"Mimic.png", id:49 },{name:"Health Mimic", imagePath:"HealthMimic.png", id:50 },{name:"Car", imagePath:"Car.png", id:64 },{name:"Venus Car", imagePath:"VenusCar.png", id:65 },{name:"Toxin", imagePath:"None", id:59 },{name:"Explosion", imagePath:"None", id:55 },{name:"Fire Trap", imagePath:"None", id:57 },] },
    {area:3, subarea:2, loop:0, baseDifficulty:5,enemies:[{name:"Bandit", imagePath:"Bandit.png", id:0 },{name:"Assasin", imagePath:"Assasin.png", id:14 },{name:"Raven", imagePath:"Raven.png", id:15 },{name:"Fire Salamander", imagePath:"FireSalamander.png", id:16 },{name:"Sniper", imagePath:"Sniper.png", id:17 },{name:"Mimic", imagePath:"Mimic.png", id:49 },{name:"Health Mimic", imagePath:"HealthMimic.png", id:50 },{name:"Car", imagePath:"Car.png", id:64 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },{name:"Toxin", imagePath:"None", id:59 },{name:"Explosion", imagePath:"None", id:55 },{name:"Fire Trap", imagePath:"None", id:57 },] },
    {area:3, subarea:3, loop:0, baseDifficulty:6,enemies:[{name:"Bandit", imagePath:"Bandit.png", id:0 },{name:"Assasin", imagePath:"Assasin.png", id:14 },{name:"Raven", imagePath:"Raven.png", id:15 },{name:"Fire Salamander", imagePath:"FireSalamander.png", id:16 },{name:"Sniper", imagePath:"Sniper.png", id:17 },{name:"Mimic", imagePath:"Mimic.png", id:49 },{name:"Health Mimic", imagePath:"HealthMimic.png", id:50 },{name:"Car", imagePath:"Car.png", id:64 },{name:"Big Dog", imagePath:"BigDog.png", id:18 },{name:"Toxin", imagePath:"None", id:59 },{name:"Explosion", imagePath:"None", id:55 },{name:"Fire Trap", imagePath:"None", id:57 },] },
    {area:4, subarea:1, loop:0, baseDifficulty:7,enemies:[{name:"Bandit", imagePath:"Bandit.png", id:0 },{name:"Crystal Spider", imagePath:"CrystalSpider.png", id:19 },{name:"Laser Crystal", imagePath:"LaserCrystal.png", id:21 },{name:"Mimic", imagePath:"Mimic.png", id:49 },{name:"Health Mimic", imagePath:"HealthMimic.png", id:50 },{name:"Explosion", imagePath:"None", id:55 },{name:"Small Explosion", imagePath:"None", id:56 },] },
    {area:5, subarea:1, loop:0, baseDifficulty:8,enemies:[{name:"Frozen Bandit", imagePath:"FrozenBandit.png", id:23 },{name:"Snowbot", imagePath:"Snowbot.png", id:24 },{name:"Wolf", imagePath:"Wolf.png", id:25 },{name:"Snow Tank", imagePath:"SnowTank.png", id:26 },{name:"Mimic", imagePath:"Mimic.png", id:49 },{name:"Health Mimic", imagePath:"HealthMimic.png", id:50 },{name:"Icy Car", imagePath:"IcyCar.png", id:68 },{name:"Thrown Car", imagePath:"ThrownCar.png", id:69 },{name:"Golden Snow Tank", imagePath:"GoldenSnowtank.png", id:98 },{name:"Explosion", imagePath:"None", id:55 },{name:"Small Explosion", imagePath:"None", id:56 },] },
    {area:5, subarea:2, loop:0, baseDifficulty:9,enemies:[{name:"Frozen Bandit", imagePath:"FrozenBandit.png", id:23 },{name:"Snowbot", imagePath:"Snowbot.png", id:24 },{name:"Wolf", imagePath:"Wolf.png", id:25 },{name:"Snow Tank", imagePath:"SnowTank.png", id:26 },{name:"Mimic", imagePath:"Mimic.png", id:49 },{name:"Health Mimic", imagePath:"HealthMimic.png", id:50 },{name:"Icy Car", imagePath:"IcyCar.png", id:68 },{name:"Thrown Car", imagePath:"ThrownCar.png", id:69 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },{name:"Golden Snow Tank", imagePath:"GoldenSnowtank.png", id:98 },{name:"Explosion", imagePath:"None", id:55 },{name:"Small Explosion", imagePath:"None", id:56 },] },
    {area:5, subarea:3, loop:0, baseDifficulty:10,enemies:[{name:"Frozen Bandit", imagePath:"FrozenBandit.png", id:23 },{name:"Snowbot", imagePath:"Snowbot.png", id:24 },{name:"Wolf", imagePath:"Wolf.png", id:25 },{name:"Snow Tank", imagePath:"SnowTank.png", id:26 },{name:"Mimic", imagePath:"Mimic.png", id:49 },{name:"Health Mimic", imagePath:"HealthMimic.png", id:50 },{name:"Icy Car", imagePath:"IcyCar.png", id:68 },{name:"Thrown Car", imagePath:"ThrownCar.png", id:69 },{name:"Lil Hunder", imagePath:"LilHunter.png", id:27 },{name:"Golden Snow Tank", imagePath:"GoldenSnowtank.png", id:98 },{name:"Explosion", imagePath:"None", id:55 },{name:"Small Explosion", imagePath:"None", id:56 },] },
    {area:6, subarea:1, loop:0, baseDifficulty:11,enemies:[{name:"Freak", imagePath:"Freak.png", id:28 },{name:"Explo Freak", imagePath:"ExploFreak.png", id:29 },{name:"Rhino Freak", imagePath:"RhinoFreak.png", id:30 },{name:"Turret", imagePath:"Turret.png", id:32 },] },
    {area:7, subarea:1, loop:0, baseDifficulty:12,enemies:[{name:"Guardian", imagePath:"Guardian.png", id:34 },{name:"Explo Guardian", imagePath:"ExploGuardian.png", id:35 },{name:"Dog Guardian", imagePath:"DogGuardian.png", id:36 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },] },
    {area:7, subarea:2, loop:0, baseDifficulty:13,enemies:[{name:"Guardian", imagePath:"Guardian.png", id:34 },{name:"Explo Guardian", imagePath:"ExploGuardian.png", id:35 },{name:"Dog Guardian", imagePath:"DogGuardian.png", id:36 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },] },
    {area:7, subarea:3, loop:0, baseDifficulty:14,enemies:[{name:"Guardian", imagePath:"Guardian.png", id:34 },{name:"Throne", imagePath:"Throne.png", id:37 },{name:"Throne Death", imagePath:"None", id:81 },] },
    {area:1, subarea:1, loop:1, baseDifficulty:15,enemies:[{name:"Bandit", imagePath:"Bandit.png", id:0 },{name:"Maggot", imagePath:"Maggot.png", id:1 },{name:"Rad Maggot", imagePath:"RadMaggot.png", id:2 },{name:"Big Maggot", imagePath:"BigMaggot.png", id:3 },{name:"Scorpion", imagePath:"Scorpion.png", id:4 },{name:"Gold Scorpion", imagePath:"GoldScorpion.png", id:5 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },{name:"Elite Grunt", imagePath:"EliteGrunt.png", id:89 },{name:"Elite Shielder", imagePath:"EliteShielder.png", id:91 },{name:"Elite Inspector", imagePath:"EliteInspector.png", id:92 },{name:"Van", imagePath:"Van.png", id:94 },{name:"Assasin", imagePath:"Assasin.png", id:14 },{name:"Sniper", imagePath:"Sniper.png", id:17 },{name:"Explosion", imagePath:"None", id:55 },{name:"Barrel", imagePath:"Barrel.png", id:61 },] },
    {area:1, subarea:2, loop:1, baseDifficulty:16,enemies:[{name:"Bandit", imagePath:"Bandit.png", id:0 },{name:"Maggot", imagePath:"Maggot.png", id:1 },{name:"Rad Maggot", imagePath:"RadMaggot.png", id:2 },{name:"Big Maggot", imagePath:"BigMaggot.png", id:3 },{name:"Scorpion", imagePath:"Scorpion.png", id:4 },{name:"Gold Scorpion", imagePath:"GoldScorpion.png", id:5 },{name:"Explosion", imagePath:"None", id:55 },{name:"Barrel", imagePath:"Barrel.png", id:61 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },{name:"Elite Grunt", imagePath:"EliteGrunt.png", id:89 },{name:"Elite Shielder", imagePath:"EliteShielder.png", id:91 },{name:"Elite Inspector", imagePath:"EliteInspector.png", id:92 },{name:"Van", imagePath:"Van.png", id:94 },{name:"Assasin", imagePath:"Assasin.png", id:14 },{name:"Sniper", imagePath:"Sniper.png", id:17 },{name:"Explosion", imagePath:"None", id:55 },] },
    {area:1, subarea:3, loop:1, baseDifficulty:17,enemies:[{name:"Bandit", imagePath:"Bandit.png", id:0 },{name:"Maggot", imagePath:"Maggot.png", id:1 },{name:"Rad Maggot", imagePath:"RadMaggot.png", id:2 },{name:"Big Maggot", imagePath:"BigMaggot.png", id:3 },{name:"Scorpion", imagePath:"Scorpion.png", id:4 },{name:"Gold Scorpion", imagePath:"GoldScorpion.png", id:5 },{name:"Big Bandit", imagePath:"BigBandit.png", id:6 },{name:"Barrel", imagePath:"Barrel.png", id:61 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },{name:"Elite Grunt", imagePath:"EliteGrunt.png", id:89 },{name:"Elite Shielder", imagePath:"EliteShielder.png", id:91 },{name:"Elite Inspector", imagePath:"EliteInspector.png", id:92 },{name:"Assasin", imagePath:"Assasin.png", id:14 },{name:"Sniper", imagePath:"Sniper.png", id:17 },{name:"Van", imagePath:"Van.png", id:94 },{name:"Explosion", imagePath:"None", id:55 },{name:"Explosion", imagePath:"None", id:55 },] },
    {area:2, subarea:1, loop:1, baseDifficulty:18,enemies:[{name:"Bandit", imagePath:"Bandit.png", id:0 },{name:"Rat", imagePath:"Rat.png", id:7 },{name:"Rat King", imagePath:"RatKing.png", id:8 },{name:"Green Rat", imagePath:"GreenRat.png", id:9 },{name:"Alligartor", imagePath:"Alligator.png", id:10 },{name:"Buff Aligator", imagePath:"BuffAlligator.png", id:95 },{name:"Ballguy", imagePath:"Ballguy.png", id:11 },{name:"Toxic Ballguy", imagePath:"ToxicBallguy.png", id:12 },{name:"Assasin", imagePath:"Assasin.png", id:14 },{name:"Mimic", imagePath:"Mimic.png", id:49 },{name:"Health Mimic", imagePath:"HealthMimic.png", id:50 },{name:"Toxic Barrel", imagePath:"ToxicBarrel.png", id:62 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },{name:"Elite Grunt", imagePath:"EliteGrunt.png", id:89 },{name:"Elite Shielder", imagePath:"EliteShielder.png", id:91 },{name:"Elite Inspector", imagePath:"EliteInspector.png", id:92 },{name:"Van", imagePath:"Van.png", id:94 },{name:"Mom", imagePath:"Mom.png", id:13 },{name:"Toxin", imagePath:"None", id:59 },{name:"Explosion", imagePath:"None", id:55 },] },
    {area:3, subarea:1, loop:1, baseDifficulty:19,enemies:[{name:"Bandit", imagePath:"Bandit.png", id:0 },{name:"Assasin", imagePath:"Assasin.png", id:14 },{name:"Raven", imagePath:"Raven.png", id:15 },{name:"Fire Salamander", imagePath:"FireSalamander.png", id:16 },{name:"Sniper", imagePath:"Sniper.png", id:17 },{name:"Mimic", imagePath:"Mimic.png", id:49 },{name:"Health Mimic", imagePath:"HealthMimic.png", id:50 },{name:"Car", imagePath:"Car.png", id:64 },{name:"Venus Car", imagePath:"VenusCar.png", id:65 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },{name:"Elite Grunt", imagePath:"EliteGrunt.png", id:89 },{name:"Elite Shielder", imagePath:"EliteShielder.png", id:91 },{name:"Elite Inspector", imagePath:"EliteInspector.png", id:92 },{name:"Van", imagePath:"Van.png", id:94 },{name:"Buff Aligator", imagePath:"BuffAlligator.png", id:95 },{name:"Snowbot", imagePath:"Snowbot.png", id:24 },{name:"Toxin", imagePath:"None", id:59 },{name:"Explosion", imagePath:"None", id:55 },{name:"Fire Trap", imagePath:"None", id:57 },] },
    {area:3, subarea:2, loop:1, baseDifficulty:20,enemies:[{name:"Bandit", imagePath:"Bandit.png", id:0 },{name:"Assasin", imagePath:"Assasin.png", id:14 },{name:"Raven", imagePath:"Raven.png", id:15 },{name:"Fire Salamander", imagePath:"FireSalamander.png", id:16 },{name:"Sniper", imagePath:"Sniper.png", id:17 },{name:"Mimic", imagePath:"Mimic.png", id:49 },{name:"Health Mimic", imagePath:"HealthMimic.png", id:50 },{name:"Car", imagePath:"Car.png", id:64 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },{name:"Elite Grunt", imagePath:"EliteGrunt.png", id:89 },{name:"Elite Shielder", imagePath:"EliteShielder.png", id:91 },{name:"Elite Inspector", imagePath:"EliteInspector.png", id:92 },{name:"Van", imagePath:"Van.png", id:94 },{name:"Buff Aligator", imagePath:"BuffAlligator.png", id:95 },{name:"Snowbot", imagePath:"Snowbot.png", id:24 },{name:"Toxin", imagePath:"None", id:59 },{name:"Explosion", imagePath:"None", id:55 },{name:"Fire Trap", imagePath:"None", id:57 },] },
    {area:3, subarea:3, loop:1, baseDifficulty:21,enemies:[{name:"Bandit", imagePath:"Bandit.png", id:0 },{name:"Assasin", imagePath:"Assasin.png", id:14 },{name:"Raven", imagePath:"Raven.png", id:15 },{name:"Fire Salamander", imagePath:"FireSalamander.png", id:16 },{name:"Sniper", imagePath:"Sniper.png", id:17 },{name:"Mimic", imagePath:"Mimic.png", id:49 },{name:"Health Mimic", imagePath:"HealthMimic.png", id:50 },{name:"Car", imagePath:"Car.png", id:64 },{name:"Big Dog", imagePath:"BigDog.png", id:18 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },{name:"Elite Grunt", imagePath:"EliteGrunt.png", id:89 },{name:"Elite Shielder", imagePath:"EliteShielder.png", id:91 },{name:"Elite Inspector", imagePath:"EliteInspector.png", id:92 },{name:"Van", imagePath:"Van.png", id:94 },{name:"Buff Aligator", imagePath:"BuffAlligator.png", id:95 },{name:"Snowbot", imagePath:"Snowbot.png", id:24 },{name:"Toxin", imagePath:"None", id:59 },{name:"Explosion", imagePath:"None", id:55 },{name:"Fire Trap", imagePath:"None", id:57 },] },
    {area:4, subarea:1, loop:1, baseDifficulty:22,enemies:[{name:"Bandit", imagePath:"Bandit.png", id:0 },{name:"Crystal Spider", imagePath:"CrystalSpider.png", id:19 },{name:"Laser Crystal", imagePath:"LaserCrystal.png", id:21 },{name:"Mimic", imagePath:"Mimic.png", id:49 },{name:"Health Mimic", imagePath:"HealthMimic.png", id:50 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },{name:"Elite Grunt", imagePath:"EliteGrunt.png", id:89 },{name:"Elite Shielder", imagePath:"EliteShielder.png", id:91 },{name:"Elite Inspector", imagePath:"EliteInspector.png", id:92 },{name:"Van", imagePath:"Van.png", id:94 },{name:"Explo Freak", imagePath:"ExploFreak.png", id:29 },{name:"Hyper Crystal", imagePath:"HyperCrystal.png", id:22 },{name:"Explosion", imagePath:"None", id:55 },{name:"Small Explosion", imagePath:"None", id:56 },] },
    {area:5, subarea:1, loop:1, baseDifficulty:23,enemies:[{name:"Frozen Bandit", imagePath:"FrozenBandit.png", id:23 },{name:"Snowbot", imagePath:"Snowbot.png", id:24 },{name:"Wolf", imagePath:"Wolf.png", id:25 },{name:"Snow Tank", imagePath:"SnowTank.png", id:26 },{name:"Mimic", imagePath:"Mimic.png", id:49 },{name:"Health Mimic", imagePath:"HealthMimic.png", id:50 },{name:"Icy Car", imagePath:"IcyCar.png", id:68 },{name:"Thrown Car", imagePath:"ThrownCar.png", id:69 },{name:"Golden Snow Tank", imagePath:"GoldenSnowtank.png", id:98 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },{name:"Elite Grunt", imagePath:"EliteGrunt.png", id:89 },{name:"Elite Shielder", imagePath:"EliteShielder.png", id:91 },{name:"Elite Inspector", imagePath:"EliteInspector.png", id:92 },{name:"Van", imagePath:"Van.png", id:94 },{name:"Explo Guardian", imagePath:"ExploGuardian.png", id:35 },{name:"Dog Guardian", imagePath:"DogGuardian.png", id:36 },{name:"Explosion", imagePath:"None", id:55 },{name:"Small Explosion", imagePath:"None", id:56 },] },
    {area:5, subarea:2, loop:1, baseDifficulty:24,enemies:[{name:"Frozen Bandit", imagePath:"FrozenBandit.png", id:23 },{name:"Snowbot", imagePath:"Snowbot.png", id:24 },{name:"Wolf", imagePath:"Wolf.png", id:25 },{name:"Snow Tank", imagePath:"SnowTank.png", id:26 },{name:"Mimic", imagePath:"Mimic.png", id:49 },{name:"Health Mimic", imagePath:"HealthMimic.png", id:50 },{name:"Icy Car", imagePath:"IcyCar.png", id:68 },{name:"Thrown Car", imagePath:"ThrownCar.png", id:69 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },{name:"Elite Grunt", imagePath:"EliteGrunt.png", id:89 },{name:"Elite Shielder", imagePath:"EliteShielder.png", id:91 },{name:"Elite Inspector", imagePath:"EliteInspector.png", id:92 },{name:"Explo Guardian", imagePath:"ExploGuardian.png", id:35 },{name:"Dog Guardian", imagePath:"DogGuardian.png", id:36 },{name:"Van", imagePath:"Van.png", id:94 },{name:"Golden Snow Tank", imagePath:"GoldenSnowtank.png", id:98 },{name:"Explosion", imagePath:"None", id:55 },{name:"Small Explosion", imagePath:"None", id:56 },] },
    {area:5, subarea:3, loop:1, baseDifficulty:25,enemies:[{name:"Frozen Bandit", imagePath:"FrozenBandit.png", id:23 },{name:"Snowbot", imagePath:"Snowbot.png", id:24 },{name:"Wolf", imagePath:"Wolf.png", id:25 },{name:"Snow Tank", imagePath:"SnowTank.png", id:26 },{name:"Mimic", imagePath:"Mimic.png", id:49 },{name:"Health Mimic", imagePath:"HealthMimic.png", id:50 },{name:"Icy Car", imagePath:"IcyCar.png", id:68 },{name:"Thrown Car", imagePath:"ThrownCar.png", id:69 },{name:"Lil Hunder", imagePath:"LilHunter.png", id:27 },{name:"Golden Snow Tank", imagePath:"GoldenSnowtank.png", id:98 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },{name:"Elite Grunt", imagePath:"EliteGrunt.png", id:89 },{name:"Elite Shielder", imagePath:"EliteShielder.png", id:91 },{name:"Elite Inspector", imagePath:"EliteInspector.png", id:92 },{name:"Van", imagePath:"Van.png", id:94 },{name:"Explo Guardian", imagePath:"ExploGuardian.png", id:35 },{name:"Dog Guardian", imagePath:"DogGuardian.png", id:36 },{name:"Explosion", imagePath:"None", id:55 },{name:"Small Explosion", imagePath:"None", id:56 },] },
    {area:6, subarea:1, loop:1, baseDifficulty:26,enemies:[{name:"Freak", imagePath:"Freak.png", id:28 },{name:"Explo Freak", imagePath:"ExploFreak.png", id:29 },{name:"Rhino Freak", imagePath:"RhinoFreak.png", id:30 },{name:"Turret", imagePath:"Turret.png", id:32 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },{name:"Elite Grunt", imagePath:"EliteGrunt.png", id:89 },{name:"Elite Shielder", imagePath:"EliteShielder.png", id:91 },{name:"Elite Inspector", imagePath:"EliteInspector.png", id:92 },{name:"Laser Crystal", imagePath:"LaserCrystal.png", id:21 },{name:"Van", imagePath:"Van.png", id:94 },] },
    {area:7, subarea:1, loop:1, baseDifficulty:27,enemies:[{name:"Guardian", imagePath:"Guardian.png", id:34 },{name:"Explo Guardian", imagePath:"ExploGuardian.png", id:35 },{name:"Dog Guardian", imagePath:"DogGuardian.png", id:36 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },{name:"Elite Grunt", imagePath:"EliteGrunt.png", id:89 },{name:"Elite Shielder", imagePath:"EliteShielder.png", id:91 },{name:"Elite Inspector", imagePath:"EliteInspector.png", id:92 },{name:"Van", imagePath:"Van.png", id:94 },{name:"Jungle Bandit", imagePath:"JungleBandit.png", id:82 },{name:"Explo Freak", imagePath:"ExploFreak.png", id:29 },] },
    {area:7, subarea:2, loop:1, baseDifficulty:29,enemies:[{name:"Guardian", imagePath:"Guardian.png", id:34 },{name:"Explo Guardian", imagePath:"ExploGuardian.png", id:35 },{name:"Dog Guardian", imagePath:"DogGuardian.png", id:36 },{name:"Grunt", imagePath:"Grunt.png", id:51 },{name:"Inspector", imagePath:"Inspector.png", id:52 },{name:"Shielder", imagePath:"Shielder.png", id:53 },{name:"Elite Grunt", imagePath:"EliteGrunt.png", id:89 },{name:"Elite Shielder", imagePath:"EliteShielder.png", id:91 },{name:"Elite Inspector", imagePath:"EliteInspector.png", id:92 },{name:"Van", imagePath:"Van.png", id:94 },{name:"Jungle Bandit", imagePath:"JungleBandit.png", id:82 },{name:"Explo Freak", imagePath:"ExploFreak.png", id:29 },] },
    ];    

    this.weapons = weapons;
    this.characters = characters;
    this.crowns = crowns;
   
    this.deadForm.get("crown").setValue(this.crowns[0]);
    this.deadForm.get("deadSubarea").setValue(this.areas[0]);
    this.deadForm.get("character").setValue(this.characters[0]);

    this.deadForm.get("type").valueChanges.subscribe(() => this.setWeeklyOrDailyData());
    this.deadForm.get("deadSubarea").valueChanges.subscribe(()=>this.assertConsistentData());
    this.deadForm.get("crown").valueChanges.subscribe(()=>this.assertConsistentData());
    this.deadForm.get("character").valueChanges.subscribe(()=>this.assertConsistentData);
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
      if (difficulty>=this.weapons[i].difficultyRequired)
        weapons.push(this.weapons[i]);

    }

    if (this.isWeekly() && this.weekly_data.startWep!=null)
      weapons.push(this.weekly_data.startWep);

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
    });
  
  }

  openSecondaryWeaponSelector() {
    const modalRef = this.modalService.open(WeaponSelectorModal, { size: 'lg' });
    modalRef.componentInstance.weapons = this.getAvailableWeapons();
    modalRef.componentInstance.headerText= "Select Secondary Weapon";
    modalRef.componentInstance.selectedWeapon = this.secondaryWeapon;
    modalRef.result.then((result) => {
      this.secondaryWeapon = result;
    });
  }

  openMutations() {
    console.log(this.selectedMutations);
    const modalRef = this.modalService.open(MutationSelectorComponent, { size: 'lg' });
    modalRef.componentInstance.activeMutations = this.selectedMutations; 
    modalRef.componentInstance.numberOfMutations = this.getNumOfAllowedMutations();
    modalRef.result.then((result) => {
      this.selectedMutations = result;
    });
  }

  getNumOfAllowedMutations():number{
    return 5;
  }

  getMutationsLeft():number{
   
    return getNumOfRemainingMutations(this.getNumOfAllowedMutations(),this.selectedMutations);
  }

  typeOf(x){
    return typeof(x);
  }

}
