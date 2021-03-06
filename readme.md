#TypeScript (TS) Programming
1. Language based on ES 6 (a new standard for Front-End app development for JavaScript)
2. TypeScript Application Configuration
    - Node.js
        - Runtime for JS apps on server-side
    - The 'npm' tool
        - Node Package Manager used for JS and TS app configuration
    - package.json
        - The Project configuration file the contains following information     
            - All Dependency Packages for the application
                - devDependencies
                    - List of packages used during Development, Testing
                        - npm install --save-dev [PACKAGE-NAME]
                - dependencies
                    - List of packages used during the application execution aka runtime     
                        - npm install --save [PACKAGE-NAME]
            - Commands to Test, Build, Run application in 'script' block     
        - Command to Create package.json
            - npm init -y
                - This will generate the package.json with defaults
            - npm init
                - This will provide command line wizard to generate package.json                      
        - Some packages MUST be install globally, these will be used to Build, Run, Compile (aka transpile) TypeScript apps       
            - npm install -g [PACKAGE_NAME] 
        - e.g.
            - Installing TypeScript in global scope
                - npm install -g typescript
            - The TypeScript global scope will provide the 'tsc' tool
                - This is 'TypeScript Compiler'
                - This will transpile .ts files into .js files        

#TypeScript Features
    - Block Scope variable declaration using 'let' keyword
    - DataTypes
        - number, string, object, date, Array<T>, boolean, Type
        - the 'any', this is default for a variable when not datatype or default value assigned to it
        - Union Type, defining a variable for more than one datatype at a time
    - String Interpolation aka Template String, a new syntax for String Concatenation  
        - USed for string concatenation where a 'SINGLE-MUTABLE-STRING' object is created
        - Syntax
            - let str1 = 'Mahesh';
            - let str2 = 'Sabnis';
            - let concat = `Full Name  = ${str1} ${str2}`;
                - {str1} and {str2} are 'Parsed String' expressions, these will be replaced while constructing a string  
    - Iterations
        - for..of loop
            - USed to iterate over the collection            
    - Arrow Operators, a replacement for Callback Functions
        - Use the arrow operator as input parameter to a function if it accepts the input parameter as 'callback function' 
    - Rest Parameters, variable number of parameters to a method
    - OOPs
        - Class
            - Access Specifiers
                - Public, Private, Protected (TS 3.0+)
            - Access Modifiers
                - Static
            - Inheritance
                - Using 'extends' keywords      
        - Interface
            - The 'implements' keyword
        - Generics
    - Modules
        - 'export' Type (Array, Method, Class) form one .ts file and 'import' it in other file 
- Transpiling .ts into .js
    - tsc [SOURCE-PATH]/[FileName].ts -out [TARGET_PATH]/[FileName].js
- Execute the .js file in-side Node.js server
    - node   [TARGET_PATH]/[FileName].js          

# ES 6 Modularity
- Class
    - Class Methods with Access Specifiers
    - Constructor
    - Properties
    - Derivation
    - Interface    
- W3C + Mozilla
    - High-Level-JavaScript aka Modern JavaScript aka ES 2015 (ES 6)    
- Microsoft 
    - TypeScript
        - Class with Access Specifiers
        - Inheritance
        - Interfaces
        - Abstract Representations
        - Static
    - Angular uses TypeScript as its Backbone   

# OOPs with TypeScript
    - The 'class' is a keyword
    - The Default Access-Specifiers for Class members is 'public'
    - The 'get', 'set' property system
        - They are public wrappers over private members of the class
        - They are used in case when the private member needs self-validating logic
    - The 'private' keyword for private members
    - The 'constructor()' is a standard method for constructor creation in class
        - No Overloading is allowed        
        - public and private parameters to constructor is possible and they will be used as class public, private members
    - The Inheritance is possible using 'extends' keyword
        - The base class constructor is accessed using 'super()' method from derived class constructor
        - The Up-Casting and Downcasting of class objects is not allowed   
    - The 'static' keyword for static members
    - The 'abstract' keyword for abstract class
        - No Virtual Methods as of today
    - All members of class are accessed inside the class using 'this.' prefix                

#==============================================================================

#Creating Angular Application
- Use the Angular CLI
    - npm install -g @angular/cli
        - Angular CLI is ready-to-use Angular Application Template that contains following
            - Application Configuration
            - Package Dependencies
            - TypeScript Configuration
            - Build, Test and Run Configuration
        - The Angular CLI will install a 'ng' tool 
            - This will be used for following
                - Build Angular App
                    - Dev Build (Default)
                    - Production Build
                - Test
                - Run
    - Create an Angular Application using Angular CLI   
        - ng new [Application-NAME]


# Angular Concepts

- Module
    - The Object that provides platform for Angular Application to load and execute in Browser
    - Module Contains
        - Other Modules
        - Components
        - Directives
        - Services
        - Pipes
        - Dependency Injection Container

- Directive
    - A Object that provides following
        - A Reusable UI with Logic and Behavior (Component)
        - A Reusable Property or attribute that is applied on HTML elements to change its behavior
        - A Reusable object that is used to generate UI dynamically based on Condition (if) or iterations (loop)
- Component
    - MOST important part of Angular Application
    - Each Component is a Directive
    - It is an 'Autonomous-Object' that contains following
        - HTML UI
        - Properties, these are used to read data from UI and write data to UI to generate it dynamically
        - Methods, these are used as Logic for Component and also used for execution when an event is raised on UI
    - One component can contains other component(s) as a Parent-Child Relationship
- Pipes
    -  They are the objects which are used for setting rules for displaying data on UI
        - Date, Currency, Strings, etc.
- Services
    - They are Utility classes
    - They are used by all other objects of Angular application e.g. Components, Directives, and other services
    - Services are used for following main requirements
        - A Complex Logic that is required in more than one component, add this logic into the service class
        - HTTP Communication or all other async calls
        - To Establish Communication across components like Pub/Sub Pattern aka components does not know about each-other or does not have any relationship                
- Dependency Injection Container
    - All Services MUST be registered in the DI Container so that they can be injected in individual components

- The 'Decorator' is a ES 6 concept, that is used by Angular Extensively for creating
    - Module, Components, Services, Pipes and Directives
    - Decorators are available only in TypeScript and in Angular
    - It is an object that is applied on following to set behavior on it
        - Class
        - Method
        - Data Member
        - Property

    - To make class as Angular Module, Component, Directive, Pipe, and Service, we have to apply corresponding decorator on it.    

# Angular Standard Packages
    - @angular/platform-browser-dynamic
        - platformBrowserDynamic() object with its bootstrapModule() method to bootstrap Angular Module in browser
            - platformBrowserDynamic().bootstrapModule(MODULE_NAME)
    - @angular/platform-browser
        - Uses the 'BrowserModule()' to load and render the UI of the Component in browser
    - @angular/compiler
        - Provides Compilation and optimize build for Angular application
    - @angular/common
        - Used to manage the loading of Angular Standard Module and Custom Module in the browser as per the need
        - This provides 'CommonModule', if the current Angular application is loading Component from third party or other custom module
            - NOTE: An Angular application can have 'only-one-instance' of the BrowserModule 
                - The CommonModule will ask the BrowserModule to load and render Components from other Modules
    - @angular/core
        - The most important package for Angular Development. This contains following classes
            - NgModule
                - A Decorator class applied on a TypeScript class to make it as Angular Module
                - e.g.
                    @NgModule() class MyModule{....}
                        -  MyModule, is a TypeScript class, that will be used as Angular Module 
                 - Properties of NgModule
                      - imports: 
                           of the type array, this is used to import standard Angular modules, Custom Modules created in same application and third-party modules. All these modules will be instantiated and loaded in the current application.        
                      - declarations:
                         of the type array, this is used to declare components, directives of the current application. This will create an instance of components, directives so that they are ready-to-use. (NOTE: Each Component and Directive MUST be registered in  declarations array otherwise application won't be able to use it and app will crash.)
                     - exports: 
                         of the type array, this is used to export Modules of current application to other angular application for re-usability. (NOTE: This is used only when the big angular application is divided across various teams)      
                            - If Application A exports a module then to use the module in application B the exported module from application A  MUST be imported by application B in 'imports' array.
                     - providers: 
                         of the type array, this is Dependency Injection Container. This is used to register all Angular Services as 'Singleton-Instance' so that this instance can be used by Components, Directives, and other services in the current Angular Application      
                     - bootstrap: 
                          of the type array, this is used to load components those are already declared in 'declarations' array in the browser so that they are rendered.
            - Component
                - Decorator applied on class to make it as Angular Component
                    - e.g.
                        - @Component() class MyComponent{...}
                    - Properties
                        - selector: 
                            Of the type string. This is a 'CUSTOM-HTML-TAG' using which the component will be loaded and rendered in browser
                        - template: 
                            an inline HTML UI created using ES 6 Template String e.g. (`[HTML UI HERE]`)
                        - templateUrl (Recommended)
                            - a URL of HTML file that defines UI for Component 
                        - styles and styleUrls
                            - Inline CSS and external CSS files for applying Styles on HTML UI
            - Directive 
                - A Decorator applied on class to make it as Angular Directive
            - Injectable
                - A Decorator applied on class to make it as Angular Service
            - Pipe
                - A Decorator applied on class to make it as Angular Pipe           
            - Several other classes for Programming
                - e.g. Input, Output, EventListener, HostListener, Renderer2, etc.                       

    - @angular/router
        - Provides 'RouterModule' for Single Page Application
        - Object Model for Routing. e.g. Routes, Route, Router, ActivatedRoute, etc.
    - @angular/forms
        - USed for HTML Angular form
        - Provides
            - FormsModule for 'Two-Way' Databinding
            - ReactiveFormsModule for Model validation like MVC 
    - @angular/animation    
        - Flex UI 
- Programming Features
    - DataBinding
        - Interpolation aka Expression
            - Read-Only Databinding from Component to UI  
            - Syntax
                {{PUBLIC-DATA-MEMBER-FROM-COMPONENT-CLASS}}
        - Property Binding
            - Bind public data member of Component class with HTML UI element
            - This is from Component to UI
            - Syntax
                - [ATTRIBUTE-NAME-OF-HTML-ELEMENT] = "PUBLIC-DATA-MEMBER-FROM-COMPONENT-CLASS"
        - Event Binding
            - Bind and execute a public method of the component with an event of UI element
            - Syntax
                - (EVENT-NAME)="public-method()"        
        - Two-Way Binding
            - Combination of Property-Binding and Event-Binding
                - [(ngModel)]="PUBLIC-DATA-MEMBER-FROM-COMPONENT-CLASS"
                - When Data member is changed the UI will change and when UI change the Data member will change
                - The 'ngModel' is defined in the FormsModule from @angular/forms     
- tsconfig.json is generated using the following command
    -  tsc --init                    
    - "experimentalDecorators": true,
        -  Transpile Angular Decorators e.g. @NgModule, @Component, etc.
    - "moduleResolution": "node",
        - Each imported .ts file will be loaded as Node.js module and will be transpiled
            - e.g. if a.ts is imported in b.ts and the b.ts is transpiled
                - tsc b.ts
                    - this will also transpile a.ts
- angular.json
    - refer all expternal css files
        - "styles": [
              "src/styles.css"
            ],
    - refer all external js files        
        - "scripts": []
    - e.g. using bootstrap in angular app
        - install bootsrap
             - npm install --save bootstrap
        - configure it using angular.json so that it will be available for all UI in app
             -  "styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ], 

- To Execute the component during first load of Angular Application browser follow steps as given below
    - Add the Component in declarations array of @NgModule
    - MAke sure that the component is passed to 'bootstrap' array of @NgModule
    - Use the 'selector' of the component inindex.html
- To build and run the application have a look to following configurations of package.json
 "scripts": {
    "ng": "ng", -- the 'ng' CLI, that will be used globally after installing @angular/cli
    "start": "ng serve", -- Build and host the Angular app on Node.js dummy server on port 4200 
    "build": "ng build", -- build the app, this will transpile all .ts files and load .js and .css files 
    "watch": "ng build --watch --configuration development",  -- development build and not production
    "test": "ng test" -- for running test scripts
  },      

- Command to run on command prompt
    - npm run build
        -  ng build
    - npm run start
        - ng serve
    - npm run test
        - ng test

- Dev Build and execution

 Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   1.97 MB | ---> Transpilation of standard Angular modules
styles.css, styles.js | styles        | 333.86 kB | ---> Transpilation of CSS into css file and if custom CSS plugins will be transpiled into js file 
polyfills.js          | polyfills     | 299.96 kB | ---> The file that manages the JS execution in Browser
main.js               | main          |   7.54 kB | ---> The Developer code transpilation
runtime.js            | runtime       |   6.52 kB | ---> Web Pack Transpilation to load and execute Angular app in browser

                      | Initial Total |   2.60 MB   
- The production Build
-  ng serve --configuration production

Initial Chunk Files   | Names         |  Raw Size | Estimated Transfer Size
main.js               | main          | 285.21 kB |                74.09 kB --> the vendor.js and merged with main.js and it is compressed that why size is shown more as compare to dev build 
styles.css, styles.js | styles        | 274.40 kB |                45.33 kB
polyfills.js          | polyfills     | 154.26 kB |                39.88 kB
runtime.js            | runtime       |   1.25 kB |               676 bytes

                      | Initial Total | 715.11 kB |               159.95 kB


# Programming with Angular
    - DataBinding
        - Two-Way Binding
            - implemented using ngModel
                - This is an 'Attribute Directive', this will provide following behavior to the HTML Editable Elements (Input:text, radio, checkbox, select, etc.)
                    - Monitor the 'value' change on the element, this will takes place using any event (KeyUp, change)
                    - ngModel will raise the ngModelChanged event on UI and will read the updated value bound to the element
                    - The ngModelChanged event will pass/send the Updated value to the component for the property bound to ngModel
                    - Component will update itself by receiving updated value and will also update the same property and other properties depending on this property 
                    - The update value will be send to UI so that UI elements will use this updated value
                - To execute the ngModel, import the 'FormsModule' in 'imports' array of  @NgModule    
    - Component's features
        - This object contains methods and properties for Binding
        - This has its OWN LIFECYCLE
            - OnChanges
            - OnInit
                - Will be invoked immediately after constructor
                - Used to contain the code which we cannot write in the Constructor
                    - If heavy Code as follows written in constructor, the delayed in code execution will delay component's instance creation and hence will delay the loading time 
                        - Complex Data Iteration
                        - External Calls
            - ViewChanges
                - View COntent Init
                - View Content Init Complete
            - OnDestroy            
        - The component's UI recommendations
            - If a specific UI is repeating multiple times across 2-or-more components, the consider creating a Custom Component Directive for Re-Usability
            - Make sure that the HTML UI should avoid the hard-coding of Property Names incase the UI is generated dynamically using *ngFor based on collections   
            - Try Creating a Service or Utility classes, if the same logic is needed by multiple Components 
            - If Similar UI Behavior is required across multiple components e.g. Change the UI of table row on MOuse Move, or change the background-color of UI element based on validation, then create a custom Attribute Directive     
        - Component Parent Child Communication
            - When the Re-Usable Custom Component Directive is created, then it definitely it will be used as 'Chile-Component' of the 'Parent-Component'
            - This will tend to use  Parent Child Communication
            - The Parent will pass data to Child
                - The Child MUST have a public property (get/set) decorated with the '@Input()' decorator which is provided in @angular/core
                    - Use the @Input() decorator on 'set' property
                - The @Input() decorated property will be used for 'Property-Binding' when the Child is used in parent
            - The Child will emit data to Parent    
                - The Child Component MUST have a public member declared of the type 'EventEmitter<T>', this class is declared in @angular/core. The 'T' means the type of data to be emitted to the parent from the child
                - The public member of the type 'EventEmitter<T>' MUST be decorated with '@Output()' decorator. The '@Output()' decorator is provided in @angular/core
                - The  public member of the type 'EventEmitter<T>' will be used for 'Event-Binding' when child is used in parent
                    - The EventEmitter has the 'notify()' method to emit the data from child to parent
                    - The parent MUST subscribe to this event using a method. This method MUST accept the '$event' object, the JS object for Custom Eventing. The '$event' represents the data emitted from child to parent     
    - Directives
        - Standard Directives
            - They are provided by Angular Object Model
            - 3 Types of Directives
                - Component Directive, each Component is Directive. This makes component as a Re-Usable and Functional UI
                - Structural Directive
                    - Modify HTML UI based on Condition
                        - *ngFor, execute a for..in loop on the collection to generate UI
                        - *ngIf, execute an if condition to add/remove UI element based on the condition
                - Attribute Directive
                    - Modify the behavior of HTML Element
                        - ngModel
                        - formControlName, formGroup, etc.
        - Reusable Component
        - Custom Directives
    - Forms and Validations
        - Reactive Forms
            - It is an Angular form which is Bound with Model Object
            - When the Form is Changed, the Model object will be updated
            - If the Model Has Validations on its properties, then for Invalid values of these properties, the Forms UI will be affected
        - ReactiveFormsModule from @angular/forms
            - The 'AbstractControl' class
                - Represents an HTML Element on UI that will used for Data Read/Write 
            - The form tag will mapped with ngForm of Angular 
            - FormGroup class, represents a current active form, , derived from AbstractControl
                - [formGroup] Attribute directive
                    - The value of [formGroup] is an instance of FormGroup class
                    - This is applied in form tag
                - The 'value' property, used to read value of the form when the form is posted
                - The 'setValue()' method to set/pass object to the form    
                - The FormGroup instance is created using the following constructor
 
 ``` javascript
 constructor(controls: {
        [key: string]: AbstractControl;
    }, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null);
 ```           
    - controls: The FormControls Collection, which will be mapped with Model Class Public Properties
        - [key:string]:AbstractControl
            - key, is the name that will be used to map with Model class property, this 'key' will be passed to the 'formControlName' attribute of editable UI element in the [formGroup]
                - Recommendations: set the 'key' as same as the Property Name mapped with it 
        - validatorOrOpts
            - The Validation Rules array    
 


            - FormControl class, derived from AbstractControl
                - Represent an Editable element inside the [formGroup]  
                - This is used to map the public property of the model class with the editable element
                - This mapping is handled using 'formControlName' directive    
                - This replaces the [(ngModel)]        
                - The 'value' property, used to read value of the editable element under the formGroup
                - The 'setValue()' method to set/pass value to the editable element
            - Validators class
                - Contains standard validation methods
                - Note: The method that accepts AbstractControl as input parameter need to to passed with any value explicitly 
                    - required(AbstractControl)
                        - The value is element is mandatory
                        - Since the AbstractControl is a parameter, the UI element which is linked with the Model property will be directly passed the AbstractControl  
                    - requiredTrue(AbstractControl)
                        - Value MUSt be true
                        - USed for CheckBox, Radio, etc.
                    - email(AbstractControl)
                    - pattern(RegEx|string)
                        - Validate regular expression  
                    - minLength(int val)
                    - maxLength(int val)
                    - null()
                    - compose([ARRAY of VALIDATORS])    
                        - We can pass multiple validations to a property 
            - DOM UI evaluation for validations on each element will be as follows
                    - [FORM-GROUP-INSTANCE].controls
                        - Return FormControlCollection inside the form tag that is mapped with FORM-GROUP-INSTANCE
                    - [FORM-GROUP-INSTANCE].controls['FORM-CONTROL-NAME'] 
                        - Return an instance of formControl Name which is defined while creating FORM-GROUP-INSTANCE
                    - [FORM-GROUP-INSTANCE].controls['FORM-CONTROL-NAME'].errors['VALIDATION-ERROR-OCCURRED']
                        - VALIDATION-ERROR-OCCURRED, required, pattern, maxlength, minlength, etc.
                            - This can be custom error also
                    - [FORM-GROUP-INSTANCE].controls['FORM-CONTROL-NAME'].dirty
                        - If the UI element is changed
                        - This will invoke 'formControlNameChanged' event on UI for mapping value with MODEL-PROPERTY        
                    - [FORM-GROUP-INSTANCE].controls['FORM-CONTROL-NAME'].valid
                        - The value is valid
                    -  [FORM-GROUP-INSTANCE].controls['FORM-CONTROL-NAME'].invalid
                        - The value is invalid           
    - Services
        - Utility
        - Dependency Injections
        - Communication across Components using Pub/Sub
        - Http Calls
    - Routing
        -  Single Page app
        - @angular/router
            - RouterModule
                - Platform for Containing Route Table
                - Contains following Objects 
                    - Routes: A Route Table where each entry is an instance of Route object
                    - Route: A Route expression that contains metadata of the Route Information like
                        - path: URL to navigate to
                        - component: The component to be loaded after navigation
                        - redirectTo: The default navigation when no URL matches
                        - children: An array of 'Route' for Child or Sub-Routing
                        - loadChildren: Lazy-Loading of Modules and ite components (on-Demand)
                            - Load the module when there is a request for module loading in the Route
                                - {path:'', loadchildrec:()=>import('MODULE-FILE-PATH').then(m=>m.MODULENAME)}  
                        - canActivate: Activate a Route based on Security used in case of Guarded Route
                    - Router
                        - A Class that is used to define explicit Routing using 'navigate()' method
                        - This class in injected into the component which is used in routing
                    - ActivatedRoute
                        - A Class used to perform Parameterized Routing
                        - This class is injected in component which want to read the Route parameter
                    - [routerLink]: An attribute directive, applied on 'a' an anchor tag which is used to navigation across components
                        - This queries to the Route table and look for the component to navigate to 
``` html
    <a [routerLink]="['path-of-the-route-expression-from-route-table']"/>
```              

``` html
    <router-outlet></router-outlet>
```
        - the component directive, in which the navigated component will be rendered

        - RouterModule methods
            - RouterModule.forRoot(ROUTE-TABLE)
                - Registers the Route table at the root level of the application or module 
            - RouterModule.forChild(ROUTE-TABLE)
                - Used for Child Level Routing in Lazy-Loading    
    - Testing
        - testing Component with UI Events