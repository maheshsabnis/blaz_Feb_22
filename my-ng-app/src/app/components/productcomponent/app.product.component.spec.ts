// defining the test for the app.product.component.ts


// TestBed : Provide an execution for the Angular Object Model in Testing Env.
// ComponentFixture: Load Component, Instantiate it and monitor it for any changes
// e.g. DataBinding, Events, etc.

// async: Load and execute Tests Asynchronously

import {TestBed, ComponentFixture,async} from '@angular/core/testing';

// Import Product Component and its dependencies
import {ProductComponent} from './app.product.component';
import {Product} from './../../models/app.product.model';
// importing FormsModule because the Component uses Two-Way binding using FormsModule
import {FormsModule} from '@angular/forms';
// import All Custom Components and the Directives those are used in ProductComponent
import { SelectComponent } from 'src/app/directives/componentdirective/selectcomponent/app.select.component.directive';
import {ColorDirective} from './../../directives/attributedirective/ap.color.directive';


// Lets impelement the Test Suite
// describe(): The Object that contains one-or-mote test cases with its dependencies
// beforeEach(): The object that will collect, load and initialize all dependencies for each test case
// it(): The test Case
// Each test Case has following
  // Arrange: Collect all information used for testing
  // Act: Access the Function to Test
  // Assert: Validate the test

describe('Product Component Test',()=>{

  // define references required for test

  let component:ProductComponent;
  let fixture:ComponentFixture<ProductComponent>;
  let button:HTMLElement;

  // initialize instances bute before that, initialize the Testing Environment for the Current Component
  // of Angular Application, so that the bootstrap will takes place and standard Modules will be loaded

  beforeEach(()=>{
    // load the NgModule for Testing
    TestBed.configureTestingModule({
      declarations:[ProductComponent, SelectComponent,ColorDirective],
      imports:[FormsModule]
    }).compileComponents(); // Compile All components so that the Code and HTMLTemplate will be validated
                  // This will generate a HTML Template Object (template/templateUrl)
  });

  // Instantiate objects for testing
  beforeEach(()=>{
    // Use the Compiled COmponent object with the HTML Template and make it ready to use in test
    fixture = TestBed.createComponent(ProductComponent);
    // get the Component Instance which is ready with all dependencies, Interpolation, Property Binding, Event Binding and Two-Way binding
    component = fixture.componentInstance;
    // Initialize the Binding object those are affecting the HTML rendering
    // Cache the First HTML rendering when the Component is loaded
    fixture.detectChanges();
  });

  // Write the Test
  it('calculate the Tax as 2% of BasePrice when the Save button is clicked',()=>{

    // ************** ARRAGNE **************

    // 1. create an instance of Product Object
    let prd =  new Product(0,'','','','','',0);
    // 2. Set the Base Price
    prd.BasePrice = 4000;
    // 3. set the 'product' public property of the Component
    component.product = prd;
    // 4. Get the Component's HTML DOM
    const nativeElement = fixture.nativeElement;
    // 5. REad the Button that is having class as '.btn-success'
    button = nativeElement.querySelector('.btn-success');

    // *********************** ACT *********************
    // 6. Dispatch a Click event on the Button
    // dispatchEvent() is standard JavaScript object
    // This will raise 'click' event on the button and 'save()' method will be invoked
    // because the the is bind with (click)='save()'
    const eventType = button.dispatchEvent(new Event('click'));
    // 7. Monitor Changes takes place on DOM
    fixture.detectChanges();

    // ********************** ASSERTION *******************

    expect(nativeElement.querySelector('input[disabled]').value).toEqual('80');

  });

});
