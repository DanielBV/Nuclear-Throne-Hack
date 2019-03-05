
export interface UltraMutation{
    id:number,
    name:string
  }
export interface Character{
    id:Number,
    iconPath:string,
    startingWeapon: Weapon
    ultramutations:UltraMutation[],
    name:string,
}

export interface Weapon{
    name:string,
    imagePath:string,
    id:number,
    difficultyRequired:number,
}