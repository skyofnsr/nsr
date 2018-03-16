import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'appSqFt-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }
  wait: boolean =false;

  ngOnInit() {
  }
  
  submit(form){
    this.wait = true;

    setTimeout(()=> {
      alert(`Email  is ${form.value.email} and password is ${form.value.password} `);
      this.wait =false;

    }
      ,1000)

    console.log("hellos ");
  } 
  
}
