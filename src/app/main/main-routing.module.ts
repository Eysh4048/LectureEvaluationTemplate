import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicStaffComponent } from './components/academic-staff/academic-staff/academic-staff.component';
import { AcademicYearComponent } from './components/academic-year/academic-year/academic-year.component';
import { CampusComponent } from './components/campus/campus/campus.component';
import { CourseComponent } from './components/course/course/course.component';
import { DepartmentComponent } from './components/department/department/department.component';
import { PertimeStaffComponent } from './components/pertime-staff/pertime-staff/pertime-staff.component';
import { ProgramComponent } from './components/program/program/program.component';
import { ProgramsComponent } from './components/programs/programs/programs.component';
import { SchoolsComponent } from './components/schools/schools/schools.component';
import { SemisterComponent } from './components/semister/semister/semister.component';
import { StudentsComponent } from './components/students/students/students.component';
import { DashboardComponent } from './layout/dashboard/dashboard/dashboard.component';
import { PagelinkerComponent } from './layout/pagelinker/pagelinker/pagelinker.component';
import { MainComponent } from './main.component';

const routes: Routes = [

 { path: 'home',
  component: PagelinkerComponent,
  children:[
  { path: '', component: DashboardComponent},
  { path: 'course', component: CourseComponent },
  { path: 'programs', component: ProgramComponent },
  { path: 'student', component: StudentsComponent},
  { path: 'semister', component: SemisterComponent},
  { path: 'school', component: SchoolsComponent},
  { path: 'campus', component: CampusComponent},
  { path: 'department', component: DepartmentComponent},
  { path: 'academic-year', component: AcademicYearComponent},
  { path: 'staff', component: AcademicStaffComponent},
  { path: 'pertime', component: PertimeStaffComponent},
 ]
 }];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
