import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card'; 

import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { PageFooterComponent } from './layout/page-footer/page-footer.component';
import { PageSidebarComponent } from './layout/page-sidebar/page-sidebar.component';
import { PageNavbarComponent } from './layout/page-navbar/page-navbar.component';
import { StudentsComponent } from './components/students/students/students.component';
import { CourseComponent } from './components/course/course/course.component';
import { ProgramsComponent } from './components/programs/programs/programs.component';
import { PagelinkerComponent } from './layout/pagelinker/pagelinker/pagelinker.component';
import { DashboardComponent } from './layout/dashboard/dashboard/dashboard.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { CdkTableModule } from '@angular/cdk/table';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AcademicYearComponent } from './components/academic-year/academic-year/academic-year.component';
import { SemisterComponent } from './components/semister/semister/semister.component';
import { DepartmentComponent } from './components/department/department/department.component';
import { SchoolsComponent } from './components/schools/schools/schools.component';
import { AcademicStaffComponent } from './components/academic-staff/academic-staff/academic-staff.component';
import { PertimeStaffComponent } from './components/pertime-staff/pertime-staff/pertime-staff.component';
import { ProgramComponent } from './components/program/program/program.component';
import { CampusComponent } from './components/campus/campus/campus.component';

@NgModule({
  declarations: [
    MainComponent,
    PageFooterComponent,
    PageSidebarComponent,
    PageNavbarComponent,
    StudentsComponent,
    CourseComponent,
    ProgramsComponent,
    PagelinkerComponent,
    DashboardComponent,
    AcademicYearComponent,
    SemisterComponent,
    DepartmentComponent,
    SchoolsComponent,
    AcademicStaffComponent,
    PertimeStaffComponent,
    ProgramComponent,
    CampusComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
 
    MatDividerModule,

    MatBadgeModule,
    MatProgressBarModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSortModule,
    CdkTableModule,
    MatDatepickerModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
  ]
})
export class MainModule { }
