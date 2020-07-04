# tdf-example

PATH=.;c:\softwares\node-v12;c:\using-angular9\node_modules\.bin;

ng serve --host 127.0.0.1 --port 4201

ng new tdf-example

Building a template-driven form

Interpolation : 

	Interpolation allows you to incorporate calculated strings into the text 
between HTML element tags and within attribute assignments. 


The statement context is typically the component instance

Template statements :

	A template statement responds to an event raised by a binding target such as 
an element, component, or directive. You'll see template statements in the event
binding section, appearing in quotes to the right of the = symbol as in 
(event)="statement".

Binding syntax: an overview

	Data-binding is a mechanism for coordinating what users see, specifically 
with application data values. While you could push values to and pull values from 
HTML, the application is easier to write, read, and maintain if you turn these 
tasks over to a binding framework. You simply declare bindings between binding 
sources, target HTML elements, and let the framework do the rest.
 
	Angular provides many kinds of data-binding. Binding types can be grouped 
into three categories distinguished by the direction of data flow:

	From the source-to-view
	From view-to-source
	Two-way sequence: view-to-source-to-view

 Data-binding and HTML :
 
	With data-binding, you can control things like the state of a button:

	<!-- Bind button disabled state to `isUnchanged` property -->
	<button [disabled]="isUnchanged">Save</button>
	
	Data-binding works with properties of DOM elements, components, and 
	directives, not HTML attributes.
	
HTML attribute vs. DOM property

	The distinction between an HTML attribute and a DOM property is key to 
understanding how Angular binding works. Attributes are defined by HTML. Properties are accessed from DOM (Document Object Model) nodes.

	In Angular, the only role of HTML attributes is to initialize element and 
directive state.

Template binding works with properties and events, not attributes.

	When you write a data-binding, you're dealing exclusively with the DOM
properties and events of the target object.

	This general rule can help you build a mental model of attributes and DOM 
properties: Attributes initialize DOM properties and then they are done. Property values can change; attribute values can't.

Property binding [property]

	Use property binding to set properties of target elements or directive
decorators @Input() 

One-way in

	Property binding flows a value in one direction, from a component's property
into a target element property.

	An element property between enclosing square brackets identifies the target 
property.

Remember the brackets

	The brackets, [], tell Angular to evaluate the template expression. If you 
omit the brackets, Angular treats the string as a constant and initializes the target property with that string

	Template-driven forms use two-way data binding to update the data model in 
the component as changes are made in the template and vice versa	

	Template-driven forms rely on directives defined in the FormsModule.
	
	The NgModelGroup directive creates and binds a FormGroup instance to a DOM element.

	The NgModel directive reconciles value changes in the attached form element with 
changes in the data model, allowing you to respond to user input with input validation 
and error handling.

	The NgForm directive creates a top-level FormGroup instance and binds it to a <form> 
element to track aggregated form value and validation status. As soon as you import 
FormsModule, this directive becomes active by default on all <form> tags. You don't need 
to add a special selector.

Event binding (event)

	Event binding allows you to listen for certain events such as keystrokes, 
mouse movements, clicks, and touches.

	Angular event binding syntax consists of a target event name within
parentheses on the left of an equal sign, and a quoted template statement on the right.

Two-way binding [(...)]

	Two-way binding gives your app a way to share data between a component class 
and its template.

Two-way binding does two things:

	Sets a specific element property.		
	Listens for an element change event.
	
Template reference variables (#var)

	A template reference variable is often a reference to a DOM element within a 
template. It can also refer to a directive an element, TemplateRef, or a web component.

	Use the hash symbol (#) to declare a reference variable. The following 
reference variable, #phone, declares a phone variable on an <input> element.
	
	<input #phone placeholder="phone number" />

	You can refer to a template reference variable anywhere in the component's 
template.

@Input() and @Output() properties

	@Input() and @Output() allow Angular to share data between the parent 
context and child directives or components. An @Input() property is writable while an @Output() property is observable.
	
How to use @Input()

	Use the @Input() decorator in a child component or directive to let Angular 
know that a property in that component can receive its value from its parent component. It helps to remember that the data flow is from the perspective of the child component. So an @Input() allows data to be input into the child component from the parent component.

How to use @Output()

	Use the @Output() decorator in the child component or directive to allow 
data to flow from the child out to the parent.

	An @Output() property should normally be initialized to an Angular 
EventEmitter with values flowing out of the component as events.

	@Output() marks a property in a child component as a doorway through which 
data can travel from the child to the parent. The child component then has to raise an event so the parent knows something has changed.

	To raise an event, @Output() works hand in hand with EventEmitter, which is 
a class in @angular/core that you use to emit custom events.

Component lifecycle

	A component instance has a lifecycle that starts when Angular instantiates 
the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when data-bound properties change, and updates both the view and the component instance as needed. The lifecycle ends when Angular destroys the component instance and removes its rendered template from the DOM. Directives have a similar lifecycle, as Angular creates, updates, and destroys instances in the course of execution.

ngOnChanges() :

	Respond when Angular sets or resets data-bound input properties. The method 
receives a SimpleChanges object of current and previous property values.

	The ngOnChanges() method is your first opportunity to access those 
properties. Angular calls ngOnChanges() before ngOnInit().


	Called before ngOnInit() and whenever one or more data-bound input
properties change.

ngOnInit()	

	Initialize the directive or component after Angular first displays the 
data-bound properties and sets the directive or component's input properties. 

	Perform complex initializations outside of the constructor. Components 
should be cheap and safe to construct. You should not, for example, fetch data in a component constructor. 

	Constructors should do no more than set the initial local variables to 
simple values.

	An ngOnInit() is a good place for a component to fetch its initial data.

	Called once, after the first ngOnChanges().

ngDoCheck()	
 
	Detect and act upon changes that Angular can't or won't detect on its own. 

	Called immediately after ngOnChanges() on every change detection run, and 
immediately after ngOnInit() on the first run.

ngAfterContentInit()	

	Respond after Angular projects external content into the component's view, 
or into the view that a directive is in.

ngAfterContentChecked()	

	Respond after Angular checks the content projected into the directive or 
component.

ngAfterViewInit()	

	Respond after Angular initializes the component's views and child views, or 
the view that contains the directive.

ngAfterViewChecked()	

	Respond after Angular checks the component's views and child views, or the 
view that contains the directive.

ngOnDestroy()	

	Cleanup just before Angular destroys the directive or component. Unsubscribe 
Observables and detach event handlers to avoid memory leaks. 

	Unsubscribe from Observables and DOM events.

	Stop interval timers.

	Unregister all callbacks that the directive registered with global or 
application services.






