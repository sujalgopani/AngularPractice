import { Injectable, ListenerOptions } from "@angular/core";
import { EventManagerPlugin } from "@angular/platform-browser";

@Injectable()
export class LongP extends EventManagerPlugin{
  constructor(){
    super(document);
  }

  override supports(eventName: string): boolean {
      return eventName == 'Longpress';
  }

  override addEventListener(element: HTMLElement, eventName: string, handler: Function, options?: ListenerOptions): Function {
      let timeout : any;

      const OnDown=()=>{
        timeout = setTimeout(() => handler(), 1000);
      }
      const OnUp=()=>{
        clearTimeout(timeout);
      }

      element.addEventListener('mousedown',OnDown);
      element.addEventListener('mouseup',OnUp);

      return()=>{
        element.removeEventListener('mousedown',OnDown);
        element.removeEventListener('mouseup',OnUp);
      }

  }
}