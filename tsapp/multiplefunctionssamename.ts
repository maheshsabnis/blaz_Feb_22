function add(a:string, b:string):string;

function add(a:number, b:number):number;

function add(a:any, b:any):any{
    return a + b;
}

console.log(`Add String = ${add('Mahesh', 'Sabnis')}`);
console.log(`Add Number = ${add(100,200)}`);
