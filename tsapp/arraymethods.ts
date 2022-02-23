let names:Array<string> = new Array<string>();
// add records
names.push('Aj');
names.push('Bja');
names.push('Cjay');
names.push('Djaya');

// iterate using an array method
// using forEach()
// Explicit method
function printNames(n:string, i:number):void {
    console.log(`Name at ${i}ths position is = ${n}`);
}
// PAssing the callback function
names.forEach(printNames);
console.log()
// Using an anonymous function parameter to a method
names.forEach(function(n:string, i:number){
    console.log(`Name at ${i}ths position is = ${n}`);
});
console.log()

// Using ES 6 with Arrow Operator

names.forEach((n:string,i:number)=>{
    console.log(`Name at ${i}ths position is = ${n}`);
});
console.log();
console.log("Using Map");

// using map()
names.map((n:string,i:number)=>{
    console.log(`Name at ${i}ths position is = ${n}`);
});

// Using the Filter method, returns the array as output based on condition
//  Lets use the filter() method to return only those names having length more than 3
console.log();
console.log('Names having length greater than 3');

let res  = names.filter((n:string,i:number)=>{
    return n.length > 3;
});

console.log(res);
