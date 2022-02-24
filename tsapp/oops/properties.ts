class DemoProps {
  private _x: number = 0;

  // get set properties
  // set value for private member
  set X(value: number) {
    if (value <= 0) {
      this._x = 0;
    } else {
      this._x = value;
    }
  }
  // return it
  get X(): number {
    return this._x;
  }
}

let o1 = new DemoProps();

o1.X = -100;
console.log("====================================");
console.log(`x = ${o1.X}`);
console.log("====================================");
