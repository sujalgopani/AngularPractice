import { inject, Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

@Injectable()
export class Globally extends TitleStrategy{
  item = inject(Title);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const pagetitle = this.buildTitle(snapshot) || this.item.getTitle();
    return this.item.setTitle(`By Sujal -  ${pagetitle}`)
  }
  
}