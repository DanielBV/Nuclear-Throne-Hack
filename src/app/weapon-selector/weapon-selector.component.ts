import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Weapon} from '../model';

@Component({
  selector: 'content',
  styleUrls: ['./weapon-selector.component.css'],
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;
  @Input() weapons:Weapon[];
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-weapon-selector',
  templateUrl:  './weapon-selector.component.html',
})
export class WeaponSelectorComponent {
  constructor(private modalService: NgbModal) {}
  @Input() weapons:Weapon[];
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}
