import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


interface Area{
  area: number, subarea: number
};
interface ImprovedArea{
  area: number, subarea:number, loop:number, enemies:Enemy[]
}

interface Enemy{
  name:string,
  id:number
}

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
//TODO: https://stackoverflow.com/questions/49392123/create-property-of-object-with-form-angular-5
export class GameFormComponent implements OnInit {
  name = new FormControl('');
  daily = new FormControl('');
  endState = new FormControl('');
  DEADSTATE = "dead";
  test=true;

  areas:ImprovedArea[]
  characters: String[];

  rForm:FormGroup;
  deadForm:FormGroup;
  endGForm:FormGroup;
  

  checked: Boolean;
  constructor(private fb:FormBuilder) {
    this.rForm = fb.group({
      'gameType':[null, Validators.required],
      'endState':[null,null],
    });
    this.deadForm = fb.group({
      'deadArea':[{area:1,subarea:3},Validators.required], //TODO How to avoid incoherence in the default value if I dont create the areas in the constructor.
      'deadSubarea':[{value:{area:1,subarea:3,enemies:[]},disabled:!this.checked},Validators.required],
      'killedBy':[null,Validators.required],
    });
 
   }

   getDeadArea():number{
      return this.deadForm.get("deadArea").value;
   }

   updateDeadArea():void{
    this.deadForm.get("deadSubarea").enable();
   }
   
  ngOnInit() {
    this.checked = false;
    this.areas = [{ area: 1, subarea: 1, loop:0,enemies:[{name:"Pipo",id:0}] },
    { area: 1, subarea: 2, loop:0,enemies:[{name:"Duck",id:1}] },
    { area: 2, subarea: 1, loop:0,enemies:[{name:"Duck",id:1}] }
    ]


    this.characters = ["Fish", "Crystal", "Eyes", "Plant", "Robot", "Stereoids",
      "Melting", "Y.V", "Rebel", "Chicken", "Horror", "Rogue"];
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

  getDifficulty():Number{
    /*
    if (this.endState.value === "dead"){
      let area = this.deadArea.value;
      let subarea = this.deadSubarea.value;
      let sum= 0;
      for(let i=0;i<this.areas.length;i++){
          if (area>this.areas[i].area){
            sum+= this.areas[i].subareas;
          }
      }
      */
     
    

  
    // Cursed Chests can contain weapons from 2 difficulties higher
    return -1;
  }
 

}
