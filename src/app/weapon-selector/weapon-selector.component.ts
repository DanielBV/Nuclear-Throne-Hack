import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {Weapon} from '../model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'content',
  styleUrls: ['./weapon-selector.component.css'],
  templateUrl: './weapon-selector.component.html'
})
export class WeaponSelectorModal {
  
  _selectedWeapon:Weapon;
  @Input() weapons:Weapon[];

  selectedWeaponForm= new FormControl();
  
  constructor(public activeModal: NgbActiveModal) {
  
    
  }

  
  @Input() set selectedWeapon(value: Weapon) {
    this.selectedWeaponForm.setValue(value);
    this._selectedWeapon = value;
    

 }

 get selectedWeapon(): Weapon {

     return this._selectedWeapon;

 }

 closeWindow(){
   this.activeModal.close(this.selectedWeaponForm.value);
 }
}

