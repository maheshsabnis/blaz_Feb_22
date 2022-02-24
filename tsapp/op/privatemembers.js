var MyClass = /** @class */ (function () {
    function MyClass(x, y) {
        this.val1 = 0;
        this.val2 = 0;
        this.val1 = x;
        this.val2 = y;
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
