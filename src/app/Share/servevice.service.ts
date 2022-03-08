import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ServeviceService {

  constructor(private http:HttpClient) { }

  postTeacher(data:any){
 
    return this.http.post<any>('http://localhost:3000/teacher',data).pipe(map(res=>{
      return res ;
    }))
  }

  

  getTeacher(){

    
    
    return this.http.get<any>('http://localhost:3000/teacher').pipe(map(res=>{
      return res ;
    }))
  }

  delete(){
    return this.http.delete<any>('http://localhost:3000/teacher').pipe(map(res=>{
      return res
    }))
  }
}
