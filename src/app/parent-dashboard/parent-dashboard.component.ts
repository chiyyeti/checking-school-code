import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServeviceService } from '../Share/servevice.service';

@Component({
  selector: 'app-parent-dashboard',
  templateUrl: './parent-dashboard.component.html',
  styleUrls: ['./parent-dashboard.component.css']
})
export class ParentDashboardComponent implements OnInit {

  value:any
  constructor(private http:HttpClient,private serv:ServeviceService) { }

  ngOnInit(): void {
 this.getData();
  }
 
  getData(){
    this.serv.getTeacher().subscribe(res=>{
      
      alert("Parent  Data will be display !!")

      this.value= res.filter((ele:any)=>{
        return ele.occupation === 'parent'
        
      })
      
console.log(this.value);

      
      
    },err=>{
      alert("Something ERROR !")
    })
  }
  editParent(){

  }
  deleteParent(id){
    this.http.delete(`http://localhost:3000/teacher/${id}`).subscribe(res=>{
      alert('Are you sure !!')
      return res
  
    })
    }

}
