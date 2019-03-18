import { Injectable } from '@angular/core';
import {Mutation} from './model';

const RECYCLE_GLAND_ID = 16;
const SHOTGUN_SHOULDERS_ID = 15;
const BOLT_MARROW_ID = 21;
const BOILING_VEINS_ID = 14;
const LASER_BRAIN_ID =17;
const LONG_ARM_ID = 13;

@Injectable({
  providedIn: 'root'
})
export class MutationService {

  
  mutations:Mutation[];
  
  constructor() { 
    this.mutations =  [
      {id:0, imagePath:"assets/images/mutations/HeavyHeart.png", name:"Heavy Heart"},
{id:1, imagePath:"assets/images/mutations/RhinoSkin.png", name:"Rhino Skin"},
{id:2, imagePath:"assets/images/mutations/ExtraFeet.png", name:"Extra Feet"},
{id:3, imagePath:"assets/images/mutations/PlutoniumHunger.png", name:"Plutonium Hunger"},
{id:4, imagePath:"assets/images/mutations/RabbitPaw.png", name:"Rabbit Paw"},
{id:5, imagePath:"assets/images/mutations/ThroneButt.png", name:"Throne Butt"},
{id:6, imagePath:"assets/images/mutations/LuckyShot.png", name:"Lucky Shot"},
{id:7, imagePath:"assets/images/mutations/BloodLust.png", name:"Bloodlust"},
{id:8, imagePath:"assets/images/mutations/GammaGuts.png", name:"Gamma Guts"},
{id:9, imagePath:"assets/images/mutations/SecondStomach.png", name:"Second Stomach"},
{id:10, imagePath:"assets/images/mutations/BackMuscle.png", name:"Back Muscle"},
{id:11, imagePath:"assets/images/mutations/ScarierFace.png", name:"Scarier Face"},
{id:12, imagePath:"assets/images/mutations/Euphoria.png", name:"Euphoria"},
{id:13, imagePath:"assets/images/mutations/LongArms.png", name:"Long Arms"},
{id:14, imagePath:"assets/images/mutations/BoilingVeins.png", name:"Boiling Veins"},
{id:15, imagePath:"assets/images/mutations/ShotgunShoulders.png", name:"Shotgun Shoulders"},
{id:16, imagePath:"assets/images/mutations/RecycleGland.png", name:"Recycle Gland"},
{id:17, imagePath:"assets/images/mutations/LaserBrain.png", name:"Laser Brain"},
{id:18, imagePath:"assets/images/mutations/LastWish.png", name:"Last Wish"},
{id:19, imagePath:"assets/images/mutations/EagleEyes.png", name:"Eagle Eyes"},
{id:20, imagePath:"assets/images/mutations/ImpactWrists.png", name:"Impact Wrists"},
{id:21, imagePath:"assets/images/mutations/BoltMarrow.png", name:"Bolt Marrow"},
{id:22, imagePath:"assets/images/mutations/Stress.png", name:"Stress"},
{id:23, imagePath:"assets/images/mutations/TriggerFingers.png", name:"Trigger Fingers"},
{id:24, imagePath:"assets/images/mutations/SharpTeeth.png", name:"Sharp Teeth"},
{id:25, imagePath:"assets/images/mutations/Patience.png", name:"Patience"},
{id:26, imagePath:"assets/images/mutations/Hammerhead.png", name:"Hammerhead"},
{id:27, imagePath:"assets/images/mutations/StrongSpirit.png", name:"Strong Spirit"},
{id:28, imagePath:"assets/images/mutations/OpenMind.png", name:"Open Mind"},
    ];
  }

  getMutations():Mutation[]{
    return this.mutations;
  }

  getHeavyHeartMutation():Mutation{
    return this.mutations[0];
  }

  getWeaponSpecificMutations():Mutation[]{
      return [this.mutations[RECYCLE_GLAND_ID], this.mutations[SHOTGUN_SHOULDERS_ID], this.mutations[BOLT_MARROW_ID],
      this.mutations[BOILING_VEINS_ID], this.mutations[LASER_BRAIN_ID], this.mutations[LONG_ARM_ID]];

  }


}
