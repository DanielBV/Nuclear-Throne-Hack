
export interface Character{
    id:Number,
    iconPath:string,
    startingWeapon: Weapon
}

export interface Weapon{
    name:string,
    imagePath:string,
    id:number,
    difficultyRequired:number,
}