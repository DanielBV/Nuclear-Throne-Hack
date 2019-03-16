import { Component, OnInit, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {MutationService} from '../mutation-service.service';
import {Mutation} from '../model';


@Component({
  selector: 'app-mutation-selector',
  templateUrl: './mutation-selector.component.html',
  styleUrls: ['./mutation-selector.component.css']
})
export class MutationSelectorComponent implements OnInit {


  @Input() numberOfMutations:number;
  @Input() _activeMutations: Mutation[];
  @Input() mutations: Mutation[];

  controls:FormControl[];
  
 

  constructor(public activeModal: NgbActiveModal, public mutationService: MutationService) {  

    this.controls = [];
    this.mutations = mutationService.getMutations();
    this.mutations.map(element=>this.controls.push(new FormControl())); 
  }

  ngOnInit() {
  

  }

  updateActiveMutations(active:Mutation[]){
    active.forEach(element => 
      {
        let i = this.mutations.indexOf(element);
        this.controls[i].setValue(true);
      }
  )};


  @Input() set activeMutations(value: Mutation[]) {
    console.log("PIPO" + this.controls);
    this._activeMutations = value;
    this.updateActiveMutations(value);

 }

  get selectedWeapon(): Mutation[] {

      return this._activeMutations;

  }

  getRemainingMutations(){
    /**TODO */
    return 8;
  }

  getSelectedMutations(){
    let mutations:Mutation[] = [];
    
    this.controls.forEach((control,i) =>{
    if(control.value)
      mutations.push(this.mutations[i])
    });

    return mutations;
  } 

  closeWindow(){
    console.log(this.controls);
    this.activeModal.close(this.getSelectedMutations());
  }
}
