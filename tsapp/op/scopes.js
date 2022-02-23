// Using older JavaScript feature of 'var'
// The 'var' is function scope 
function printValueJS(x) {
    if (x) {
        var y = 10;
        console.log('In if statement y = ' + y);
    }
    console.log('Out of if statement y = ' + y);
}
printValueJS(true);
printValueJS(false);
// Using the ES 6 or TypeScript 'let' keyword for Block Scope
// let the defined variable will  be accessible only in the declaring block 
function printValueTS(x) {
    if (x) {
        var y = 10;
        console.log('In if statement y = ' + y);
    }
    console.log('Out of if statement y = ' + y);
}
printValueTS(true);
printValueTS(false);
