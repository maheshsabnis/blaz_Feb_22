var DemoStatic = /** @class */ (function () {
    function DemoStatic() {
    }
    DemoStatic.reverseArray = function (arr) {
        return arr.reverse();
    };
    return DemoStatic;
}());
var res = DemoStatic.reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(res);
