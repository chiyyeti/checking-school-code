import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NalandaComponent } from './nalanda/nalanda.component';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';

import { RegisterComponent } from './register/register.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';


const routes: Routes = [
  {path:'',redirectTo:'nalanda',pathMatch:'full'},
  {path:'nalanda',component:NalandaComponent},
  {path:'parent',component:ParentDashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'teacher',component:TeacherDashboardComponent},
  {path:'student',component:StudentDashboardComponent},
  {path:'**',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
