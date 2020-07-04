import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logger:string[] = [];
  constructor() { }
  
  info(msg: string) { console.log(msg); this.logger.push(msg);}
}
