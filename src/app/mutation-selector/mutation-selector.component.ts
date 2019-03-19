import { Component, OnInit, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {MutationService} from '../mutation-service.service';
import {Mutation,getNumOfRemainingMutations} from '../model';


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
    this.controls.forEach(con => con.valueChanges.subscribe( (value)=> this.checkRemainingMutations(value))) 
    this.findControl(this.mutationService.getHeavyHeartMutation()).disable({emitEvent:false});

  }

  ngOnInit() {
  

  }


  checkRemainingMutations(value){
    this.checkHeavyHeartAllowed();
    let patienceControl =  this.findControl(this.mutationService.getPatience());
    if (this.getRemainingMutations()<=0)
      this.controls.forEach((con) => {
        if (!con.disabled && !con.value && con!==patienceControl)
          con.disable({emitEvent:false});
      })
    else{
      this.controls.forEach((con) => {
        if (con.disabled)
          con.enable({emitEvent:false});
   } );
   this.checkHeavyHeartAllowed();

}};


  checkHeavyHeartAllowed(){
    let specific = this.mutationService.getWeaponSpecificMutations();
    let numWeaponSpecificMut = specific.filter((mut)=> this.getSelectedMutations().indexOf(mut)!=-1).length;
    
    let hhControl = this.findControl(this.mutationService.getHeavyHeartMutation());
    if (numWeaponSpecificMut>=3 && hhControl.disabled){
      hhControl.enable({emitEvent:false});
    }

    if(numWeaponSpecificMut<3 && !hhControl.disabled){
      hhControl.setValue(false,{emitEvent:false});
      hhControl.disable({emitEvent:false});
    }

  }

  findControl(mutation: Mutation):FormControl{
      let i = this.mutations.indexOf(mutation);
      if (i===-1)
        throw new Error('Mutation ' + mutation.id + ' not found');
 
      return this.controls[i];
  }

  updateActiveMutations(active:Mutation[]){
    active.forEach(element => 
       {
        this.findControl(element).setValue(true);
      }
  )};


  @Input() set activeMutations(value: Mutation[]) {
    this._activeMutations = value;
    this.updateActiveMutations(value);

 }

  get selectedWeapon(): Mutation[] {

      return this._activeMutations;

  }

  getRemainingMutations(){
    return  getNumOfRemainingMutations(this.numberOfMutations, this.getSelectedMutations());

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
