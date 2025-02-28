import { Component } from '@angular/core';

import { Hero } from './hiro';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone : true,
  imports : [
      CommonModule,
      FormsModule]
})
export class FormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; console.log(this.model)}

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
