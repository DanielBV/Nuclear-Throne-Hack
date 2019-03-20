import { Injectable } from '@angular/core';
import {Character,Weapon, Crown, characters, crowns, weapons} from './model';


interface DailySeedInfo{
  seed:number;
  seq:number;
}

interface WeeklySeedInfo{
  enforceBSkin:boolean;
  bskin:boolean;
  crown:Crown;
  character:Character;
  startWep:Weapon;

}

@Injectable({
  providedIn: 'root'
})
export class WeeklyDataService {

  constructor() { 
  }

  getWeeklyInfo(): WeeklySeedInfo{
    return {enforceBSkin:true, bskin:true, 
      crown:crowns[1],character:characters[0],startWep:weapons[3]};
    
  }
}


