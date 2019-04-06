import { Injectable } from '@angular/core';
import {Character,Weapon, Crown, characters, getCrown, getWeapon} from './model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

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
    /** TODO Rename api */
   
  
   
    
  }

  getWeeklyInfo(): Observable<WeeklySeedInfo>{
    return this.http.get("api/weeklydata").pipe(
      mergeMap(
       
        (data)=>{
        data =data["weekly"];
        return of({enforceBSkin:true, bskin: "1"===data["bskin"], 
        crown:getCrown(parseInt(data["crown"],10)),character:characters[parseInt(data["char"],10)-1],startWep: getWeapon(parseInt(data["startwep"],10)), enabled:data["active"]==='true'})
      
      })
      );
    
    /*(mergeMap(pipo:any)=>{

      console.log(pipo);
    console.log(typeof(pipo));   
    return  {enforceBSkin:true, bskin: "1"===pipo.bskin, 
    crown:crowns[parseInt(pipo.crown,10)],character:characters[parseInt(pipo.char,10)-1],startWep:weapons[0], enabled:pipo.active==="true"};
  

    }));*/

  }
}


