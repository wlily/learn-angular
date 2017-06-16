/**
 * Created by wll on 17-6-16.
 */

import {Hero} from "./Hero";
import {Component} from "@angular/core";

@Component(
  {
    selector: 'hero-form',
    templateUrl: './hero-form.component.html'
  }
)
export class HeroFormComponent{
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chunk Overstreet');

  submitted = false;
  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model)};

  newHero(){
    this.model = new Hero(42, '', '');
  }
}
