import { Component } from '@angular/core';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { Footer } from './footer/footer';
import { Home } from './home/home';


@Component({
  selector: 'app-root',
  imports: [Header, Nav,RouterOutlet,Footer, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'uebung6';
}
