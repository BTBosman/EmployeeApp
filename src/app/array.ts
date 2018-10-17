export class Employee{
    employeeID;
    employeeName:string;
    employeelastName:string;
    employeeRole:string;
    proPic:any;

    constructor(employeeID:string,employeeName:string,employeelastName:string,employeeRole:string,proPic:any){
        this.employeeID=employeeID;
        this.employeeName=employeeName;
        this.employeelastName=employeelastName;
        this.employeeRole= employeeRole;
        this.proPic=proPic;
    }
}