interface Persion{
    name: string;
    age: number;
}
interface Employee extends Persion{
    employeeId: number;
    department: string;
}
let employee : Employee={
    name: 'John',
    age: 30,
    employeeId: 123,
    department: 'IT'
}