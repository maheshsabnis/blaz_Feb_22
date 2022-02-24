var MyClass = /** @class */ (function () {
    // parameterized ctor with class members with access specifier 
    function MyClass(val1, val2) {
        this.val1 = val1;
        this.val2 = val2;
    }
    // define member functions (default is public)
    MyClass.prototype.add = function () {
        return this.val1 + this.val2;
    };
    MyClass.prototype.power = function () {
        return Math.pow(this.val1, this.val2);
    };
    return MyClass;
}());
// define an instance of the class
var o1 = new MyClass(5, 2);
console.log("Add = ".concat(o1.add()));
console.log("Power = ".concat(o1.power()));
