class MyClass {
    // define data members (default is public)
    val1:number = 0;
    val2:number = 0;


    // define member functions (default is public)
    add():number {
        return this.val1 + this.val2;
    }

    power():number {
        return Math.pow(this.val1,this.val2);
    }
}

// define an instance of the class
let o1 = new MyClass();
o1.val1 = 5;
o1.val2 = 4;
console.log(`Add = ${o1.add()}`);
console.log(`Power = ${o1.power()}`);

