class MyClass {
  
    private val1:number = 0;
    private val2:number = 0;

    constructor(x:number, y:number){
        this.val1 = x;
        this.val2 = y;
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
