import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name : 'SujalCustom'
})

export class CustomPipe implements PipeTransform{
  transform(value: any,format:string) {
    if(format === 'upper'){
      return value.toUpperCase();
    }else{
      return value.toLowerCase();
    }
  }
}