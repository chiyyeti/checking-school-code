import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ServeviceService } from './Share/servevice.service';
import { AuthGuard } from './Guard/auth.guard';
import{ HttpClientModule } from '@angular/common/http';
import { NalandaComponent } from './nalanda/nalanda.component';

import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StudentDashboardComponent,
    TeacherDashboardComponent,
    NalandaComponent,
  
    ParentDashboardComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
 
    
  ],
  providers: [ServeviceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
