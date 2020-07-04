import { Directive, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appSpy]'
})
export class SpyDirective implements OnInit, OnDestroy{

  constructor(private logger: LoggerService) { }
  
  ngOnInit() {this.logger.info('SpyDirective:  ngOnInit');}
  ngOnDestroy() {this.logger.info('SpyDirective:  ngOnDestroy');}
  
}
