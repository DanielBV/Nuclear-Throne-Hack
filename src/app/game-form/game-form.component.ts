import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  name = new FormControl('');
  daily = new FormControl('');
  endState = new FormControl('');
  deadArea = new FormControl('');

  areas: { area: Number, subareas: Number }[]
  characters: String[];

  checked: Boolean;
  constructor() { }

  ngOnInit() {
    this.checked = false;
    this.areas = [{ area: 1, subareas: 3 },
    { area: 2, subareas: 1 },
    { area: 3, subareas: 3 },
    { area: 4, subareas: 1 },
    {area:5,subareas:3},
    {area:6,subareas:1},
    {area:7,subareas:3}]

    this.characters = ["Fish", "Crystal", "Eyes", "Plant", "Robot", "Stereoids",
      "Melting", "Y.V", "Rebel", "Chicken", "Horror", "Rogue"];
  }

}
