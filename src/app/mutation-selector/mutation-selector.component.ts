import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mutation-selector',
  templateUrl: './mutation-selector.component.html',
  styleUrls: ['./mutation-selector.component.css']
})
export class MutationSelectorComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
