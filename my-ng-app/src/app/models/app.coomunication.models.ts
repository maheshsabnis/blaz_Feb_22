export class Department {
  constructor(
    public DeptNo:number,
    public DeptName: string
  ){}
}

export const Departments=[
  {DeptNo:10, DeptName:'D1'},
  {DeptNo:20, DeptName:'D2'},
  {DeptNo:30, DeptName:'D3'},
  {DeptNo:40, DeptName:'D4'}
];

export class Employee {
  constructor(
    public EmpNo:number,
    public EmpName:string,
    public DeptNo:number
  ){}
}

export const Employees=[
  {EmpNo:101, EmpName: 'A', DeptNo:10},
  {EmpNo:102, EmpName: 'B', DeptNo:20},
  {EmpNo:103, EmpName: 'C', DeptNo:30},
  {EmpNo:104, EmpName: 'D', DeptNo:40},
  {EmpNo:105, EmpName: 'E', DeptNo:10},
  {EmpNo:106, EmpName: 'F', DeptNo:20},
  {EmpNo:107, EmpName: 'G', DeptNo:30},
  {EmpNo:108, EmpName: 'H', DeptNo:40},
  {EmpNo:109, EmpName: 'I', DeptNo:10},
  {EmpNo:110, EmpName: 'J', DeptNo:20},
  {EmpNo:111, EmpName: 'K', DeptNo:30},
  {EmpNo:112, EmpName: 'L', DeptNo:40}
];
