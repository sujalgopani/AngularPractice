import { Injector } from "@angular/core";
import { Parent } from "../parent/parent";
import { ChildComponent } from "../child/child";
import { createCustomElement } from "@angular/elements";

export function RegiCustom(injector : Injector){
  const ele = [
    {name : 'pare-com',compo:Parent},
    {name : 'child-com',compo:ChildComponent},
  ];
  
  ele.forEach(e1=>{
    if(!customElements.get(e1.name)){
      const eleclass = createCustomElement(e1.compo as any, {injector});
      customElements.define(e1.name,eleclass);
      console.log("Registarion is done");
    }
  })
}