import { pipeFromArray } from 'rxjs/internal/util/pipe';

export interface Character{
    id:Number,
    iconPath:string,
    startingWeapon: Weapon,
    name:string,
}

export interface Weapon{
    name:string,
    imagePath:string,
    id:number,
    difficultyRequired:number,
}

export interface Mutation{
    name:string,
    imagePath:string,
    id:number,
}

const PATIENCE_ID = 25;

export function getNumOfRemainingMutations(allowedMutations:number, selectedMutations:Mutation[]){
    let num = allowedMutations;

    for (let i=0; i < selectedMutations.length;i++){
        if (selectedMutations[i].id !== 25) {
            
            num--;
        }
    }

    return num;

}