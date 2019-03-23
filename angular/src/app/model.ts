import { pipeFromArray } from 'rxjs/internal/util/pipe';


export interface Crown{
    id:number,
    name:string,
    available_after:ImprovedArea
  }

/* TODO get Areas instead of creating new area objects */
/** Base difficulty for crowns is 1 because getting a crown implies going through the crown vault portal. Increasing the difficulty in 1. */
export var crowns:Crown[] = [{id:1, available_after:{area:0,subarea:0,loop:0, enemies:[], baseDifficulty:0}, name:"None"},
{id:2,available_after: {area:3, subarea:2, loop:1, enemies:[], baseDifficulty:1}, name:"Crown of Death"},
{id:3,available_after: {area:3, subarea:2, loop:0, enemies:[], baseDifficulty:1}, name:"Crown of Life",},
{id:4,available_after: {area:3, subarea:2, loop:0, enemies:[], baseDifficulty:1}, name:"Crown of Haste"},
{id:5,available_after: {area:3, subarea:2, loop:0, enemies:[], baseDifficulty:1}, name:"Crown of Guns"},
{id:6,available_after: {area:3, subarea:2, loop:1, enemies:[], baseDifficulty:1}, name:"Crown of Hatred"},
{id:7,available_after: {area:3, subarea:2, loop:1, enemies:[], baseDifficulty:1}, name:"Crown of Blood"},
{id:8,available_after: {area:3, subarea:2, loop:0, enemies:[], baseDifficulty:1}, name:"Crown of Destiny"},
{id:9,available_after: {area:3, subarea:2, loop:1, enemies:[], baseDifficulty:1}, name:"Crown of Love"},
{id:10, available_after: {area:3, subarea:2, loop:0, enemies:[], baseDifficulty:1}, name:"Crown of Risk"},
{id:11, available_after: {area:3, subarea:2, loop:0, enemies:[], baseDifficulty:3}, name:"Crown of Curses"},
{id:12, available_after: {area:3, subarea:2, loop:1, enemies:[], baseDifficulty:1}, name:"Crown of Luck"},
{id:13, available_after: {area:3, subarea:2, loop:1, enemies:[], baseDifficulty:1}, name:"Crown of Protection"},
];

export interface Character{
    id:Number,
    iconPath:string,
    startingWeapon: Weapon,
    name:string,
}

/** TODO Review fish id */


export interface Weapon{
    name:string,
    imagePath:string,
    id:number,
    difficultyRequired:number,
}

export var weapons:Weapon[] = [
    {id:1, imagePath:"assets/images/weapons/Revolver.png", name:"Revolver", difficultyRequired:0},
{id:3, imagePath:"assets/images/weapons/Wrench.png", name:"Wrench", difficultyRequired:0},
{id:4, imagePath:"assets/images/weapons/MachineGun.png", name:"Machinegun", difficultyRequired:0},
{id:5, imagePath:"assets/images/weapons/Shotgun.png", name:"Shotgun", difficultyRequired:0},
{id:6, imagePath:"assets/images/weapons/Crossbow.png", name:"Crossbow", difficultyRequired:0},
{id:7, imagePath:"assets/images/weapons/GrenadeLauncher.png", name:"Grenade Launcher", difficultyRequired:0},
{id:17, imagePath:"assets/images/weapons/AssaultRifle.png", name:"Assault Rifle", difficultyRequired:0},
{id:19, imagePath:"assets/images/weapons/LaserPistol.png", name:"Laser Pistol", difficultyRequired:0},
{id:21, imagePath:"assets/images/weapons/Slugger.png", name:"Slugger", difficultyRequired:0},
{id:27, imagePath:"assets/images/weapons/Screwdriver.png", name:"Screwdriver", difficultyRequired:0},
{id:16, imagePath:"assets/images/weapons/SMG.png", name:"SMG", difficultyRequired:1},
{id:69, imagePath:"assets/images/weapons/PopGun.png", name:"Pop Gun", difficultyRequired:1},
{id:18, imagePath:"assets/images/weapons/DiscGun.png", name:"Disc Gun", difficultyRequired:1},
{id:2, imagePath:"assets/images/weapons/TripleMachinegun.png", name:"Triple Machinegun", difficultyRequired:2},
{id:71, imagePath:"assets/images/weapons/PoprRifle.png", name:"Pop Rifle", difficultyRequired:2},
{id:13, imagePath:"assets/images/weapons/Shovel.png", name:"Shovel", difficultyRequired:2},
{id:88, imagePath:"assets/images/weapons/Sledgehammer.png", name:"Sledgehammer", difficultyRequired:2},
{id:8, imagePath:"assets/images/weapons/DoubleShotgun.png", name:"Double Shotgun", difficultyRequired:3},
{id:75, imagePath:"assets/images/weapons/FlameShotgun.png", name:"Flame Shotgun", difficultyRequired:3},
{id:23, imagePath:"assets/images/weapons/AssaultSlugger.png", name:"Assault Slugger", difficultyRequired:3},
{id:31, imagePath:"assets/images/weapons/ToxicBow.png", name:"Toxic Bow", difficultyRequired:3},
{id:66, imagePath:"assets/images/weapons/HeavyCrossbow.png", name:"Heavy Crossbow", difficultyRequired:3},
{id:30, imagePath:"assets/images/weapons/SplinterGun.png", name:"Splinter Gun", difficultyRequired:3},
{id:72, imagePath:"assets/images/weapons/ToxicLauncher.png", name:"ToxicLauncher", difficultyRequired:3},
{id:14, imagePath:"assets/images/weapons/Bazooka.png", name:"Bazooka", difficultyRequired:3},
{id:50, imagePath:"assets/images/weapons/FlameThrower.png", name:"Flame Thrower", difficultyRequired:3},
{id:20, imagePath:"assets/images/weapons/LaserRifle.png", name:"Laser Rifle", difficultyRequired:3},
{id:34, imagePath:"assets/images/weapons/Plasmagun.png", name:"Plasma Gun", difficultyRequired:3},
{id:37, imagePath:"assets/images/weapons/Jackhammer.png", name:"Jackhammer", difficultyRequired:3},
{id:9, imagePath:"assets/images/weapons/Minigun.png", name:"Minigun", difficultyRequired:4},
{id:117, imagePath:"assets/images/weapons/BouncerShotgun.png", name:"Bouncer Shotgun", difficultyRequired:4},
{id:116, imagePath:"assets/images/weapons/Bouncer_Smg.png", name:"Bouncer SMG", difficultyRequired:4},
{id:61, imagePath:"assets/images/weapons/Sawedoffshotgun.png", name:"Sawed-off Shotgun", difficultyRequired:4},
{id:10, imagePath:"assets/images/weapons/AutoShotgun.png", name:"Auto Shotgun", difficultyRequired:4},
{id:38, imagePath:"assets/images/weapons/FlakCannon.png", name:"Flak Cannon", difficultyRequired:4},
{id:62, imagePath:"assets/images/weapons/SplinterPistol.png", name:"Splinter Pistol", difficultyRequired:4},
{id:52, imagePath:"assets/images/weapons/FlareGun.png", name:"Flare Gun", difficultyRequired:4},
{id:57, imagePath:"assets/images/weapons/LightningPistol.png", name:"Lightning Pistol", difficultyRequired:4},
{id:76, imagePath:"assets/images/weapons/DoubleFlameShotgun.png", name:"Double Flame Shotgun", difficultyRequired:5},
{id:11, imagePath:"assets/images/weapons/AutoCrossbow.png", name:"Auto Crossbow", difficultyRequired:5},
{id:112, imagePath:"assets/images/weapons/SeekerPistol.png", name:"Seeker Pistol", difficultyRequired:5},
{id:15, imagePath:"assets/images/weapons/StickyGrenadeLauncher.png", name:"Sticky Launcher", difficultyRequired:5},
{id:79, imagePath:"assets/images/weapons/GrenadeShotgun.png", name:"Grenade Shotgun", difficultyRequired:5},
{id:78, imagePath:"assets/images/weapons/ClusterLauncher.png", name:"Cluster Launcher", difficultyRequired:5},
{id:55, imagePath:"assets/images/weapons/LaserCannon.png", name:"Laser Cannon", difficultyRequired:5},
{id:26, imagePath:"assets/images/weapons/HyperRifle.png", name:"Hyper Rifle", difficultyRequired:6},
{id:114, imagePath:"assets/images/weapons/Eraser.png", name:"Eraser", difficultyRequired:6},
{id:12, imagePath:"assets/images/weapons/SuperCrossbow.png", name:"Super Crossbow", difficultyRequired:6},
{id:63, imagePath:"assets/images/weapons/SuperSplinterGun.png", name:"Super Splinter Gun", difficultyRequired:6},
{id:124, imagePath:"assets/images/weapons/HeavyGrenadeLauncher.png", name:"Heavy Grenade Launcher", difficultyRequired:6},
{id:70, imagePath:"assets/images/weapons/PlasmaRifle.png", name:"Plasma Rifle", difficultyRequired:6},
{id:58, imagePath:"assets/images/weapons/LightningRifle.png", name:"Lightning Rifle", difficultyRequired:6},
{id:22, imagePath:"assets/images/weapons/GattlingSlugger.png", name:"Gattling Slugger", difficultyRequired:7},
{id:89, imagePath:"assets/images/weapons/HeavyRevolver.png", name:"Heavy Revolver", difficultyRequired:7},
{id:113, imagePath:"assets/images/weapons/SeekerShotgun.png", name:"Seeker Shotgun", difficultyRequired:7},
{id:80, imagePath:"assets/images/weapons/GrenadeRifle.png", name:"Grenade Rifle", difficultyRequired:7},
{id:28, imagePath:"assets/images/weapons/LaserMinigun.png", name:"Laser Minigun", difficultyRequired:7},
{id:59, imagePath:"assets/images/weapons/LightningShotgun.png", name:"Lightning Shotgun", difficultyRequired:7},
{id:53, imagePath:"assets/images/weapons/EnergyScrewdriver.png", name:"Energy Screwdriver", difficultyRequired:7},
{id:65, imagePath:"assets/images/weapons/SmartGun.png", name:"Smart Gun", difficultyRequired:8},
{id:90, imagePath:"assets/images/weapons/HeavyMachinegun.png", name:"Heavy Machinegun", difficultyRequired:8},
{id:33, imagePath:"assets/images/weapons/WaveGun.png", name:"Wave Gun", difficultyRequired:8},
{id:77, imagePath:"assets/images/weapons/AutoFlameShotgun.png", name:"Auto Flame Shotgun", difficultyRequired:8},
{id:25, imagePath:"assets/images/weapons/SuperSlugger.png", name:"Super Slugger", difficultyRequired:8},
{id:91, imagePath:"assets/images/weapons/HeavySlugger.png", name:"Heavy Slugger", difficultyRequired:8},
{id:47, imagePath:"assets/images/weapons/NukeLauncher.png", name:"Nuke Launcher", difficultyRequired:8},
{id:29, imagePath:"assets/images/weapons/BloodLauncher.png", name:"Blood Launcher", difficultyRequired:8},
{id:67, imagePath:"assets/images/weapons/BloodHammer.png", name:"Blood Hammer", difficultyRequired:8},
{id:24, imagePath:"assets/images/weapons/EnergySword.png", name:"Energy Sword", difficultyRequired:8},
{id:36, imagePath:"assets/images/weapons/EnergyHammer.png", name:"Energy Hammer", difficultyRequired:8},
{id:119, imagePath:"assets/images/weapons/SuperBazooka.png", name:"Super Bazooka", difficultyRequired:9},
{id:35, imagePath:"assets/images/weapons/PlasmaCannon.png", name:"Plasma Cannon", difficultyRequired:9},
{id:74, imagePath:"assets/images/weapons/LightningHammer.png", name:"Lightning Hammer", difficultyRequired:9},
{id:49, imagePath:"assets/images/weapons/QuadrupleMachinegun.png", name:"Quadruple Machinegun", difficultyRequired:10},
{id:60, imagePath:"assets/images/weapons/SuperFlakCannon.png", name:"Super FlakCannon", difficultyRequired:10},
{id:84, imagePath:"assets/images/weapons/GatlingBazooka.png", name:"Gatling Bazooka", difficultyRequired:10},
{id:107, imagePath:"assets/images/weapons/BloodCannon.png", name:"Blood Cannon", difficultyRequired:10},
{id:106, imagePath:"assets/images/weapons/HeavyAssaultRifle.png", name:"Heavy Assault Rifle", difficultyRequired:11},
{id:51, imagePath:"assets/images/weapons/Dragon.png", name:"Dragon", difficultyRequired:11},
{id:73, imagePath:"assets/images/weapons/FlameCannon.png", name:"Flame Cannon", difficultyRequired:11},
{id:64, imagePath:"assets/images/weapons/LightningSMG.png", name:"Lightning SMG", difficultyRequired:11},
{id:68, imagePath:"assets/images/weapons/LightningCannon.png", name:"Lightning Cannon", difficultyRequired:11},
{id:83, imagePath:"assets/images/weapons/DoubleMinigun.png", name:"Double Minigun", difficultyRequired:12},
{id:54, imagePath:"assets/images/weapons/HyperLauncher.png", name:"Hyper Launcher", difficultyRequired:12},
{id:85, imagePath:"assets/images/weapons/AutoGrenadeShotgun.png", name:"Auto Grenade Shotgun", difficultyRequired:12},
{id:118, imagePath:"assets/images/weapons/HyperSlugger.png", name:"Hyper Slugger", difficultyRequired:13},
{id:96, imagePath:"assets/images/weapons/PlasmaMinigun.png", name:"Plasma Minigun", difficultyRequired:13},
{id:105, imagePath:"assets/images/weapons/HeavyAutoCrossbow.png", name:"Heavy Auto Crossbow", difficultyRequired:14},
{id:110, imagePath:"assets/images/weapons/Incinerator.png", name:"Incinerator", difficultyRequired:14},
{id:111, imagePath:"assets/images/weapons/SuperPlasmaCannon.png", name:"Super Plasma Cannon", difficultyRequired:14},
{id:97, imagePath:"assets/images/weapons/Devastator.png", name:"Devastator", difficultyRequired:14},
{id:41, imagePath:"assets/images/weapons/GoldenMachinegun.png", name:"Golden Machinegun", difficultyRequired:16},
{id:42, imagePath:"assets/images/weapons/GoldenShotgun.png", name:"Golden Shotgun", difficultyRequired:16},
{id:43, imagePath:"assets/images/weapons/GoldenCrossbow.png", name:"Golden Crossbow", difficultyRequired:16},
{id:44, imagePath:"assets/images/weapons/GoldenGrenadeLauncher.png", name:"Golden Grenade Launcher", difficultyRequired:16},
{id:45, imagePath:"assets/images/weapons/GoldenLaserPistol.png", name:"Golden Laser Pistol", difficultyRequired:16},
{id:40, imagePath:"assets/images/weapons/GoldenWrench.png", name:"Golden Wrench", difficultyRequired:16},
{id:103, imagePath:"assets/images/weapons/GoldenAssaultRifle.png", name:"Golden Assault Rifle", difficultyRequired:18},
{id:99, imagePath:"assets/images/weapons/GoldenSlugger.png", name:"Golden Slugger", difficultyRequired:18},
{id:100, imagePath:"assets/images/weapons/GoldenSplinterGun.png", name:"Golden Splinter Gun", difficultyRequired:18},
{id:102, imagePath:"assets/images/weapons/GoldenBazooka.png", name:"Golden Bazooka", difficultyRequired:18},
{id:98, imagePath:"assets/images/weapons/GoldenPlasmagun.png", name:"Golden Plasmagun", difficultyRequired:18},
{id:101, imagePath:"assets/images/weapons/GoldenScrewdriver.png", name:"Golden Screwdriver", difficultyRequired:18},
{id:86, imagePath:"assets/images/weapons/UltraRevolver.png", name:"Ultra Revolver", difficultyRequired:19},
{id:93, imagePath:"assets/images/weapons/UltraShotgun.png", name:"Ultra Shotgun", difficultyRequired:19},
{id:94, imagePath:"assets/images/weapons/UltraCrossbow.png", name:"Ultra Crossbow", difficultyRequired:19},
{id:95, imagePath:"assets/images/weapons/UltraGrenadeLauncher.png", name:"Ultra Grenade Launcher", difficultyRequired:19},
{id:87, imagePath:"assets/images/weapons/UltraLaserPistol.png", name:"Ultra Laser Pistol", difficultyRequired:19},
{id:92, imagePath:"assets/images/weapons/UltraShovel.png", name:"Ultra Shovel", difficultyRequired:19},
{id:120, imagePath:"assets/images/weapons/FrogPistol.png", name:"Frog Pistol", difficultyRequired:20},
];


export function getCrown(id:number):Crown{
    for(let i=0;i<crowns.length;i++){
        if(crowns[i].id===id){
            return crowns[i];
        }
    }
    return null;

}

export function getWeapon(id:number):Weapon{
    for(let i=0;i<weapons.length;i++){
        if(weapons[i].id===id){
            return weapons[i];
        }
    }
    return null;
}

/** TODO Remove revolver from game form
 * 
 * - Divide weapons into two: All and obtainable
 */
export var characters:Character[] = [
    {id:1,name:"Fish",iconPath:"assets/images/characters/fish.png", startingWeapon:weapons[0]},
    {id:2, name:"Crystal",iconPath:"assets/images/characters/crystal.png", startingWeapon:weapons[0]},
    {id:3, name:"Eyes",iconPath:"assets/images/characters/eyes.png", startingWeapon:weapons[0]},
    {id:4, name:"Melting",iconPath:"assets/images/characters/melting.png", startingWeapon:weapons[0]},
    {id:5, name:"Plant",iconPath:"assets/images/characters/plant.png", startingWeapon:weapons[0]},
    {id:6, name:"Y.V",iconPath:"assets/images/characters/yv.png", startingWeapon:null},
    {id:7, name:"Steroids",iconPath:"assets/images/characters/steroids.png", startingWeapon:weapons[0]},
    {id:8, name:"Robot",iconPath:"assets/images/characters/robot.png", startingWeapon:weapons[0]},
    {id:9, name:"Chicken",iconPath:"assets/images/characters/chicken.png", startingWeapon:null},
    {id:10, name:"Rebel",iconPath:"assets/images/characters/rebel.png", startingWeapon:weapons[0]},
    {id:11, name:"Horror",iconPath:"assets/images/characters/horror.png", startingWeapon:weapons[0]},
    {id:12, name:"Rogue",iconPath:"assets/images/characters/rogue.png", startingWeapon:null},
];

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

export interface ImprovedArea{
    area: number, subarea:number, loop:number, enemies:Enemy[], baseDifficulty:number
  }


export interface Enemy{
    name:string,
    id:number
  }
  
