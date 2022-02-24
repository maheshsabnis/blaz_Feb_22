// Base classs
class Employee {
    constructor(public EmpNo:number, public EmpName:string, protected Salary:number){}
}

// Manager is Employee
class Manager extends Employee {
    private _ta:number;
    private _da:number;


    set ta(v:number){
        this._ta = v;
    }
   
    get ta():number {
        return this.ta;
    }

    set da(v:number){
        this._da = v;
    }
   
    get da():number {
        return this.da;
    }

    calculateSalary():number{
        return this._ta + this._da + this.Salary;
    }
}

class Consultant extends Employee {
    private _consultationFees:number;
    private _numberofhours:number;


    set consultationFees(v:number){
        this._consultationFees = v;
    }
   
    get consultationFees():number {
        return this._consultationFees;
    }

    set numberofhours(v:number){
        this._numberofhours = v;
    }
   
    get numberofhours():number {
        return this.numberofhours;
    }



    calculateSalary():number{
        return this.Salary + (this._consultationFees * this._numberofhours);
    }
}

let mgr = new Manager(1001, 'Mahesh', 100000);

mgr.da = 10000;
mgr.ta = 98000;

console.log('====================================');
console.log(`Salary = ${mgr.calculateSalary()}`);
console.log('====================================');

let cons = new Consultant(1002, 'Tejas', 450000);