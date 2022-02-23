var names = new Array();
// add records
names.push('Aj');
names.push('Bja');
names.push('Cjay');
names.push('Djaya');
// iterate using an array method
// using forEach()
// Explicit method
function printNames(n, i) {
    console.log("Name at ".concat(i, "ths position is = ").concat(n));
}
// PAssing the callback function
names.forEach(printNames);
console.log();
// Using an anonymous function parameter to a method
names.forEach(function (n, i) {
    console.log("Name at ".concat(i, "ths position is = ").concat(n));
});
console.log();
// Using ES 6 with Arrow Operator
names.forEach(function (n, i) {
    console.log("Name at ".concat(i, "ths position is = ").concat(n));
});
console.log();
console.log("Using Map");
// using map()
names.map(function (n, i) {
    console.log("Name at ".concat(i, "ths position is = ").concat(n));
});
// Using the Filter method, returns the array as output based on condition
//  Lets use the filter() method to return only those names having length more than 3
console.log();
console.log('Names having length greater than 3');
var res = names.filter(function (n, i) {
    return n.length > 3;
});
console.log(res);
