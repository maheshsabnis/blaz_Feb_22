// an implicit data type definition based on Right-Hand-Side value
let n1 = 100; // n1 is inferred to 'number' datatype

// an explicit datatype declarations
let n2:number;
n2 = 90; // correct

let n3:string = 'Mahesh Sabnis';

let n4:boolean = false;
n4=true;

// define an Array

// Implicit Array
let n5 = []; // default to 'any[]'

let n6 = [10,20]; // number array

// Explicit Array type declaration

let n7 = new Array<string>(); // the Array<T> is generic class, T can be any of the standard datatype supported by TS


// Union type, defining a variable with more than one datatype at a time
// n8 will be either number or string
let n8: number|string;  
n8 = 100; // valid
n8 = "James"; // valid

// Object Type
// An Empty JSON object
// This can have any number of properties or methods in it
let n9 = {};  // Empty
// Add Property
n9.FirstName = "Mahesh";
// Print the Property
console.log(' First Name is  = ' + n9.FirstName);

// Understanding 'any'

let n10:any;

console.log('type of n10 = ' + typeof(n10) + '  and value of n10 = ' + n10);
n10 = 100;
console.log('type of n10 = ' + typeof(n10) + '  and value of n10 = ' + n10);
n10 = "Mahesh";
console.log('type of n10 = ' + typeof(n10) + '  and value of n10 = ' + n10);
