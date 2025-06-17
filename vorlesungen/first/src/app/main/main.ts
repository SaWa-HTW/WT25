import { Component } from '@angular/core';
import { Left } from './left/left';
import { Right } from './right/right';

@Component({
  selector: 'app-main',
  imports: [Left,Right],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
