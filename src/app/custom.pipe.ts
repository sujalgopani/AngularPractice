import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : 'star',
})

export class StartPipe implements PipeTransform{
  transform(value: any, ...args: any[]) {
      return ` ◘ ${value} ◘  `;
  }
}