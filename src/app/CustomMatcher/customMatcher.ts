import { UrlMatchResult, UrlSegment } from "@angular/router";

export function custommatching(segment:UrlSegment[]):UrlMatchResult|null{
  if(segment.length === 0) return null;
  const fsegment = segment[0].path;

  if(fsegment.startsWith('sujal-')){
    return {
      consumed:[segment[0]],
      posParams:{
        mainheading :new UrlSegment(fsegment.split('-')[0],{}),
        sujalneed:new UrlSegment(fsegment.split('-')[0].toUpperCase(),{}),
        sujalhasmoney: new UrlSegment('true',{})
      }
    }
  }

  if(fsegment.startsWith('test-')){
    return {
      consumed:[segment[0]],
      posParams:{
        mainheading :new UrlSegment(fsegment.split('-')[0],{}),
        sujalneed:new UrlSegment(fsegment.split('-')[0].toUpperCase(),{}),
        sujalhasmoney: new UrlSegment('true',{})
      }
    }
  }

  
  return null;
}