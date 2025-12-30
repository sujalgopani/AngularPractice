import { Injectable } from "@angular/core";
import { UrlHandlingStrategy, UrlTree } from "@angular/router";

Injectable()
export class urlhandlingstrategy implements UrlHandlingStrategy{
  
  shouldProcessUrl(url: UrlTree): boolean {
    console.log("handles:", url.toString());
    return url.toString().startsWith('/org');
  }

  extract(url: UrlTree): UrlTree {
    return url;
  }

  merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree {
    return newUrlPart;
  }
  
}