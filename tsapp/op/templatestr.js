var fname = 'Mahesh';
var lname = "Sabnis";
// older way in JS
var fullNameJs = 'Full Name' + fname + ' ' + lname; // 4 string objects 
console.log(fullNameJs);
// TS syntax aka ES 6
var fullNameTS = "Full Name is ".concat(fname, " ").concat(lname); // Single Mutable String object
console.log(fullNameTS);
