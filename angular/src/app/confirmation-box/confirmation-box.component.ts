import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FinalData } from '../model';

@Component({
  selector: 'app-confirmation-box',
  templateUrl: './confirmation-box.component.html',
  styleUrls: ['./confirmation-box.component.css']
})
export class ConfirmationBoxComponent implements OnInit {

  _data:FinalData;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }


  @Input() set data(value:FinalData){
    this._data =value;
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

  getEndingArea():string{
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

}
