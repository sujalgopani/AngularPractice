import { Directive, input } from '@angular/core';

@Directive({
  selector: '[theme]',
  standalone: true,
  inputs : ['mode:theme']
})

export class ThemeDirective {
  mode: 'light' | 'dark' = 'light';
}
