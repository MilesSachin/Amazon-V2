import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  email:any;
  password:any;
  constructor( private formBuilder:FormBuilder, private auth:AuthService) { }


  ngOnInit() {
  }
  signin(){
    if(this.email==''){
      alert('Please Enter email!');
      return;
    }
    if(this.password==''){
      alert('Please Enter Password!');
      return;
    }
    this.auth.login(this.email,this.password);
    this.email='';
    this.password='';
  }
}
