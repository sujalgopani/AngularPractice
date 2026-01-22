import { Component, viewChild } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
  CdkDropList,
  transferArrayItem,
  copyArrayItem,
} from '@angular/cdk/drag-drop';
import { hrtime } from 'process';
import { string } from 'zod';

@Component({
  selector: 'app-dragdrop',
  imports: [CdkDrag, CdkDropList],
  templateUrl: './dragdrop.html',
  styleUrl: './dragdrop.css',
})
export class Dragdrop {
  // CdkDropList using
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX - The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  // Transfer draggable elements between lists
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  sujal(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  // cdkDropListGroup is the used for the contain number of the container or DropListGroup
  // like this

  // cdkDropListGroup;
  // container 1
  // container 2
  // container 3
  // container 4
  // cdkDropListGroup;

  // Selective dragging

  all = [1, 2, 3, 4, 5];
  even = [7];

  dropsujal(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  predict(item: CdkDrag<number>) {
    return item.data % 2 === 0;
  }

  notpredict() {
    return false;
  }

  // Copy Element From One To Other
   products = ['Bananas', 'Oranges', 'Bread', 'Butter', 'Soda', 'Eggs'];
  cart = ['Tomatoes'];
  Copyevent(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
