import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class Highlight {
  @Input('UserInput') inputval?: string;

  @HostBinding('style.background')
  bg = 'transparent';

  @HostListener('mouseenter')
  onEnter() {
    this.bg = this.inputval!;
  }

  @HostListener('mouseleave')
  onLeave() {
    this.bg = 'transparent';
  }
}
