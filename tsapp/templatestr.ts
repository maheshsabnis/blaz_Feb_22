let fname:string = 'Mahesh';
let lname:string = "Sabnis";

// older way in JS
let fullNameJs = 'Full Name' + fname + ' ' + lname; // 4 string objects 
console.log(fullNameJs);

// TS syntax aka ES 6

let fullNameTS  = `Full Name is ${fname} ${lname}`; // Single Mutable String object
console.log(fullNameTS);

 