import { Injectable } from '@angular/core';
import {Character,Weapon, Crown, characters, getCrown, getWeapon} from './model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export interface DailyInfo{
  seq:string;
}

export interface WeeklyInfo{
  enforceBSkin:boolean;
  bskin:boolean;
  crown:Crown;
  character:Character;
  startWep:Weapon;
  enabled:boolean;
  seq:number;

}

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  test:WeeklyInfo;
  constructor(private http: HttpClient) {}

  getWeeklyInfo(): Observable<WeeklyInfo>{
    return this.http.get("/api/weeklydata").pipe(
      mergeMap(
       
        (data)=>{
        data =data["weekly"];
        return of(
            {seq:data["seq"],
            enforceBSkin:true,
            bskin: "1"===data["bskin"], 
            crown:getCrown(parseInt(data["crown"],10)),
            character:characters[parseInt(data["char"],10)-1],
            startWep: getWeapon(parseInt(data["startwep"],10)), 
            enabled:data["active"]==='true'})
      
      })
      );
  }

  getDailyInfo():Observable<DailyInfo>{
    return this.http.get("/api/dailydata").pipe(
      mergeMap(
        (data)=>{
        data =data["daily"];
        return of({seq:data["seq"]});
       }));
  }


  hasPlayedDaily(seq:string,steam_id:string):Observable<{played:boolean,success:number,errorString:string}>{
    let data = {
      seq:seq,
      steam_id:steam_id
    };
    return this.http.post<{played:boolean,success:number,errorString:string}>("/api/played-daily",data);
}


  sendInitialDaily(steam_id:string, binary:string):Observable<{success:number}>{
    let data = {
      steam_id: steam_id,
      binary:binary
    }
    return this.http.post<{success:number}>("/api/send/daily-initial",data);
  }

  sendDaily(steam_id:string, kills:string, binary:string){
     let data = {
       steam_id:steam_id,
       kills:kills,
       binary:binary
     }

     return this.http.post<{success:number}>("/api/send/daily",data);

  }

  sendWeekly(steam_id:string, kills:string, binary:string){
    let data = {
      steam_id:steam_id,
      kills:kills,
      binary:binary
    }

    return this.http.post<{success:number}>("api/send/weekly",data);

 }

}



