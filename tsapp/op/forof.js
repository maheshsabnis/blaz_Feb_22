var names = new Array();
// Add Records in array
names.push('Ajay');
names.push('Bjay');
names.push('Cjay');
names.push('Djay');
// Iterate over array
// older way
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// mew ES 6 way in TS
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var n = names_1[_i];
    console.log(n);
}
