class MyClass {
    // parameterized ctor with class members with access specifier 
    constructor(private val1:number, private val2:number){
    }
    // define member functions (default is public)
    add():number {
        return this.val1 + this.val2;
    }

   

    power():number {
        return Math.pow(this.val1,this.val2);
    }
}

// define an instance of the class
let o1 = new MyClass(5,2);
 
console.log(`Add = ${o1.add()}`);
console.log(`Power = ${o1.power()}`);
