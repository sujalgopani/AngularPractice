import { Injectable, InjectionToken, ɵsetClassDebugInfo } from "@angular/core";


export const tokenRef = new InjectionToken('refexample');


@Injectable({
  providedIn: 'root'
})
export class reference{
  log() {
    console.log("testing ref");
  }
}