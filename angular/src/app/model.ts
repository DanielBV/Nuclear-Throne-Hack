import { sequenceEqual, first } from 'rxjs/operators';


export enum GameTypeEnum{
    DAILY="daily",
    WEEKLY="weekly"
  }

  
  export let areas = [{ area: 1, subarea: 1, loop: 0, minKills:5,maxKills:16,baseDifficulty: 0, mutations:0, enemies: [{ name: "Bandit", imagePath: "assets/images/lasthit/Bandit.png", id: 0 }, { name: "Maggot", imagePath: "assets/images/lasthit/Maggot.png", id: 1 }, { name: "Rad Maggot", imagePath: "assets/images/lasthit/RadMaggot.png", id: 2 }, { name: "Big Maggot", imagePath: "assets/images/lasthit/BigMaggot.png", id: 3 }, { name: "Scorpion", imagePath: "assets/images/lasthit/Scorpion.png", id: 4 }, { name: "Gold Scorpion", imagePath: "assets/images/lasthit/GoldScorpion.png", id: 5 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Barrel", imagePath: "assets/images/lasthit/Barrel.png", id: 61 },] },
  { area: 1, subarea: 2, loop: 0, baseDifficulty: 1,minKills:15,maxKills:35, mutations:0, enemies: [{ name: "Bandit", imagePath: "assets/images/lasthit/Bandit.png", id: 0 }, { name: "Maggot", imagePath: "assets/images/lasthit/Maggot.png", id: 1 }, { name: "Rad Maggot", imagePath: "assets/images/lasthit/RadMaggot.png", id: 2 }, { name: "Big Maggot", imagePath: "assets/images/lasthit/BigMaggot.png", id: 3 }, { name: "Scorpion", imagePath: "assets/images/lasthit/Scorpion.png", id: 4 }, { name: "Gold Scorpion", imagePath: "assets/images/lasthit/GoldScorpion.png", id: 5 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Barrel", imagePath: "assets/images/lasthit/Barrel.png", id: 61 },] },
  { area: 1, subarea: 3, loop: 0, baseDifficulty: 2,minKills:35,maxKills:100, mutations:1,enemies: [{ name: "Bandit", imagePath: "assets/images/lasthit/Bandit.png", id: 0 }, { name: "Maggot", imagePath: "assets/images/lasthit/Maggot.png", id: 1 }, { name: "Rad Maggot", imagePath: "assets/images/lasthit/RadMaggot.png", id: 2 }, { name: "Big Maggot", imagePath: "assets/images/lasthit/BigMaggot.png", id: 3 }, { name: "Scorpion", imagePath: "assets/images/lasthit/Scorpion.png", id: 4 }, { name: "Gold Scorpion", imagePath: "assets/images/lasthit/GoldScorpion.png", id: 5 }, { name: "Big Bandit", imagePath: "assets/images/lasthit/BigBandit.png", id: 6 }, { name: "Barrel", imagePath: "assets/images/lasthit/Barrel.png", id: 61 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 },] },
  { area: 2, subarea: 1, loop: 0, baseDifficulty: 3,minKills:80,maxKills:115,mutations:2, enemies: [{ name: "Bandit", imagePath: "assets/images/lasthit/Bandit.png", id: 0 }, { name: "Rat", imagePath: "assets/images/lasthit/Rat.png", id: 7 }, { name: "Rat King", imagePath: "assets/images/lasthit/RatKing.png", id: 8 }, { name: "Green Rat", imagePath: "assets/images/lasthit/GreenRat.png", id: 9 }, { name: "Alligartor", imagePath: "assets/images/lasthit/Alligator.png", id: 10 }, { name: "Buff Aligator", imagePath: "assets/images/lasthit/BuffAlligator.png", id: 95 }, { name: "Ballguy", imagePath: "assets/images/lasthit/Ballguy.png", id: 11 }, { name: "Toxic Ballguy", imagePath: "assets/images/lasthit/ToxicBallguy.png", id: 12 }, { name: "Assasin", imagePath: "assets/images/lasthit/Assasin.png", id: 14 }, { name: "Mimic", imagePath: "assets/images/lasthit/Mimic.png", id: 49 }, { name: "Health Mimic", imagePath: "assets/images/lasthit/HealthMimic.png", id: 50 }, { name: "Toxic Barrel", imagePath: "assets/images/lasthit/ToxicBarrel.png", id: 62 }, { name: "Toxin", imagePath: "assets/images/lasthit/None", id: 59 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 },] },
  { area: 3, subarea: 1, loop: 0, baseDifficulty: 4,minKills:80,maxKills:132,mutations:2, enemies: [{ name: "Bandit", imagePath: "assets/images/lasthit/Bandit.png", id: 0 }, { name: "Assasin", imagePath: "assets/images/lasthit/Assasin.png", id: 14 }, { name: "Raven", imagePath: "assets/images/lasthit/Raven.png", id: 15 }, { name: "Fire Salamander", imagePath: "assets/images/lasthit/FireSalamander.png", id: 16 }, { name: "Sniper", imagePath: "assets/images/lasthit/Sniper.png", id: 17 }, { name: "Mimic", imagePath: "assets/images/lasthit/Mimic.png", id: 49 }, { name: "Health Mimic", imagePath: "assets/images/lasthit/HealthMimic.png", id: 50 }, { name: "Car", imagePath: "assets/images/lasthit/Car.png", id: 64 }, { name: "Venus Car", imagePath: "assets/images/lasthit/VenusCar.png", id: 65 }, { name: "Toxin", imagePath: "assets/images/lasthit/None", id: 59 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Fire Trap", imagePath: "assets/images/lasthit/None", id: 57 },] },
  { area: 3, subarea: 2, loop: 0, baseDifficulty: 5,minKills:130,maxKills:192,mutations:2, enemies: [{ name: "Bandit", imagePath: "assets/images/lasthit/Bandit.png", id: 0 }, { name: "Assasin", imagePath: "assets/images/lasthit/Assasin.png", id: 14 }, { name: "Raven", imagePath: "assets/images/lasthit/Raven.png", id: 15 }, { name: "Fire Salamander", imagePath: "assets/images/lasthit/FireSalamander.png", id: 16 }, { name: "Sniper", imagePath: "assets/images/lasthit/Sniper.png", id: 17 }, { name: "Mimic", imagePath: "assets/images/lasthit/Mimic.png", id: 49 }, { name: "Health Mimic", imagePath: "assets/images/lasthit/HealthMimic.png", id: 50 }, { name: "Car", imagePath: "assets/images/lasthit/Car.png", id: 64 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 }, { name: "Toxin", imagePath: "assets/images/lasthit/None", id: 59 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Fire Trap", imagePath: "assets/images/lasthit/None", id: 57 },] },
  { area: 3, subarea: 3, loop: 0, baseDifficulty: 6,minKills:160,maxKills:210,mutations:3, enemies: [{ name: "Bandit", imagePath: "assets/images/lasthit/Bandit.png", id: 0 }, { name: "Assasin", imagePath: "assets/images/lasthit/Assasin.png", id: 14 }, { name: "Raven", imagePath: "assets/images/lasthit/Raven.png", id: 15 }, { name: "Fire Salamander", imagePath: "assets/images/lasthit/FireSalamander.png", id: 16 }, { name: "Sniper", imagePath: "assets/images/lasthit/Sniper.png", id: 17 }, { name: "Mimic", imagePath: "assets/images/lasthit/Mimic.png", id: 49 }, { name: "Health Mimic", imagePath: "assets/images/lasthit/HealthMimic.png", id: 50 }, { name: "Car", imagePath: "assets/images/lasthit/Car.png", id: 64 }, { name: "Big Dog", imagePath: "assets/images/lasthit/BigDog.png", id: 18 }, { name: "Toxin", imagePath: "assets/images/lasthit/None", id: 59 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Fire Trap", imagePath: "assets/images/lasthit/None", id: 57 },] },
  { area: 4, subarea: 1, loop: 0, baseDifficulty: 7,minKills:165,maxKills:221,mutations:4, enemies: [{ name: "Bandit", imagePath: "assets/images/lasthit/Bandit.png", id: 0 }, { name: "Crystal Spider", imagePath: "assets/images/lasthit/CrystalSpider.png", id: 19 }, { name: "Laser Crystal", imagePath: "assets/images/lasthit/LaserCrystal.png", id: 21 }, { name: "Mimic", imagePath: "assets/images/lasthit/Mimic.png", id: 49 }, { name: "Health Mimic", imagePath: "assets/images/lasthit/HealthMimic.png", id: 50 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Small Explosion", imagePath: "assets/images/lasthit/None", id: 56 },] },
  { area: 5, subarea: 1, loop: 0, baseDifficulty: 8,minKills:180,maxKills:230,mutations:5, enemies: [{ name: "Frozen Bandit", imagePath: "assets/images/lasthit/FrozenBandit.png", id: 23 }, { name: "Snowbot", imagePath: "assets/images/lasthit/Snowbot.png", id: 24 }, { name: "Wolf", imagePath: "assets/images/lasthit/Wolf.png", id: 25 }, { name: "Snow Tank", imagePath: "assets/images/lasthit/SnowTank.png", id: 26 }, { name: "Mimic", imagePath: "assets/images/lasthit/Mimic.png", id: 49 }, { name: "Health Mimic", imagePath: "assets/images/lasthit/HealthMimic.png", id: 50 }, { name: "Icy Car", imagePath: "assets/images/lasthit/IcyCar.png", id: 68 }, { name: "Thrown Car", imagePath: "assets/images/lasthit/ThrownCar.png", id: 69 }, { name: "Golden Snow Tank", imagePath: "assets/images/lasthit/GoldenSnowtank.png", id: 98 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Small Explosion", imagePath: "assets/images/lasthit/None", id: 56 },] },
  { area: 5, subarea: 2, loop: 0, baseDifficulty: 9,minKills:200,maxKills:260,mutations:5, enemies: [{ name: "Frozen Bandit", imagePath: "assets/images/lasthit/FrozenBandit.png", id: 23 }, { name: "Snowbot", imagePath: "assets/images/lasthit/Snowbot.png", id: 24 }, { name: "Wolf", imagePath: "assets/images/lasthit/Wolf.png", id: 25 }, { name: "Snow Tank", imagePath: "assets/images/lasthit/SnowTank.png", id: 26 }, { name: "Mimic", imagePath: "assets/images/lasthit/Mimic.png", id: 49 }, { name: "Health Mimic", imagePath: "assets/images/lasthit/HealthMimic.png", id: 50 }, { name: "Icy Car", imagePath: "assets/images/lasthit/IcyCar.png", id: 68 }, { name: "Thrown Car", imagePath: "assets/images/lasthit/ThrownCar.png", id: 69 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 }, { name: "Golden Snow Tank", imagePath: "assets/images/lasthit/GoldenSnowtank.png", id: 98 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Small Explosion", imagePath: "assets/images/lasthit/None", id: 56 },] },
  { area: 5, subarea: 3, loop: 0, baseDifficulty: 10,minKills:240,maxKills:305,mutations:6, enemies: [{ name: "Frozen Bandit", imagePath: "assets/images/lasthit/FrozenBandit.png", id: 23 }, { name: "Snowbot", imagePath: "assets/images/lasthit/Snowbot.png", id: 24 }, { name: "Wolf", imagePath: "assets/images/lasthit/Wolf.png", id: 25 }, { name: "Snow Tank", imagePath: "assets/images/lasthit/SnowTank.png", id: 26 }, { name: "Mimic", imagePath: "assets/images/lasthit/Mimic.png", id: 49 }, { name: "Health Mimic", imagePath: "assets/images/lasthit/HealthMimic.png", id: 50 }, { name: "Icy Car", imagePath: "assets/images/lasthit/IcyCar.png", id: 68 }, { name: "Thrown Car", imagePath: "assets/images/lasthit/ThrownCar.png", id: 69 }, { name: "Lil Hunder", imagePath: "assets/images/lasthit/LilHunter.png", id: 27 }, { name: "Golden Snow Tank", imagePath: "assets/images/lasthit/GoldenSnowtank.png", id: 98 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Small Explosion", imagePath: "assets/images/lasthit/None", id: 56 },] },
  { area: 6, subarea: 1, loop: 0, baseDifficulty: 11,minKills:285,maxKills:355, mutations:6,enemies: [{ name: "Freak", imagePath: "assets/images/lasthit/Freak.png", id: 28 }, { name: "Explo Freak", imagePath: "assets/images/lasthit/ExploFreak.png", id: 29 }, { name: "Rhino Freak", imagePath: "assets/images/lasthit/RhinoFreak.png", id: 30 }, { name: "Turret", imagePath: "assets/images/lasthit/Turret.png", id: 32 },] },
  { area: 7, subarea: 1, loop: 0, baseDifficulty: 12,minKills:300,maxKills:400,mutations:7, enemies: [{ name: "Guardian", imagePath: "assets/images/lasthit/Guardian.png", id: 34 }, { name: "Explo Guardian", imagePath: "assets/images/lasthit/ExploGuardian.png", id: 35 }, { name: "Dog Guardian", imagePath: "assets/images/lasthit/DogGuardian.png", id: 36 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 },] },
  { area: 7, subarea: 2, loop: 0, baseDifficulty: 13,minKills:320,maxKills:440,mutations:7, enemies: [{ name: "Guardian", imagePath: "assets/images/lasthit/Guardian.png", id: 34 }, { name: "Explo Guardian", imagePath: "assets/images/lasthit/ExploGuardian.png", id: 35 }, { name: "Dog Guardian", imagePath: "assets/images/lasthit/DogGuardian.png", id: 36 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 },] },
  { area: 7, subarea: 3, loop: 0, baseDifficulty: 14,minKills:370,maxKills:480,mutations:8, enemies: [{ name: "Guardian", imagePath: "assets/images/lasthit/Guardian.png", id: 34 }, { name: "Throne", imagePath: "assets/images/lasthit/Throne.png", id: 37 }, { name: "Throne Death", imagePath: "assets/images/lasthit/None", id: 81 },] },
  { area: 1, subarea: 1, loop: 1, baseDifficulty: 15,minKills:-1,maxKills:-1,mutations:8, enemies: [{ name: "Bandit", imagePath: "assets/images/lasthit/Bandit.png", id: 0 }, { name: "Maggot", imagePath: "assets/images/lasthit/Maggot.png", id: 1 }, { name: "Rad Maggot", imagePath: "assets/images/lasthit/RadMaggot.png", id: 2 }, { name: "Big Maggot", imagePath: "assets/images/lasthit/BigMaggot.png", id: 3 }, { name: "Scorpion", imagePath: "assets/images/lasthit/Scorpion.png", id: 4 }, { name: "Gold Scorpion", imagePath: "assets/images/lasthit/GoldScorpion.png", id: 5 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 }, { name: "Elite Grunt", imagePath: "assets/images/lasthit/EliteGrunt.png", id: 89 }, { name: "Elite Shielder", imagePath: "assets/images/lasthit/EliteShielder.png", id: 91 }, { name: "Elite Inspector", imagePath: "assets/images/lasthit/EliteInspector.png", id: 92 }, { name: "Van", imagePath: "assets/images/lasthit/Van.png", id: 94 }, { name: "Assasin", imagePath: "assets/images/lasthit/Assasin.png", id: 14 }, { name: "Sniper", imagePath: "assets/images/lasthit/Sniper.png", id: 17 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Barrel", imagePath: "assets/images/lasthit/Barrel.png", id: 61 },] },
  { area: 1, subarea: 2, loop: 1, baseDifficulty: 16,minKills:-1,maxKills:-1,mutations:8, enemies: [{ name: "Bandit", imagePath: "assets/images/lasthit/Bandit.png", id: 0 }, { name: "Maggot", imagePath: "assets/images/lasthit/Maggot.png", id: 1 }, { name: "Rad Maggot", imagePath: "assets/images/lasthit/RadMaggot.png", id: 2 }, { name: "Big Maggot", imagePath: "assets/images/lasthit/BigMaggot.png", id: 3 }, { name: "Scorpion", imagePath: "assets/images/lasthit/Scorpion.png", id: 4 }, { name: "Gold Scorpion", imagePath: "assets/images/lasthit/GoldScorpion.png", id: 5 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Barrel", imagePath: "assets/images/lasthit/Barrel.png", id: 61 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 }, { name: "Elite Grunt", imagePath: "assets/images/lasthit/EliteGrunt.png", id: 89 }, { name: "Elite Shielder", imagePath: "assets/images/lasthit/EliteShielder.png", id: 91 }, { name: "Elite Inspector", imagePath: "assets/images/lasthit/EliteInspector.png", id: 92 }, { name: "Van", imagePath: "assets/images/lasthit/Van.png", id: 94 }, { name: "Assasin", imagePath: "assets/images/lasthit/Assasin.png", id: 14 }, { name: "Sniper", imagePath: "assets/images/lasthit/Sniper.png", id: 17 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 },] },
  { area: 1, subarea: 3, loop: 1, baseDifficulty: 17,minKills:-1,maxKills:-1,mutations:8, enemies: [{ name: "Bandit", imagePath: "assets/images/lasthit/Bandit.png", id: 0 }, { name: "Maggot", imagePath: "assets/images/lasthit/Maggot.png", id: 1 }, { name: "Rad Maggot", imagePath: "assets/images/lasthit/RadMaggot.png", id: 2 }, { name: "Big Maggot", imagePath: "assets/images/lasthit/BigMaggot.png", id: 3 }, { name: "Scorpion", imagePath: "assets/images/lasthit/Scorpion.png", id: 4 }, { name: "Gold Scorpion", imagePath: "assets/images/lasthit/GoldScorpion.png", id: 5 }, { name: "Big Bandit", imagePath: "assets/images/lasthit/BigBandit.png", id: 6 }, { name: "Barrel", imagePath: "assets/images/lasthit/Barrel.png", id: 61 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 }, { name: "Elite Grunt", imagePath: "assets/images/lasthit/EliteGrunt.png", id: 89 }, { name: "Elite Shielder", imagePath: "assets/images/lasthit/EliteShielder.png", id: 91 }, { name: "Elite Inspector", imagePath: "assets/images/lasthit/EliteInspector.png", id: 92 }, { name: "Assasin", imagePath: "assets/images/lasthit/Assasin.png", id: 14 }, { name: "Sniper", imagePath: "assets/images/lasthit/Sniper.png", id: 17 }, { name: "Van", imagePath: "assets/images/lasthit/Van.png", id: 94 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 },] },
  { area: 2, subarea: 1, loop: 1, baseDifficulty: 18,minKills:-1,maxKills:-1,mutations:8, enemies: [{ name: "Bandit", imagePath: "assets/images/lasthit/Bandit.png", id: 0 }, { name: "Rat", imagePath: "assets/images/lasthit/Rat.png", id: 7 }, { name: "Rat King", imagePath: "assets/images/lasthit/RatKing.png", id: 8 }, { name: "Green Rat", imagePath: "assets/images/lasthit/GreenRat.png", id: 9 }, { name: "Alligartor", imagePath: "assets/images/lasthit/Alligator.png", id: 10 }, { name: "Buff Aligator", imagePath: "assets/images/lasthit/BuffAlligator.png", id: 95 }, { name: "Ballguy", imagePath: "assets/images/lasthit/Ballguy.png", id: 11 }, { name: "Toxic Ballguy", imagePath: "assets/images/lasthit/ToxicBallguy.png", id: 12 }, { name: "Assasin", imagePath: "assets/images/lasthit/Assasin.png", id: 14 }, { name: "Mimic", imagePath: "assets/images/lasthit/Mimic.png", id: 49 }, { name: "Health Mimic", imagePath: "assets/images/lasthit/HealthMimic.png", id: 50 }, { name: "Toxic Barrel", imagePath: "assets/images/lasthit/ToxicBarrel.png", id: 62 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 }, { name: "Elite Grunt", imagePath: "assets/images/lasthit/EliteGrunt.png", id: 89 }, { name: "Elite Shielder", imagePath: "assets/images/lasthit/EliteShielder.png", id: 91 }, { name: "Elite Inspector", imagePath: "assets/images/lasthit/EliteInspector.png", id: 92 }, { name: "Van", imagePath: "assets/images/lasthit/Van.png", id: 94 }, { name: "Mom", imagePath: "assets/images/lasthit/Mom.png", id: 13 }, { name: "Toxin", imagePath: "assets/images/lasthit/None", id: 59 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 },] },
  { area: 3, subarea: 1, loop: 1, baseDifficulty: 19,minKills:-1,maxKills:-1,mutations:8, enemies: [{ name: "Bandit", imagePath: "assets/images/lasthit/Bandit.png", id: 0 }, { name: "Assasin", imagePath: "assets/images/lasthit/Assasin.png", id: 14 }, { name: "Raven", imagePath: "assets/images/lasthit/Raven.png", id: 15 }, { name: "Fire Salamander", imagePath: "assets/images/lasthit/FireSalamander.png", id: 16 }, { name: "Sniper", imagePath: "assets/images/lasthit/Sniper.png", id: 17 }, { name: "Mimic", imagePath: "assets/images/lasthit/Mimic.png", id: 49 }, { name: "Health Mimic", imagePath: "assets/images/lasthit/HealthMimic.png", id: 50 }, { name: "Car", imagePath: "assets/images/lasthit/Car.png", id: 64 }, { name: "Venus Car", imagePath: "assets/images/lasthit/VenusCar.png", id: 65 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 }, { name: "Elite Grunt", imagePath: "assets/images/lasthit/EliteGrunt.png", id: 89 }, { name: "Elite Shielder", imagePath: "assets/images/lasthit/EliteShielder.png", id: 91 }, { name: "Elite Inspector", imagePath: "assets/images/lasthit/EliteInspector.png", id: 92 }, { name: "Van", imagePath: "assets/images/lasthit/Van.png", id: 94 }, { name: "Buff Aligator", imagePath: "assets/images/lasthit/BuffAlligator.png", id: 95 }, { name: "Snowbot", imagePath: "assets/images/lasthit/Snowbot.png", id: 24 }, { name: "Toxin", imagePath: "assets/images/lasthit/None", id: 59 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Fire Trap", imagePath: "assets/images/lasthit/None", id: 57 },] },
  { area: 3, subarea: 2, loop: 1, baseDifficulty: 20,minKills:-1,maxKills:-1,mutations:8, enemies: [{ name: "Bandit", imagePath: "assets/images/lasthit/Bandit.png", id: 0 }, { name: "Assasin", imagePath: "assets/images/lasthit/Assasin.png", id: 14 }, { name: "Raven", imagePath: "assets/images/lasthit/Raven.png", id: 15 }, { name: "Fire Salamander", imagePath: "assets/images/lasthit/FireSalamander.png", id: 16 }, { name: "Sniper", imagePath: "assets/images/lasthit/Sniper.png", id: 17 }, { name: "Mimic", imagePath: "assets/images/lasthit/Mimic.png", id: 49 }, { name: "Health Mimic", imagePath: "assets/images/lasthit/HealthMimic.png", id: 50 }, { name: "Car", imagePath: "assets/images/lasthit/Car.png", id: 64 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 }, { name: "Elite Grunt", imagePath: "assets/images/lasthit/EliteGrunt.png", id: 89 }, { name: "Elite Shielder", imagePath: "assets/images/lasthit/EliteShielder.png", id: 91 }, { name: "Elite Inspector", imagePath: "assets/images/lasthit/EliteInspector.png", id: 92 }, { name: "Van", imagePath: "assets/images/lasthit/Van.png", id: 94 }, { name: "Buff Aligator", imagePath: "assets/images/lasthit/BuffAlligator.png", id: 95 }, { name: "Snowbot", imagePath: "assets/images/lasthit/Snowbot.png", id: 24 }, { name: "Toxin", imagePath: "assets/images/lasthit/None", id: 59 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Fire Trap", imagePath: "assets/images/lasthit/None", id: 57 },] },
  { area: 3, subarea: 3, loop: 1, baseDifficulty: 21,minKills:-1,maxKills:-1,mutations:8, enemies: [{ name: "Bandit", imagePath: "assets/images/lasthit/Bandit.png", id: 0 }, { name: "Assasin", imagePath: "assets/images/lasthit/Assasin.png", id: 14 }, { name: "Raven", imagePath: "assets/images/lasthit/Raven.png", id: 15 }, { name: "Fire Salamander", imagePath: "assets/images/lasthit/FireSalamander.png", id: 16 }, { name: "Sniper", imagePath: "assets/images/lasthit/Sniper.png", id: 17 }, { name: "Mimic", imagePath: "assets/images/lasthit/Mimic.png", id: 49 }, { name: "Health Mimic", imagePath: "assets/images/lasthit/HealthMimic.png", id: 50 }, { name: "Car", imagePath: "assets/images/lasthit/Car.png", id: 64 }, { name: "Big Dog", imagePath: "assets/images/lasthit/BigDog.png", id: 18 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 }, { name: "Elite Grunt", imagePath: "assets/images/lasthit/EliteGrunt.png", id: 89 }, { name: "Elite Shielder", imagePath: "assets/images/lasthit/EliteShielder.png", id: 91 }, { name: "Elite Inspector", imagePath: "assets/images/lasthit/EliteInspector.png", id: 92 }, { name: "Van", imagePath: "assets/images/lasthit/Van.png", id: 94 }, { name: "Buff Aligator", imagePath: "assets/images/lasthit/BuffAlligator.png", id: 95 }, { name: "Snowbot", imagePath: "assets/images/lasthit/Snowbot.png", id: 24 }, { name: "Toxin", imagePath: "assets/images/lasthit/None", id: 59 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Fire Trap", imagePath: "assets/images/lasthit/None", id: 57 },] },
  { area: 4, subarea: 1, loop: 1, baseDifficulty: 22,minKills:-1,maxKills:-1,mutations:8, enemies: [{ name: "Bandit", imagePath: "assets/images/lasthit/Bandit.png", id: 0 }, { name: "Crystal Spider", imagePath: "assets/images/lasthit/CrystalSpider.png", id: 19 }, { name: "Laser Crystal", imagePath: "assets/images/lasthit/LaserCrystal.png", id: 21 }, { name: "Mimic", imagePath: "assets/images/lasthit/Mimic.png", id: 49 }, { name: "Health Mimic", imagePath: "assets/images/lasthit/HealthMimic.png", id: 50 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 }, { name: "Elite Grunt", imagePath: "assets/images/lasthit/EliteGrunt.png", id: 89 }, { name: "Elite Shielder", imagePath: "assets/images/lasthit/EliteShielder.png", id: 91 }, { name: "Elite Inspector", imagePath: "assets/images/lasthit/EliteInspector.png", id: 92 }, { name: "Van", imagePath: "assets/images/lasthit/Van.png", id: 94 }, { name: "Explo Freak", imagePath: "assets/images/lasthit/ExploFreak.png", id: 29 }, { name: "Hyper Crystal", imagePath: "assets/images/lasthit/HyperCrystal.png", id: 22 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Small Explosion", imagePath: "assets/images/lasthit/None", id: 56 },] },
  { area: 5, subarea: 1, loop: 1, baseDifficulty: 23,minKills:-1,maxKills:-1,mutations:8, enemies: [{ name: "Frozen Bandit", imagePath: "assets/images/lasthit/FrozenBandit.png", id: 23 }, { name: "Snowbot", imagePath: "assets/images/lasthit/Snowbot.png", id: 24 }, { name: "Wolf", imagePath: "assets/images/lasthit/Wolf.png", id: 25 }, { name: "Snow Tank", imagePath: "assets/images/lasthit/SnowTank.png", id: 26 }, { name: "Mimic", imagePath: "assets/images/lasthit/Mimic.png", id: 49 }, { name: "Health Mimic", imagePath: "assets/images/lasthit/HealthMimic.png", id: 50 }, { name: "Icy Car", imagePath: "assets/images/lasthit/IcyCar.png", id: 68 }, { name: "Thrown Car", imagePath: "assets/images/lasthit/ThrownCar.png", id: 69 }, { name: "Golden Snow Tank", imagePath: "assets/images/lasthit/GoldenSnowtank.png", id: 98 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 }, { name: "Elite Grunt", imagePath: "assets/images/lasthit/EliteGrunt.png", id: 89 }, { name: "Elite Shielder", imagePath: "assets/images/lasthit/EliteShielder.png", id: 91 }, { name: "Elite Inspector", imagePath: "assets/images/lasthit/EliteInspector.png", id: 92 }, { name: "Van", imagePath: "assets/images/lasthit/Van.png", id: 94 }, { name: "Explo Guardian", imagePath: "assets/images/lasthit/ExploGuardian.png", id: 35 }, { name: "Dog Guardian", imagePath: "assets/images/lasthit/DogGuardian.png", id: 36 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Small Explosion", imagePath: "assets/images/lasthit/None", id: 56 },] },
  { area: 5, subarea: 2, loop: 1, baseDifficulty: 24,minKills:-1,maxKills:-1,mutations:8, enemies: [{ name: "Frozen Bandit", imagePath: "assets/images/lasthit/FrozenBandit.png", id: 23 }, { name: "Snowbot", imagePath: "assets/images/lasthit/Snowbot.png", id: 24 }, { name: "Wolf", imagePath: "assets/images/lasthit/Wolf.png", id: 25 }, { name: "Snow Tank", imagePath: "assets/images/lasthit/SnowTank.png", id: 26 }, { name: "Mimic", imagePath: "assets/images/lasthit/Mimic.png", id: 49 }, { name: "Health Mimic", imagePath: "assets/images/lasthit/HealthMimic.png", id: 50 }, { name: "Icy Car", imagePath: "assets/images/lasthit/IcyCar.png", id: 68 }, { name: "Thrown Car", imagePath: "assets/images/lasthit/ThrownCar.png", id: 69 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 }, { name: "Elite Grunt", imagePath: "assets/images/lasthit/EliteGrunt.png", id: 89 }, { name: "Elite Shielder", imagePath: "assets/images/lasthit/EliteShielder.png", id: 91 }, { name: "Elite Inspector", imagePath: "assets/images/lasthit/EliteInspector.png", id: 92 }, { name: "Explo Guardian", imagePath: "assets/images/lasthit/ExploGuardian.png", id: 35 }, { name: "Dog Guardian", imagePath: "assets/images/lasthit/DogGuardian.png", id: 36 }, { name: "Van", imagePath: "assets/images/lasthit/Van.png", id: 94 }, { name: "Golden Snow Tank", imagePath: "assets/images/lasthit/GoldenSnowtank.png", id: 98 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Small Explosion", imagePath: "assets/images/lasthit/None", id: 56 },] },
  { area: 5, subarea: 3, loop: 1, baseDifficulty: 25,minKills:-1,maxKills:-1,mutations:8, enemies: [{ name: "Frozen Bandit", imagePath: "assets/images/lasthit/FrozenBandit.png", id: 23 }, { name: "Snowbot", imagePath: "assets/images/lasthit/Snowbot.png", id: 24 }, { name: "Wolf", imagePath: "assets/images/lasthit/Wolf.png", id: 25 }, { name: "Snow Tank", imagePath: "assets/images/lasthit/SnowTank.png", id: 26 }, { name: "Mimic", imagePath: "assets/images/lasthit/Mimic.png", id: 49 }, { name: "Health Mimic", imagePath: "assets/images/lasthit/HealthMimic.png", id: 50 }, { name: "Icy Car", imagePath: "assets/images/lasthit/IcyCar.png", id: 68 }, { name: "Thrown Car", imagePath: "assets/images/lasthit/ThrownCar.png", id: 69 }, { name: "Lil Hunder", imagePath: "assets/images/lasthit/LilHunter.png", id: 27 }, { name: "Golden Snow Tank", imagePath: "assets/images/lasthit/GoldenSnowtank.png", id: 98 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 }, { name: "Elite Grunt", imagePath: "assets/images/lasthit/EliteGrunt.png", id: 89 }, { name: "Elite Shielder", imagePath: "assets/images/lasthit/EliteShielder.png", id: 91 }, { name: "Elite Inspector", imagePath: "assets/images/lasthit/EliteInspector.png", id: 92 }, { name: "Van", imagePath: "assets/images/lasthit/Van.png", id: 94 }, { name: "Explo Guardian", imagePath: "assets/images/lasthit/ExploGuardian.png", id: 35 }, { name: "Dog Guardian", imagePath: "assets/images/lasthit/DogGuardian.png", id: 36 }, { name: "Explosion", imagePath: "assets/images/lasthit/None", id: 55 }, { name: "Small Explosion", imagePath: "assets/images/lasthit/None", id: 56 },] },
  { area: 6, subarea: 1, loop: 1, baseDifficulty: 26,minKills:-1,maxKills:-1,mutations:8, enemies: [{ name: "Freak", imagePath: "assets/images/lasthit/Freak.png", id: 28 }, { name: "Explo Freak", imagePath: "assets/images/lasthit/ExploFreak.png", id: 29 }, { name: "Rhino Freak", imagePath: "assets/images/lasthit/RhinoFreak.png", id: 30 }, { name: "Turret", imagePath: "assets/images/lasthit/Turret.png", id: 32 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 }, { name: "Elite Grunt", imagePath: "assets/images/lasthit/EliteGrunt.png", id: 89 }, { name: "Elite Shielder", imagePath: "assets/images/lasthit/EliteShielder.png", id: 91 }, { name: "Elite Inspector", imagePath: "assets/images/lasthit/EliteInspector.png", id: 92 }, { name: "Laser Crystal", imagePath: "assets/images/lasthit/LaserCrystal.png", id: 21 }, { name: "Van", imagePath: "assets/images/lasthit/Van.png", id: 94 },] },
  { area: 7, subarea: 1, loop: 1, baseDifficulty: 27,minKills:-1,maxKills:-1,mutations:8, enemies: [{ name: "Guardian", imagePath: "assets/images/lasthit/Guardian.png", id: 34 }, { name: "Explo Guardian", imagePath: "assets/images/lasthit/ExploGuardian.png", id: 35 }, { name: "Dog Guardian", imagePath: "assets/images/lasthit/DogGuardian.png", id: 36 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 }, { name: "Elite Grunt", imagePath: "assets/images/lasthit/EliteGrunt.png", id: 89 }, { name: "Elite Shielder", imagePath: "assets/images/lasthit/EliteShielder.png", id: 91 }, { name: "Elite Inspector", imagePath: "assets/images/lasthit/EliteInspector.png", id: 92 }, { name: "Van", imagePath: "assets/images/lasthit/Van.png", id: 94 }, { name: "Jungle Bandit", imagePath: "assets/images/lasthit/JungleBandit.png", id: 82 }, { name: "Explo Freak", imagePath: "assets/images/lasthit/ExploFreak.png", id: 29 },] },
  { area: 7, subarea: 2, loop: 1, baseDifficulty: 29,minKills:-1,maxKills:-1,mutations:8, enemies: [{ name: "Guardian", imagePath: "assets/images/lasthit/Guardian.png", id: 34 }, { name: "Explo Guardian", imagePath: "assets/images/lasthit/ExploGuardian.png", id: 35 }, { name: "Dog Guardian", imagePath: "assets/images/lasthit/DogGuardian.png", id: 36 }, { name: "Grunt", imagePath: "assets/images/lasthit/Grunt.png", id: 51 }, { name: "Inspector", imagePath: "assets/images/lasthit/Inspector.png", id: 52 }, { name: "Shielder", imagePath: "assets/images/lasthit/Shielder.png", id: 53 }, { name: "Elite Grunt", imagePath: "assets/images/lasthit/EliteGrunt.png", id: 89 }, { name: "Elite Shielder", imagePath: "assets/images/lasthit/EliteShielder.png", id: 91 }, { name: "Elite Inspector", imagePath: "assets/images/lasthit/EliteInspector.png", id: 92 }, { name: "Van", imagePath: "assets/images/lasthit/Van.png", id: 94 }, { name: "Jungle Bandit", imagePath: "assets/images/lasthit/JungleBandit.png", id: 82 }, { name: "Explo Freak", imagePath: "assets/images/lasthit/ExploFreak.png", id: 29 },] },
  ];
  

export interface Crown {
    id: number,
    name: string,
    available_after: ImprovedArea
}

let firstCrownVault = getArea(0,3,2);
let postLoopCrownVault = getArea(1,3,2);

/** Base difficulty for crowns is 1 because getting a crown implies going through the crown vault portal. Increasing the difficulty in 1. */
export var crowns: Crown[] = [{ id: 1, available_after: { area: 0, subarea: 0, loop: 0, enemies: [], baseDifficulty: 0, mutations:0,minKills:0,maxKills:0}, name: "None" },
{ id: 2, available_after: firstCrownVault, name: "Crown of Death" },
{ id: 3, available_after: firstCrownVault, name: "Crown of Life", },
{ id: 4, available_after: postLoopCrownVault, name: "Crown of Haste" },
{ id: 5, available_after: firstCrownVault, name: "Crown of Guns" },
{ id: 6, available_after: postLoopCrownVault, name: "Crown of Hatred" },
{ id: 7, available_after: postLoopCrownVault, name: "Crown of Blood" },
{ id: 8, available_after: firstCrownVault, name: "Crown of Destiny" },
{ id: 9, available_after: postLoopCrownVault, name: "Crown of Love" },
{ id: 10, available_after: firstCrownVault, name: "Crown of Risk" },
{ id: 11, available_after: postLoopCrownVault, name: "Crown of Curses" },
{ id: 12, available_after: postLoopCrownVault, name: "Crown of Luck" },
{ id: 13, available_after: postLoopCrownVault, name: "Crown of Protection" },
];



export interface Character {
    id: Number,
    iconPath: string,
    startingWeapon: Weapon,
    name: string,
}




export interface Weapon {
    name: string,
    imagePath: string,
    id: number,
    difficultyRequired: number,
    obtainable: boolean,
    unique:boolean
}

export var weapons: Weapon[] = [
    { difficultyRequired: 0, id: 0, imagePath: null, name: "None", obtainable: true, unique:false },
    { id: 1, imagePath: "assets/images/weapons/Revolver.png", name: "Revolver", difficultyRequired: 0, obtainable: false,unique:true },
    { id: 3, imagePath: "assets/images/weapons/Wrench.png", name: "Wrench", difficultyRequired: 0, obtainable: true, unique:false },
    { id: 4, imagePath: "assets/images/weapons/MachineGun.png", name: "Machinegun", difficultyRequired: 0, obtainable: true, unique:false },
    { id: 5, imagePath: "assets/images/weapons/Shotgun.png", name: "Shotgun", difficultyRequired: 0, obtainable: true, unique:false },
    { id: 6, imagePath: "assets/images/weapons/Crossbow.png", name: "Crossbow", difficultyRequired: 0, obtainable: true, unique:false },
    { id: 7, imagePath: "assets/images/weapons/GrenadeLauncher.png", name: "Grenade Launcher", difficultyRequired: 0, obtainable: true, unique:false },
    { id: 17, imagePath: "assets/images/weapons/AssaultRifle.png", name: "Assault Rifle", difficultyRequired: 0, obtainable: true, unique:false },
    { id: 19, imagePath: "assets/images/weapons/LaserPistol.png", name: "Laser Pistol", difficultyRequired: 0, obtainable: true, unique:false },
    { id: 21, imagePath: "assets/images/weapons/Slugger.png", name: "Slugger", difficultyRequired: 0, obtainable: true, unique:false },
    { id: 27, imagePath: "assets/images/weapons/Screwdriver.png", name: "Screwdriver", difficultyRequired: 0, obtainable: true, unique:false },
    { id: 16, imagePath: "assets/images/weapons/SMG.png", name: "SMG", difficultyRequired: 1, obtainable: true, unique:false },
    { id: 69, imagePath: "assets/images/weapons/PopGun.png", name: "Pop Gun", difficultyRequired: 1, obtainable: true, unique:false },
    { id: 18, imagePath: "assets/images/weapons/DiscGun.png", name: "Disc Gun", difficultyRequired: 1, obtainable: true, unique:false },
    { id: 2, imagePath: "assets/images/weapons/TripleMachinegun.png", name: "Triple Machinegun", difficultyRequired: 2, obtainable: true, unique:false },
    { id: 71, imagePath: "assets/images/weapons/PoprRifle.png", name: "Pop Rifle", difficultyRequired: 2, obtainable: true, unique:false },
    { id: 13, imagePath: "assets/images/weapons/Shovel.png", name: "Shovel", difficultyRequired: 2, obtainable: true, unique:false },
    { id: 88, imagePath: "assets/images/weapons/Sledgehammer.png", name: "Sledgehammer", difficultyRequired: 2, obtainable: true, unique:false },
    { id: 8, imagePath: "assets/images/weapons/DoubleShotgun.png", name: "Double Shotgun", difficultyRequired: 3, obtainable: true, unique:false },
    { id: 75, imagePath: "assets/images/weapons/FlameShotgun.png", name: "Flame Shotgun", difficultyRequired: 3, obtainable: true, unique:false },
    { id: 23, imagePath: "assets/images/weapons/AssaultSlugger.png", name: "Assault Slugger", difficultyRequired: 3, obtainable: true, unique:false },
    { id: 31, imagePath: "assets/images/weapons/ToxicBow.png", name: "Toxic Bow", difficultyRequired: 3, obtainable: true, unique:false },
    { id: 66, imagePath: "assets/images/weapons/HeavyCrossbow.png", name: "Heavy Crossbow", difficultyRequired: 3, obtainable: true, unique:false },
    { id: 30, imagePath: "assets/images/weapons/SplinterGun.png", name: "Splinter Gun", difficultyRequired: 3, obtainable: true, unique:false },
    { id: 72, imagePath: "assets/images/weapons/ToxicLauncher.png", name: "ToxicLauncher", difficultyRequired: 3, obtainable: true, unique:false },
    { id: 14, imagePath: "assets/images/weapons/Bazooka.png", name: "Bazooka", difficultyRequired: 3, obtainable: true, unique:false },
    { id: 50, imagePath: "assets/images/weapons/FlameThrower.png", name: "Flame Thrower", difficultyRequired: 3, obtainable: true, unique:false },
    { id: 20, imagePath: "assets/images/weapons/LaserRifle.png", name: "Laser Rifle", difficultyRequired: 3, obtainable: true, unique:false },
    { id: 34, imagePath: "assets/images/weapons/Plasmagun.png", name: "Plasma Gun", difficultyRequired: 3, obtainable: true, unique:false },
    { id: 37, imagePath: "assets/images/weapons/Jackhammer.png", name: "Jackhammer", difficultyRequired: 3, obtainable: true, unique:false },
    { id: 9, imagePath: "assets/images/weapons/Minigun.png", name: "Minigun", difficultyRequired: 4, obtainable: true, unique:false },
    { id: 117, imagePath: "assets/images/weapons/BouncerShotgun.png", name: "Bouncer Shotgun", difficultyRequired: 4, obtainable: true, unique:false },
    { id: 116, imagePath: "assets/images/weapons/Bouncer_Smg.png", name: "Bouncer SMG", difficultyRequired: 4, obtainable: true, unique:false },
    { id: 61, imagePath: "assets/images/weapons/Sawedoffshotgun.png", name: "Sawed-off Shotgun", difficultyRequired: 4, obtainable: true, unique:false },
    { id: 10, imagePath: "assets/images/weapons/AutoShotgun.png", name: "Auto Shotgun", difficultyRequired: 4, obtainable: true, unique:false },
    { id: 38, imagePath: "assets/images/weapons/FlakCannon.png", name: "Flak Cannon", difficultyRequired: 4, obtainable: true, unique:false },
    { id: 62, imagePath: "assets/images/weapons/SplinterPistol.png", name: "Splinter Pistol", difficultyRequired: 4, obtainable: true, unique:false },
    { id: 52, imagePath: "assets/images/weapons/FlareGun.png", name: "Flare Gun", difficultyRequired: 4, obtainable: true, unique:false },
    { id: 57, imagePath: "assets/images/weapons/LightningPistol.png", name: "Lightning Pistol", difficultyRequired: 4, obtainable: true, unique:false },
    { id: 76, imagePath: "assets/images/weapons/DoubleFlameShotgun.png", name: "Double Flame Shotgun", difficultyRequired: 5, obtainable: true, unique:false },
    { id: 11, imagePath: "assets/images/weapons/AutoCrossbow.png", name: "Auto Crossbow", difficultyRequired: 5, obtainable: true, unique:false },
    { id: 112, imagePath: "assets/images/weapons/SeekerPistol.png", name: "Seeker Pistol", difficultyRequired: 5, obtainable: true, unique:false },
    { id: 15, imagePath: "assets/images/weapons/StickyGrenadeLauncher.png", name: "Sticky Launcher", difficultyRequired: 5, obtainable: true, unique:false },
    { id: 79, imagePath: "assets/images/weapons/GrenadeShotgun.png", name: "Grenade Shotgun", difficultyRequired: 5, obtainable: true, unique:false },
    { id: 78, imagePath: "assets/images/weapons/ClusterLauncher.png", name: "Cluster Launcher", difficultyRequired: 5, obtainable: true, unique:false },
    { id: 55, imagePath: "assets/images/weapons/LaserCannon.png", name: "Laser Cannon", difficultyRequired: 5, obtainable: true, unique:false },
    { id: 26, imagePath: "assets/images/weapons/HyperRifle.png", name: "Hyper Rifle", difficultyRequired: 6, obtainable: true, unique:false },
    { id: 114, imagePath: "assets/images/weapons/Eraser.png", name: "Eraser", difficultyRequired: 6, obtainable: true, unique:false },
    { id: 12, imagePath: "assets/images/weapons/SuperCrossbow.png", name: "Super Crossbow", difficultyRequired: 6, obtainable: true, unique:false },
    { id: 63, imagePath: "assets/images/weapons/SuperSplinterGun.png", name: "Super Splinter Gun", difficultyRequired: 6, obtainable: true, unique:false },
    { id: 124, imagePath: "assets/images/weapons/HeavyGrenadeLauncher.png", name: "Heavy Grenade Launcher", difficultyRequired: 6, obtainable: true, unique:false },
    { id: 70, imagePath: "assets/images/weapons/PlasmaRifle.png", name: "Plasma Rifle", difficultyRequired: 6, obtainable: true, unique:false },
    { id: 58, imagePath: "assets/images/weapons/LightningRifle.png", name: "Lightning Rifle", difficultyRequired: 6, obtainable: true, unique:false },
    { id: 22, imagePath: "assets/images/weapons/GattlingSlugger.png", name: "Gattling Slugger", difficultyRequired: 7, obtainable: true, unique:false },
    { id: 89, imagePath: "assets/images/weapons/HeavyRevolver.png", name: "Heavy Revolver", difficultyRequired: 7, obtainable: true, unique:false },
    { id: 113, imagePath: "assets/images/weapons/SeekerShotgun.png", name: "Seeker Shotgun", difficultyRequired: 7, obtainable: true, unique:false },
    { id: 80, imagePath: "assets/images/weapons/GrenadeRifle.png", name: "Grenade Rifle", difficultyRequired: 7, obtainable: true, unique:false },
    { id: 28, imagePath: "assets/images/weapons/LaserMinigun.png", name: "Laser Minigun", difficultyRequired: 7, obtainable: true, unique:false },
    { id: 59, imagePath: "assets/images/weapons/LightningShotgun.png", name: "Lightning Shotgun", difficultyRequired: 7, obtainable: true, unique:false },
    { id: 53, imagePath: "assets/images/weapons/EnergyScrewdriver.png", name: "Energy Screwdriver", difficultyRequired: 7, obtainable: true, unique:false },
    { id: 65, imagePath: "assets/images/weapons/SmartGun.png", name: "Smart Gun", difficultyRequired: 8, obtainable: true, unique:false },
    { id: 90, imagePath: "assets/images/weapons/HeavyMachinegun.png", name: "Heavy Machinegun", difficultyRequired: 8, obtainable: true, unique:false },
    { id: 33, imagePath: "assets/images/weapons/WaveGun.png", name: "Wave Gun", difficultyRequired: 8, obtainable: true, unique:false },
    { id: 77, imagePath: "assets/images/weapons/AutoFlameShotgun.png", name: "Auto Flame Shotgun", difficultyRequired: 8, obtainable: true, unique:false },
    { id: 25, imagePath: "assets/images/weapons/SuperSlugger.png", name: "Super Slugger", difficultyRequired: 8, obtainable: true, unique:false },
    { id: 91, imagePath: "assets/images/weapons/HeavySlugger.png", name: "Heavy Slugger", difficultyRequired: 8, obtainable: true, unique:false },
    { id: 47, imagePath: "assets/images/weapons/NukeLauncher.png", name: "Nuke Launcher", difficultyRequired: 8, obtainable: true, unique:false },
    { id: 29, imagePath: "assets/images/weapons/BloodLauncher.png", name: "Blood Launcher", difficultyRequired: 8, obtainable: true, unique:false },
    { id: 67, imagePath: "assets/images/weapons/BloodHammer.png", name: "Blood Hammer", difficultyRequired: 8, obtainable: true, unique:false },
    { id: 24, imagePath: "assets/images/weapons/EnergySword.png", name: "Energy Sword", difficultyRequired: 8, obtainable: true, unique:false },
    { id: 36, imagePath: "assets/images/weapons/EnergyHammer.png", name: "Energy Hammer", difficultyRequired: 8, obtainable: true, unique:false },
    { id: 119, imagePath: "assets/images/weapons/SuperBazooka.png", name: "Super Bazooka", difficultyRequired: 9, obtainable: true, unique:false },
    { id: 35, imagePath: "assets/images/weapons/PlasmaCannon.png", name: "Plasma Cannon", difficultyRequired: 9, obtainable: true, unique:false },
    { id: 74, imagePath: "assets/images/weapons/LightningHammer.png", name: "Lightning Hammer", difficultyRequired: 9, obtainable: true, unique:false },
    { id: 49, imagePath: "assets/images/weapons/QuadrupleMachinegun.png", name: "Quadruple Machinegun", difficultyRequired: 10, obtainable: true, unique:false },
    { id: 60, imagePath: "assets/images/weapons/SuperFlakCannon.png", name: "Super FlakCannon", difficultyRequired: 10, obtainable: true, unique:false },
    { id: 84, imagePath: "assets/images/weapons/GatlingBazooka.png", name: "Gatling Bazooka", difficultyRequired: 10, obtainable: true, unique:false },
    { id: 107, imagePath: "assets/images/weapons/BloodCannon.png", name: "Blood Cannon", difficultyRequired: 10, obtainable: true, unique:false },
    { id: 106, imagePath: "assets/images/weapons/HeavyAssaultRifle.png", name: "Heavy Assault Rifle", difficultyRequired: 11, obtainable: true, unique:false },
    { id: 51, imagePath: "assets/images/weapons/Dragon.png", name: "Dragon", difficultyRequired: 11, obtainable: true, unique:false },
    { id: 73, imagePath: "assets/images/weapons/FlameCannon.png", name: "Flame Cannon", difficultyRequired: 11, obtainable: true, unique:false },
    { id: 64, imagePath: "assets/images/weapons/LightningSMG.png", name: "Lightning SMG", difficultyRequired: 11, obtainable: true, unique:false },
    { id: 68, imagePath: "assets/images/weapons/LightningCannon.png", name: "Lightning Cannon", difficultyRequired: 11, obtainable: true, unique:false },
    { id: 83, imagePath: "assets/images/weapons/DoubleMinigun.png", name: "Double Minigun", difficultyRequired: 12, obtainable: true, unique:false },
    { id: 54, imagePath: "assets/images/weapons/HyperLauncher.png", name: "Hyper Launcher", difficultyRequired: 12, obtainable: true, unique:false },
    { id: 85, imagePath: "assets/images/weapons/AutoGrenadeShotgun.png", name: "Auto Grenade Shotgun", difficultyRequired: 12, obtainable: true, unique:false },
    { id: 118, imagePath: "assets/images/weapons/HyperSlugger.png", name: "Hyper Slugger", difficultyRequired: 13, obtainable: true, unique:false },
    { id: 96, imagePath: "assets/images/weapons/PlasmaMinigun.png", name: "Plasma Minigun", difficultyRequired: 13, obtainable: true, unique:false },
    { id: 105, imagePath: "assets/images/weapons/HeavyAutoCrossbow.png", name: "Heavy Auto Crossbow", difficultyRequired: 14, obtainable: true, unique:false },
    { id: 110, imagePath: "assets/images/weapons/Incinerator.png", name: "Incinerator", difficultyRequired: 14, obtainable: true, unique:false },
    { id: 111, imagePath: "assets/images/weapons/SuperPlasmaCannon.png", name: "Super Plasma Cannon", difficultyRequired: 14, obtainable: true, unique:false },
    { id: 97, imagePath: "assets/images/weapons/Devastator.png", name: "Devastator", difficultyRequired: 14, obtainable: true, unique:false },
    { id: 41, imagePath: "assets/images/weapons/GoldenMachinegun.png", name: "Golden Machinegun", difficultyRequired: 16, obtainable: true, unique:false },
    { id: 42, imagePath: "assets/images/weapons/GoldenShotgun.png", name: "Golden Shotgun", difficultyRequired: 16, obtainable: true, unique:false },
    { id: 43, imagePath: "assets/images/weapons/GoldenCrossbow.png", name: "Golden Crossbow", difficultyRequired: 16, obtainable: true, unique:false },
    { id: 44, imagePath: "assets/images/weapons/GoldenGrenadeLauncher.png", name: "Golden Grenade Launcher", difficultyRequired: 16, obtainable: true, unique:false },
    { id: 45, imagePath: "assets/images/weapons/GoldenLaserPistol.png", name: "Golden Laser Pistol", difficultyRequired: 16, obtainable: true, unique:false },
    { id: 40, imagePath: "assets/images/weapons/GoldenWrench.png", name: "Golden Wrench", difficultyRequired: 16, obtainable: true, unique:false },
    { id: 103, imagePath: "assets/images/weapons/GoldenAssaultRifle.png", name: "Golden Assault Rifle", difficultyRequired: 18, obtainable: true, unique:false },
    { id: 99, imagePath: "assets/images/weapons/GoldenSlugger.png", name: "Golden Slugger", difficultyRequired: 18, obtainable: true, unique:false },
    { id: 100, imagePath: "assets/images/weapons/GoldenSplinterGun.png", name: "Golden Splinter Gun", difficultyRequired: 18, obtainable: true, unique:false },
    { id: 102, imagePath: "assets/images/weapons/GoldenBazooka.png", name: "Golden Bazooka", difficultyRequired: 18, obtainable: true, unique:false },
    { id: 98, imagePath: "assets/images/weapons/GoldenPlasmagun.png", name: "Golden Plasmagun", difficultyRequired: 18, obtainable: true, unique:false },
    { id: 101, imagePath: "assets/images/weapons/GoldenScrewdriver.png", name: "Golden Screwdriver", difficultyRequired: 18, obtainable: true, unique:false },
    { id: 86, imagePath: "assets/images/weapons/UltraRevolver.png", name: "Ultra Revolver", difficultyRequired: 19, obtainable: true, unique:false },
    { id: 93, imagePath: "assets/images/weapons/UltraShotgun.png", name: "Ultra Shotgun", difficultyRequired: 19, obtainable: true, unique:false },
    { id: 94, imagePath: "assets/images/weapons/UltraCrossbow.png", name: "Ultra Crossbow", difficultyRequired: 19, obtainable: true, unique:false },
    { id: 95, imagePath: "assets/images/weapons/UltraGrenadeLauncher.png", name: "Ultra Grenade Launcher", difficultyRequired: 19, obtainable: true, unique:false },
    { id: 87, imagePath: "assets/images/weapons/UltraLaserPistol.png", name: "Ultra Laser Pistol", difficultyRequired: 19, obtainable: true, unique:false },
    { id: 92, imagePath: "assets/images/weapons/UltraShovel.png", name: "Ultra Shovel", difficultyRequired: 19, obtainable: true, unique:false },
    { id: 120, imagePath: "assets/images/weapons/FrogPistol.png", name: "Frog Pistol", difficultyRequired: 20, obtainable: true, unique:false },
    {id:39, imagePath:"assets/images/weapons/goldRevolver.png",name: "Golden revolver", difficultyRequired:17,obtainable: true, unique:true },
    {id:46, imagePath:"assets/images/weapons/Chickensword.png", name:"Chicken sword",difficultyRequired:-1,obtainable: false,unique:true},
    {id:81,imagePath:"assets/images/weapons/RogueRifle.png", name:"Rogue rifle",difficultyRequired:-1,obtainable: false,unique:true},
];

export function getCrown(id: number): Crown {
    for (let i = 0; i < crowns.length; i++) {
        if (crowns[i].id === id) {
            return crowns[i];
        }
    }
    return null;

}

export function getWeapon(id: number): Weapon {
    for (let i = 0; i < weapons.length; i++) {
        if (weapons[i].id === id) {
            return weapons[i];
        }
    }
    return null;
}

export var characters: Character[] = [
    { id: 1, name: "Fish", iconPath: "assets/images/characters/fish.png", startingWeapon: weapons[1] },
    { id: 2, name: "Crystal", iconPath: "assets/images/characters/crystal.png", startingWeapon: weapons[1] },
    { id: 3, name: "Eyes", iconPath: "assets/images/characters/eyes.png", startingWeapon: weapons[1] },
    { id: 4, name: "Melting", iconPath: "assets/images/characters/melting.png", startingWeapon: weapons[1] },
    { id: 5, name: "Plant", iconPath: "assets/images/characters/plant.png", startingWeapon: weapons[1] },
    { id: 6, name: "Y.V", iconPath: "assets/images/characters/yv.png", startingWeapon: getWeapon(39) },
    { id: 7, name: "Steroids", iconPath: "assets/images/characters/steroids.png", startingWeapon: weapons[1] },
    { id: 8, name: "Robot", iconPath: "assets/images/characters/robot.png", startingWeapon: weapons[1] },
    { id: 9, name: "Chicken", iconPath: "assets/images/characters/chicken.png", startingWeapon: getWeapon(46) },
    { id: 10, name: "Rebel", iconPath: "assets/images/characters/rebel.png", startingWeapon: weapons[1] },
    { id: 11, name: "Horror", iconPath: "assets/images/characters/horror.png", startingWeapon: weapons[1] },
    { id: 12, name: "Rogue", iconPath: "assets/images/characters/rogue.png", startingWeapon: getWeapon(81) },
];

export interface Mutation {
    name: string,
    imagePath: string,
    id: number,
}


export function getNumOfRemainingMutations(allowedMutations: number, selectedMutations: Mutation[]) {
    let num = allowedMutations;

    for (let i = 0; i < selectedMutations.length; i++) {
        if (selectedMutations[i].id !== 25) {
            num--;
        }
    }

    return num;

}

export interface ImprovedArea {
    area: number, subarea: number, 
    loop: number, enemies: Enemy[], baseDifficulty: number, mutations:number,
    minKills:number,maxKills:number
}


export interface Enemy {
    name: string,
    id: number,
    imagePath: string,
}



export interface FinalData{
    type:GameTypeEnum,
    character:Character,
    mutations: Mutation[],
    crown:Crown,
    primaryWeapon:Weapon,
    secondaryWeapon:Weapon,
    area: number,
    subarea: number,
    kills:number,
    charlevel:number,
    win:boolean,
    lasthit:Enemy,
    bskin:boolean,
    seq:number,
    loop:number,
    steam_id:string
}

function getArea(loop:number,area:number,subarea:number):ImprovedArea{
    let tArea:ImprovedArea;
    for(let i=0;i<areas.length;i++){
        tArea = areas[i];
        
        if (tArea.loop==loop && tArea.area==area && tArea.subarea==subarea)
            return tArea;

        
    }

    return null;
}