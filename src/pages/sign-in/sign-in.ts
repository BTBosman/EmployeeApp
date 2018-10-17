import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
// import { signUp} from '../../app/signUpArray';
import signUpArr from '../../app/arraySign' ;

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  signIn= signUpArr;

  userName:string;
  password:string;
  Login(){
     
    for (let index = 0; index < this.signIn.length; index++) {
      
      if(this.userName == this.signIn[index].userName && this.password == this.signIn[index].password){
        
        this.navCtrl.push(HomePage);
      }
      else{
        console.log("please enter valid username and password")
        alert("Username and/or password are incorrect!!")
          // alert("Please try again..")
      } 
      }

  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
}
