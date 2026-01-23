import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mainnavbar } from "./Crud/mainnavbar/mainnavbar";

@Component({
  selector: 'app-root',
  imports: [Mainnavbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('crud');
}
