var DemoProps = /** @class */ (function () {
    function DemoProps() {
        this._x = 0;
    }
    Object.defineProperty(DemoProps.prototype, "X", {
        // return it
        get: function () {
            return this._x;
        },
        // get set properties
        // set value for private member
        set: function (value) {
            if (value <= 0) {
                this._x = 0;
            }
            else {
                this._x = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return DemoProps;
}());
var o1 = new DemoProps();
o1.X = -100;
console.log("====================================");
console.log("x = ".concat(o1.X));
console.log("====================================");
