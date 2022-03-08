import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServeviceService } from '../Share/servevice.service';
import { RegisterModule } from './register.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public signupForm !:FormGroup;
 getTeach:any
  regObj : RegisterModule = new RegisterModule();
  constructor(private fb:FormBuilder,private serv:ServeviceService,private https:HttpClient) { }

 
  ngOnInit(): void {
    this.signupForm=this.fb.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      occupation :[''],
      gender:[''],
      parent:[''],
      password:['',Validators.required],
      mobile:['',Validators.required]

     
    })

//     this.https.get("http://localhost:3000/teacher").subscribe(res=>{
//       // alert('Teaher data get');
//  console.log(res);

 
      
//     })
  }



  



signUp(){
  console.log(this.signupForm.value);
    this.https.post("http://localhost:3000/teacher",this.signupForm.value).subscribe(res=>{
 console.log(res);
 alert("Data Posted!!")
 
    })
  
  
}
}
