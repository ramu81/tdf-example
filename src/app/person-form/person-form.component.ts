import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Person } from '../person';
import { LoggerService } from '../logger.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit, OnDestroy {
  intervalId: any ;
  currentItem: string = 'Television';
  items = [this.currentItem];

  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  
  genders: string[] = ['MALE','FEMALE'];
  
  model: Person = new Person(1,'Ram','Kondapalli',this.genders[0]);
  
  submitted: boolean = false;
  
  visible: boolean = true;
  
  constructor(private logger: LoggerService) { }

  ngOnInit(): void { }
  ngOnDestroy(): void { clearInterval(this.intervalId); }
  onSubmit() { this.submitted = true; }
  
  get diagnostic(): string { return JSON.stringify(this.model);}
  
  newPerson() { this.model = new Person(2,'','','');}
  
  toggle() {
	  this.visible = !this.visible;
	  
	  if(this.visible) {
		  this.open.emit(null);
	  } else {
		  this.close.emit(null);
	  }
  }
  addItem(newItem: string) {
    this.items.push(newItem);
  }
 
  loggerInfo = new Observable<any>( observer => {
	this.intervalId = setInterval(() => observer.next(this.logger.logger.length),1000);
	});
}
