// as per as JS is concern the 'MyObject' is a class
// the 'this' represents a scope definition for MyObject 
// and all members perfixed using 'this' are public
var MyObject = function(){
    this.fn1=function(){
        console.log('I am f1');
    };
    this.add = function(x,y){
        return x * y;
    }
    function display(){
        console.log('Private display');
    }
};


var obj = new MyObject();
obj.fn1();
console.log(`Add = ${obj.add(2,3)}`);
obj.display();