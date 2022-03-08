import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServeviceService } from '../Share/servevice.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
 value:any
  constructor(private serv:ServeviceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.serv.getTeacher().subscribe(res=>{
      alert('Do want to see Student Data !!')

      this.value= res.filter((ele:any)=>{
        return ele.occupation === 'student'

      })

      console.log(this.value);
      
      
    },err=>{
      alert("Something ERROR !!")
    })
  }

  editStudent(){

  }
  deleteStudent(id){
  this.http.delete(`http://localhost:3000/teacher/${id}`).subscribe(res=>{
    alert('Are sure !!')
    return res

  })
  }


}
