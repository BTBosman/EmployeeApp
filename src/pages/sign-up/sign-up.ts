import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { signUp} from '../../app/signUpArray';
//import { HomePage } from '../home/home';
import { SignInPage } from '../sign-in/sign-in';

import signUpArr from '../../app/arraySign' ;

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})

export class SignUpPage {

  signUpArr = [];
  userName:string;
  password:string;

  saveData(userName,password){
    let obj = new signUp(userName,password);
    signUpArr.push(obj);
    console.log(signUpArr);
    this.navCtrl.push(SignInPage);

  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

}
