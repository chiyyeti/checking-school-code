import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServeviceService } from '../Share/servevice.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {
  value:any
  constructor(private serv:ServeviceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getData()
    
  }

  getData(){
    this.serv.getTeacher().subscribe(res=>{
      
      alert("Teacher  Data will be display !!")

      this.value= res.filter((ele:any)=>{
        return ele.occupation === 'teacher'
        
      })
      
console.log(this.value);

      
      
    },err=>{
      alert("Something ERROR !")
    })
  }
  deleteTeacher(id){
    this.http.delete(`http://localhost:3000/teacher/${id}`).subscribe(res=>{
      alert('Are sure !!')
      return res
  
    })
    }
    editTeacher(){
      
    }


}
