import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {Weapon} from '../model';

@Component({
  selector: 'content',
  styleUrls: ['./weapon-selector.component.css'],
  templateUrl: './weapon-selector.component.html'
})
export class WeaponSelectorModal {
  @Input() name;
  @Input() weapons:Weapon[];
  constructor(public activeModal: NgbActiveModal) {}
}

