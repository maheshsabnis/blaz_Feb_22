var MyClass = /** @class */ (function () {
    function MyClass() {
        // define data members (default is public)
        this.val1 = 0;
        this.val2 = 0;
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
var o1 = new MyClass();
o1.val1 = 5;
o1.val2 = 4;
console.log("Add = ".concat(o1.add()));
console.log("Power = ".concat(o1.power()));
