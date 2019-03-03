import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Weapon, Character} from '../model';

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

  areas:ImprovedArea[];
  crowns:Crown[];
  characters: String[];
  weapons:Weapon[];
  
  deadForm:FormGroup;
//TODO:  CharacterDictionary={1:"Fish",2:"Crystal",3:"Eyes",4:"Melting",5:"Plant",6:"Y.V",7:"Steroids",8:"Robot",9:"Chicken",10:"Rebel",11:"Horror",12:"Rogue"}
                    
  constructor(private fb:FormBuilder) {
    
    this.deadForm = fb.group({
      'deadArea':[{area:1,subarea:3},Validators.required], //TODO How to avoid incoherence in the default value if I dont create the areas in the constructor.
      'deadSubarea':[{value:{area:1,subarea:3,enemies:[]},disabled:true},Validators.required],
      'killedBy':[{value:null,disabled:true},Validators.required],
      'bskin':[null,null],
      'type':[GameTypeEnum.DAILY,null],
      'character':[null,null],
      'crown':[null,null],
    });


 
   }

   getDeadArea():number{
      return this.deadForm.get("deadArea").value; //TODO Refactor confusing with  getEndingArea
   }

   updateDeadArea():void{
    this.deadForm.get("deadSubarea").enable();
   }

   updateDeadSubarea():void{
     this.deadForm.get("killedBy").enable();
   }


   
  ngOnInit() {
    this.areas = [{ area: 1, subarea: 1, loop:0,enemies:[{name:"Pipo",id:0}],baseDifficulty:1 },
    { area: 1, subarea: 2, loop:0,enemies:[{name:"Duck",id:1},],baseDifficulty:2 },
    { area: 2, subarea: 1, loop:0,enemies:[{name:"Duck",id:1}], baseDifficulty:3},
    { area: 3, subarea: 1, loop:0,enemies:[{name:"Quack",id:2}], baseDifficulty:1}
  
  ]

    this.weapons = [{id:1,difficultyRequired:1,imagePath:"pipochan.com",name:"MegaWeapon"}];
    
    this.characters = ["Fish", "Crystal", "Eyes", "Plant", "Robot", "Stereoids",
      "Melting", "Y.V", "Rebel", "Chicken", "Horror", "Rogue"];

      this.crowns = [{id:0,available_after: {area:1, subarea:1, loop:0, enemies:[], baseDifficulty:1}, name:"Pipo crown",},
      {id:1,available_after: {area:2, subarea:1, loop:0, enemies:[], baseDifficulty:3}, name:"Mega duper truper pipo crown"}
    
    ];
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
    console.log("AREA:");
    console.log(area);
    for(let i=0;i<this.crowns.length;i++){
      console.log("CORONA ");
      console.log(this.crowns[i].available_after);
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
    
      let baseDifficulty = this.getEndingArea().baseDifficulty;
      //TODO Make more explicit the character is robot. Enums don't work with object

      if (this.getSelectedCharacter().id == 8) //Robot's passive reduces the difficulty number for weapon drops by 1
        baseDifficulty+=1

      if (this.getSelectedCrown()!=undefined)  //Having a crown ==> Entering a Crown Vault, which counts as entering a portal and 
             //increases the difficulty by one each time you exit them
          baseDifficulty+=1;

      if (this.getSelectedCrown().id==11) //Crown of curses increases the probability of getting cursed chests, which include 
          baseDifficulty+=2;              // weapons of +2 difficulty.
         
     
    

  
    // Cursed Chests can contain weapons from 2 difficulties higher
    return -1;
  }
 
  typeOf(x){
    return typeof(x);
  }

}
