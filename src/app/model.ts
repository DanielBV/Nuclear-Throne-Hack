
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