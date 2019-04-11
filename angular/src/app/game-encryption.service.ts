import { Injectable } from '@angular/core';
import {FinalData,Mutation} from 'src/app/model';
import {MutationService} from 'src/app/mutation-service.service';
import { Binary } from 'selenium-webdriver/firefox';

@Injectable({
  providedIn: 'root'
})
export class GameEncryptionService {

  constructor(private mutations:MutationService) { }

  dataToBinary(data:FinalData):string{
    let binary = this.mutationsToBinary(data.mutations);
    
    let character = this.addBinaryOffsetIfNeeded(data.character.id.toString(2),4);
    binary+=character;

    let lastHit = this.addBinaryOffsetIfNeeded(data.lasthit.id.toString(2),16);
    binary += lastHit;

    let area = this.addBinaryOffsetIfNeeded(data.area.toString(2),8);
    binary +=area;

    let subarea = this.addBinaryOffsetIfNeeded(data.subarea.toString(2),4);
    binary +=subarea;

    let crown = this.addBinaryOffsetIfNeeded(data.crown.id.toString(2),8);
    binary += crown;

    let wep = this.addBinaryOffsetIfNeeded(data.primaryWeapon.id.toString(2),16);
    binary+= wep;

    let bwep = this.addBinaryOffsetIfNeeded(data.secondaryWeapon.id.toString(2),16);
    binary+=bwep;

    let bskin = data.bskin ? "1" : "0";
    binary+=bskin;

    let ultra = this.addBinaryOffsetIfNeeded("0",2); //I don't allow ultra mutation selection, so its fixed to 0
    binary +=ultra;

    let charlevel = this.addBinaryOffsetIfNeeded(data.charlevel.toString(2),6);
    binary += charlevel;

    let loop = this.addBinaryOffsetIfNeeded(data.loop.toString(2),8);
    binary+=loop;

    let win = data.win ? "1" : "0";
    binary+=win;
    
    binary+="0"; 
  



    return binary;
  }




  private mutationsToBinary(mut:Mutation[]):string {
    let allMutations = this.mutations.mutations;
    let binary = "";

    for(let i=0;i<allMutations.length;i++){
      if(mut.includes(allMutations[i])){
        binary+="1";
      }else{
        binary+="0";
      }
    }
    return binary;
  }

  /** Checks if the length of binary is lower than length and adds 0s
   * to the left of the number so its length is 'length'.
   */
  private addBinaryOffsetIfNeeded(binary:string,length:number){
    if(binary.length==length)
      return binary;
    if(binary.length>length)
      throw "The length of the binary is greater than the specified length";
    
    if(binary.length<length)
      return "0".repeat(length-binary.length)+binary
  }

  encryptBinary(binary:string){
    let encrypted = ""
    for(let i=0;i<binary.length;i+=5){
      let char = binary.substring(i,i+5);
      if (char==="00000")
              encrypted +=  "A"
      else if ( char==="00001")
              encrypted +=  "B"
      else if ( char==="00010")
              encrypted +=  "C"
      else if ( char==="00011")
              encrypted +=  "D"
      else if ( char==="00100")
              encrypted +=  "E"
      else if ( char==="00101")
              encrypted +=  "F"
      else if ( char==="00110")
              encrypted +=  "G"
      else if ( char==="00111")
              encrypted +=  "H"
      else if ( char==="01000")
              encrypted +=  "I"
      else if ( char==="01001")
              encrypted +=  "J"
      else if ( char==="01010")
              encrypted +=  "K"
      else if ( char==="01011")
              encrypted +=  "L"
      else if ( char==="01100")
              encrypted +=  "M"
      else if ( char==="01101")
              encrypted +=  "N"
      else if ( char==="01110")
              encrypted +=  "O"
      else if ( char==="01111")
              encrypted +=  "P"
      else if ( char==="10000")
              encrypted +=  "Q"
      else if ( char==="10001")
              encrypted +=  "R"
      else if ( char==="10010")
              encrypted +=  "S"
      else if ( char==="10011")
              encrypted +=  "T"
      else if ( char==="10100")
              encrypted +=  "U"
      else if ( char==="10101")
              encrypted +=  "V"
      else if ( char==="10110")
              encrypted +=  "W"
      else if ( char==="10111")
              encrypted +=  "X"
      else if ( char==="11000")
              encrypted +=  "Y"
      else if ( char==="11001")
              encrypted +=  "Z"
      else if ( char==="11010")
              encrypted +=  "["
      else if ( char==="11011")
              encrypted +=  "\\"
      else if ( char==="11100")
              encrypted +=  "]"
      else if ( char==="11101")
              encrypted +=  "^"
      else if ( char==="11110")
              encrypted +=  "_"
      else if ( char==="11111")
              encrypted +=  "`"   
    }
    return encrypted;
  }
}
