import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Employee } from '../../app/array';
// import signUparr2 from '../../app/employee'
import signUpArr from '../../app/arraySign';
import signUparr2 from '../../app/employee'
/**
 * Generated class for the EmployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {

employeeDetails = [];
signUparr2 = this.employeeDetails;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeesPage');
    console.log(this.employeeDetails);
  }

}
