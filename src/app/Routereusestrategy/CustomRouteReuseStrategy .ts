import { ActivatedRouteSnapshot, DetachedRouteHandle, Route, RouteReuseStrategy } from "@angular/router";

export class CustomRouteReuseStrategy  extends RouteReuseStrategy{
  private handler = new Map<Route | null, DetachedRouteHandle>();
  // check the permission is true or false (true then save false then)
  override shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.data['reuse'] === true;
  }

  // on the shouldDetach decision if true then save in the map otherwise not
  override store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
     if(handle && route.data['reuse'] === true){
      const key = this.getkey(route);
      this.handler.set(key,handle);
     }
  }

  // when the user open the route then saved instance do reattached or new create
  override shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const key = this.getkey(route);
    return route.data['reuse']===true && this.handler.has(key);
  }

  // actual instance return from the map
  override retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const key = this.getkey(route);
    return route.data['reuse'] === true ?(this.handler.get(key) ?? null) : null;
  }
  
  override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig == curr.routeConfig;
  }

  private getkey(route:ActivatedRouteSnapshot):Route|null{
    return route.routeConfig;
  }


  
}