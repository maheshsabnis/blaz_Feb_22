let names:Array<string> = new Array<string>();
// Add Records in array
names.push('Ajay');
names.push('Bjay');
names.push('Cjay');
names.push('Djay');

// Iterate over array
// older way
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// mew ES 6 way in TS
for(let n of names){
    console.log(n);
}