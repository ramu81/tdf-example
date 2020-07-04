import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit, OnDestroy, OnChanges {
	
  @Output() newItemEvent = new EventEmitter<string>(); 

  @Input() item: string;
    
  constructor(private logger: LoggerService) { }

  ngOnInit(): void { this.logger.info('ItemDetailComponent : ngOnInit');}
  
  ngOnDestroy(): void { this.logger.info('ItemDetailComponent : ngOnDestroy');}
  ngOnChanges(messages: SimpleChanges) {
	for( let propName in messages ) {
		let chng = messages[propName];
		let cur  = JSON.stringify(chng.currentValue);
		let prev = JSON.stringify(chng.previousValue);
		this.logger.info(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
	}
  }
  addNewItem(newItem: string) { this.newItemEvent.emit(newItem); }
}
