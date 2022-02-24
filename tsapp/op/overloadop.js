var DemoOverload = /** @class */ (function () {
    function DemoOverload() {
    }
    DemoOverload.prototype.add = function (a, b) {
        if (typeof (a) === 'number' && typeof (b) === 'number') {
            console.log('Number Check');
            return a + b;
        }
        if (typeof (a) === 'string' && typeof (b) === 'string') {
            console.log('String Check');
            return a + b;
        }
        if (typeof (a) === 'string' || typeof (a) === 'number' || typeof (b) === 'string' || typeof (b) === 'number') {
            console.log('Any Check');
            return a + b;
        }
    };
    return DemoOverload;
}());
var o1 = new DemoOverload();
console.log("Strings ".concat(o1.add('ACB', 'PQR'), " "));
console.log("Numbers ".concat(o1.add(1000, 2)));
console.log("Numbers ".concat(o1.add(1000, "2")));
