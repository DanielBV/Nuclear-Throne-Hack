import { Injectable } from '@angular/core';
import {Character,Weapon, Crown, characters, crowns, weapons} from './model';
import { HttpClient } from '@angular/common/http';


interface DailySeedInfo{
  seed:number;
  seq:number;
}

export interface WeeklySeedInfo{
  enforceBSkin:boolean;
  bskin:boolean;
  crown:Crown;
  character:Character;
  startWep:Weapon;
  enabled:boolean;

}

@Injectable({
  providedIn: 'root'
})
export class WeeklyDataService {

  test:WeeklySeedInfo;
  constructor(private http: HttpClient) {
    let algo = this.http.get("api/v1/todos/").subscribe((pipo)=>{

      console.log(pipo);
    console.log(typeof(pipo));   

    });
   
    
  }

  getWeeklyInfo(): WeeklySeedInfo{
    return {enforceBSkin:true, bskin:true, 
      crown:crowns[1],character:characters[3],startWep:weapons[15], enabled:false};
    
  }
}


