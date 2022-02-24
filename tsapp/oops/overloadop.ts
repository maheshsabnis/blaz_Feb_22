class DemoOverload {
  add(a:any, b:any):any;  
  add(a: string, b: string): string;

  add(a: number, b: number): number;

  add(a: any, b: any): any {

    if(typeof (a) === 'number' && typeof (b) === 'number') {
        console.log('Number Check');
        return a + b;
    } 
    if(typeof (a) === 'string' && typeof (b) === 'string') {
        console.log('String Check');
        return a + b;
    } 

    if(typeof (a) === 'string' || typeof (a) === 'number' || typeof (b) === 'string' || typeof (b) === 'number' ) {
        console.log('Any Check');
        return a + b;
    } 
 }
}

let o1 = new DemoOverload();

console.log(`Strings ${o1.add('ACB', 'PQR')} `);
console.log(`Numbers ${o1.add(1000,2)}`);
console.log(`Numbers ${o1.add(1000,"2")}`);
 


