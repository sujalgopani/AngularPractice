import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-animatingapp',
  imports: [],
  templateUrl: './animatingapp.html',
  styleUrl: './animatingapp.css',
})
export class Animatingapp {
  isShown = signal(false);

  Toggle(){
    this.isShown.update((i)=>!i);
    console.log(this.isShown);
  }

  // Animating your Application with CSS

  isOpen = signal(false);

  ToggleOpen(){
    this.isOpen.update((i)=>!i);
  }

  //Animating Auto Height
  isAuto = signal(false);

  ToggleAuto(){
    this.isAuto.update((i)=>!i);
  }
}
