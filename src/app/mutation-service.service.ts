import { Injectable } from '@angular/core';
import {Mutation} from './model';


@Injectable({
  providedIn: 'root'
})
export class MutationService {


  mutations:Mutation[];
  
  constructor() { 
    this.mutations =  [
      {id:0, imagePath:"assets/images/mutations/BoilingVeins.png",name:"apaapap"},
      {id:1, imagePath:"assets/images/mutations/BoilingVeins.png",name:"NANANANANALIDER"},
      {id:2, imagePath:"assets/images/mutations/BoilingVeins.png",name:"NANANANANALIDER"},
      {id:3, imagePath:"assets/images/mutations/BoilingVeins.png",name:"NANANANANALIDER"},
      {id:4, imagePath:"assets/images/mutations/BoilingVeins.png",name:"NANANANANALIDER"},
      {id:5,imagePath:"assets/images/mutations/BoilingVeins.png",name:"NANANANANALIDER"}
    ];
  }

  getMutations():Mutation[]{
    return this.mutations;
  }


}
