var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base classs
var Employee = /** @class */ (function () {
    function Employee(EmpNo, EmpName, Salary) {
        this.EmpNo = EmpNo;
        this.EmpName = EmpName;
        this.Salary = Salary;
    }
    return Employee;
}());
// Manager is Employee
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Manager.prototype, "ta", {
        get: function () {
            return this.ta;
        },
        set: function (v) {
            this._ta = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Manager.prototype, "da", {
        get: function () {
            return this.da;
        },
        set: function (v) {
            this._da = v;
        },
        enumerable: false,
        configurable: true
    });
    Manager.prototype.calculateSalary = function () {
        return this._ta + this._da + this.Salary;
    };
    return Manager;
}(Employee));
var Consultant = /** @class */ (function (_super) {
    __extends(Consultant, _super);
    function Consultant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Consultant.prototype, "consultationFees", {
        get: function () {
            return this._consultationFees;
        },
        set: function (v) {
            this._consultationFees = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Consultant.prototype, "numberofhours", {
        get: function () {
            return this.numberofhours;
        },
        set: function (v) {
            this._numberofhours = v;
        },
        enumerable: false,
        configurable: true
    });
    Consultant.prototype.calculateSalary = function () {
        return this.Salary + (this._consultationFees * this._numberofhours);
    };
    return Consultant;
}(Employee));
var mgr = new Manager(1001, 'Mahesh', 100000);
mgr.da = 10000;
mgr.ta = 98000;
console.log('====================================');
console.log("Salary = ".concat(mgr.calculateSalary()));
console.log('====================================');
var cons = new Consultant(1002, 'Tejas', 450000);
