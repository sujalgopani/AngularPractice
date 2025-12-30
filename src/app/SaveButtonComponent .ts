import { Component } from '@angular/core';

@Component({
  selector: 'button[app-save]',  // 👈 Attribute selector
  template: `💾 <ng-content></ng-content>`,
  styles: [`
    :host {
      background-color: green;
      color: white;
      border: none;
      border-radius: 6px;
      padding: 8px 16px;
      font-size: 16px;
      cursor: pointer;
    }

    :host:hover {
      background-color: darkgreen;
    }
  `],
  standalone: true
})
export class SaveButtonComponent {
  constructor() {
    console.log('✅ SaveButtonComponent Loaded!');
  }
 
  onClick() {
    console.log('💾 Data Saved Successfully!');
  }
}
