class DemoStatic {
    static reverseArray(arr:Array<number>):Array<number> {
        return arr.reverse();
    }
}

let res = DemoStatic.reverseArray([1,2,3,4,5,6,7,8,9]);

console.log(res);
