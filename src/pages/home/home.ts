import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Employee } from '../../app/array';
import { EmployeesPage } from '../employees/employees';
import signUparr2 from '../../app/employee'
import signUpArr from '../../app/arraySign';
//import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  employeeID;
  employeeName:string;
  employeelastName:string;
  employeeRole:string;
  proPic:any;
  signUparr2= [];
  signUparr = this.signUparr2;

  constructor(public navCtrl: NavController) {

  }

 pic2:any;

 insertPic = function (event:any){
   if(event.target.files && event.target.files[0]){
     let reader = new FileReader();

     reader.onload = (event:any) =>{
       this.pic2 = event.target.result;
     }
     reader.readAsDataURL(event.target.files[0]);
   }
 }

  saveData(employeeID,EmployeeName,EmployeelastName,EmployeeRole){
    if(employeeID != "" && EmployeeName != "" && EmployeelastName != "" && EmployeeRole != ""){
      let emp = new Employee(employeeID,EmployeeName,EmployeelastName,EmployeeRole,this.pic2);
    this.signUparr2.push(emp);
    console.log(this.signUparr2);
    }
  }
  update(i,newEmployeeID,newEmployeeName,newEmployeelastName,newEmployeeRole){

    let oldEmployeeID = this.signUparr2[i].newEmployeeID;
    let oldEmployeeName =this.signUparr2[i].newEmployeeName;
    let oldEmployeelastName = this.signUparr2[i].newEmployeelastName;
    let oldEmployeeRole = this.signUparr2[i].newEmployeeRole;
    //  let oldProPic = this.signUparr2[i].newthis.proPic;

    if (newEmployeeID != null && newEmployeeName != null && newEmployeelastName != null && newEmployeeRole != null ){
      let emp = new Employee(newEmployeeID,newEmployeeName,newEmployeelastName,newEmployeeRole,this.pic2)
      this.signUparr2[i] = emp;
      this.proPic = "";
    }
    else if(newEmployeeID != null){
      let emp = new Employee(oldEmployeeID,newEmployeeName,newEmployeelastName,newEmployeeRole,this.pic2)
      this.signUparr2[i] = emp;
    }
    else if(newEmployeeName != null){
      let emp = new Employee(newEmployeeID,oldEmployeeName,newEmployeelastName,newEmployeeRole,this.pic2)
      this.signUparr2[i] = emp;
    }
    else if(newEmployeelastName != null){
      let emp = new Employee(newEmployeeID,newEmployeeName,oldEmployeelastName,newEmployeeRole,this.pic2)
      this.signUparr2[i] = emp;
    }
    else if(newEmployeeRole != null){
      let emp = new Employee(newEmployeeID,newEmployeeName,newEmployeelastName,oldEmployeeRole,this.pic2)
      this.signUparr2[i] = emp;
    }
    }

  remove(a){
    this.signUparr2.splice(a,1);
}

viewEmployee(){
  this.navCtrl.push(EmployeesPage);
}

}
