import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FinalData, GameTypeEnum } from '../model';
import {GameEncryptionService} from 'src/app/game-encryption.service';
import {GameDataService} from 'src/app/weekly-data.service';

import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-confirmation-box',
  templateUrl: './confirmation-box.component.html',
  styleUrls: ['./confirmation-box.component.css']
})
export class ConfirmationBoxComponent implements OnInit {

  _data:FinalData;
  confirmed:boolean;
  daily:boolean;
  finished: boolean;
  sleeptime: number;
  constructor(public activeModal: NgbActiveModal,private encryptor:GameEncryptionService, private api:GameDataService) { }

  ngOnInit() {
    this.confirmed = false;
    this.finished = false;
  }


  @Input() set data(value:FinalData){
    this._data =value;
    this.daily = value.type === GameTypeEnum.DAILY;
  }

  get data(){
    return this._data;
  }

  getCharacterName(){
    return this.data.character.name;
  }

  getCharacterImage(){
    return this.data.character.iconPath;
  }

  getLastHitName(){
    return this.data.lasthit.name;
  }

  getLastHitIcon(){
    return this.data.lasthit.imagePath;
  }

  getEndingAreaLabel():string{
    return `Loop ${this.data.loop} - Area ${this.data.area}-${this.data.subarea}`
  }

  hasBskin():string{
    if (this._data.bskin)
      return "Yes"
    else
      return "No"

  }

  getEnemiesKilled(){
    return this.data.kills;
  }

  getPrimaryWeaponName(){
    return this.data.primaryWeapon.name;
  }

  getSecondaryWeaponName(){
    return this.data.secondaryWeapon.name;
  }

  getPrimaryWeaponImage(){
    return this.data.primaryWeapon.imagePath;
  }

  getSecondaryWeaponImage(){
    return this.data.secondaryWeapon.imagePath;
  }

  getMutations(){
    return this.data.mutations;
  }

  getSteamID(){
    return this.data.steam_id;
  }

  calculateSleepTime(){
    let loop = this.data.loop;
    let area = this.data.area;
    let timetosleepmin=70*area+70*7*loop;
    let timetosleepmax=95*area + 95 * 7 * loop;
    
   return Math.floor(Math.random() * (timetosleepmax-timetosleepmin+1)) + timetosleepmin;
  }

  confirm(){
    this.confirmed = true;

    if (this.daily){
      let binary = this.encryptor.getInitialDailyBinary(this.data);
      let encoded_binary = this.encryptor.encryptBinary(binary);
      this.api.sendInitialDaily(this.data.steam_id, encoded_binary).subscribe();

      this.sleeptime = this.calculateSleepTime();

      let p = interval(1000).pipe(
        map((x) => { 
          if (this.sleeptime>0){this.sleeptime -= 1;}
          else{
            this.finished = true;
            p.unsubscribe();
            let post_binary = this.encryptor.dataToBinary(this.data);
            let post_encoded_binary = this.encryptor.encryptBinary(post_binary);
            this.api.sendDaily(this.data.steam_id, this.data.kills.toString(), post_encoded_binary).subscribe();     
          }
      
      })
      ).subscribe();
      }else{
        this.finished = true;
        let binary = this.encryptor.dataToBinary(this.data);
        let encoded_binary = this.encryptor.encryptBinary(binary);

        this.api.sendWeekly(this.data.steam_id, this.data.kills.toString(),encoded_binary).subscribe();
      
      }
    }
 
    close(){
      this.activeModal.close();
    }

}

