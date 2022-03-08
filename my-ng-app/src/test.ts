// This file is required by karma.conf.js and loads recursively all the .spec and framework files
// 1. The Testing Configuration to initialize the Angular Object Model Browser
import 'zone.js/testing';
// getTestBed: The Container Object, this is used ti initialize and load all Standard Angular dependencies
// in testing Environment e.g. FormsModule for two-way binding
import { getTestBed } from '@angular/core/testing';
// platformBrowserDynamicTesting: Bootstrap The Angular Application to load Angular Module aned hence Components/Services/Directives
// for Unit Testing
// BrowserDynamicTestingModule: This will load, instantiate and execute Component for testing of Logic, Events, Databinding
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';


// require: The Node.js Module object that will look and load test files
// xxxx.spec.ts or xxxx.test.ts
declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    <T>(id: string): T;
    keys(): string[];
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
// FormsModule, HttpClinetModule, ReactiveFormsModule, RouterModule, any other custom module
context.keys().map(context);
