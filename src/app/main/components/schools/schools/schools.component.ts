import { Component, Inject, OnInit, ViewChild, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Programs } from 'src/app/models/programs/programs';
import { ProgramsService } from 'src/app/services/programs/programs.service';
import {FormBuilder} from '@angular/forms';
import { School } from 'src/app/models/school/school';
import { SchoolService } from 'src/app/services/school/school.service';
import { Campus } from 'src/app/models/campus/campus';
import { CampusService } from 'src/app/services/campus/campus.service';
@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  totalRemain: any = 0;
	inProgress = false;
	tableProgress = false;

	
	dataSource!: MatTableDataSource<any>;
	cardColumns: string[] = ['ID', 'schoolCode', 'schoolName', 'schoolAddress','status','action'];

	@ViewChild('callDialog') callDialog!: TemplateRef<any>;
	@ViewChild('callEditDialog') callEditDialog!: TemplateRef<any>;
	@ViewChild('callStatus0Dialog') callStatus0Dialog!: TemplateRef<any>;
	@ViewChild('callStatus1Dialog') callStatus1Dialog!: TemplateRef<any>;
	@ViewChild("paginator") paginator!: MatPaginator;
	@ViewChild(MatSort) matSort!: MatSort;
  formBuilder: any;

	openDialog() {
		let dialogRef = this.dialog.open(this.callDialog);
		dialogRef.afterClosed().subscribe(result => {
		  if (result !== undefined) {
			if (result !== 'no') {
			  const enabled = "Y"
			  console.log(result);
			} else if (result === 'no') {
			  console.log('User clicked no.');
			}
		  }
		})
	  }
	  openEditDialog() {
		let dialogRef = this.dialog.open(this.callEditDialog);
		dialogRef.afterClosed().subscribe(result => {
		  if (result !== undefined) {
			if (result !== 'no') {
			  const enabled = "Y"
			  console.log(result);
			} else if (result === 'no') {
			  console.log('User clicked no.');
			}
		  }
		})
	  }
	  openStatus0Dialog() {
		let dialogRef = this.dialog.open(this.callStatus0Dialog);
		dialogRef.afterClosed().subscribe(result => {
		  if (result !== undefined) {
			if (result !== 'no') {
			  const enabled = "Y"
			  console.log(result);
			} else if (result === 'no') {
			  console.log('User clicked no.');
			}
		  }
		})
	  }
	  openStatus1Dialog() {
		let dialogRef = this.dialog.open(this.callStatus1Dialog);
		dialogRef.afterClosed().subscribe(result => {
		  if (result !== undefined) {
			if (result !== 'no') {
			  const enabled = "Y"
			  console.log(result);
			} else if (result === 'no') {
			  console.log('User clicked no.');
			}
		  }
		})
	  }
	  page = 0;
	  itemsPerPage = 100000000;
	  loading: boolean = true;
	  formData!: FormGroup;
	  schools: School[] = [];
	  campuss:Campus[]=[];


	  schoolid:any;
	  schoolCodes:any;
	 schoolNames:any;
	 schoolAddresss :any
	  constructor(private schoolService : SchoolService ,
		private campusService:CampusService,
		public dialog: MatDialog, private _formBuilder: FormBuilder) {
		
	 }
  ngOnInit(): void {

	this.dataSource = new MatTableDataSource();
     this.getAllData();
	 this.createData();
	 this.getAllForignData()
  }

  getAllData() {
    this.schoolService.getAllPage(this.page, this.itemsPerPage).subscribe((data: any[]) => {
      this.loading = false;
      this.schools = data;
	  this.campuss=data
      
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
      console.log(data);
    });
  }

  getAllForignData(){
	this.campusService.getAllPage(this.page, this.itemsPerPage).subscribe((data: any[]) => {
	  this.campuss= data;
	  console.log(data);
  });
  }

   // INSERT DATA
   createData() {
    this.formData = new FormGroup({
	
		schoolId: new FormControl('', [Validators.required]),
	   schoolCode: new FormControl('', [Validators.required]),
	   schoolName: new FormControl('', [Validators.required]),
      campusId:new FormControl('', [Validators.required]),
	  campus:new FormControl('', []),
      status: new FormControl('', [Validators.required]),
    });
  }
  submit() {
	this.formData.value.campus = { campusId:this.formData.value.campusId };
	console.log(this.formData.value);
  
    this.schoolService.create(this.formData.value).subscribe(res => {
      console.log('Data Inserted Successfully!');
      this.getAllData();
    //   this.addAlert();
    })
  }

   // UPDATE DATA
   callDataById(detail: any) {
    this.schoolService.get(detail.schoolId).subscribe((data) => {
      this.schoolid = data.supplierId;
      this.schoolNames = data.firstName;
      this.schoolCodes = data.middleName;
      this.schoolAddresss = data.lastName;
      
    //   this.statuss = data.status;
      console.log(data);

      this.formData = new FormGroup({
        schoolId: new FormControl(this.schoolid),
        schoolName: new FormControl(this.schoolNames),
        schoolCode: new FormControl(this.schoolCodes),
        schoolAddress: new FormControl(this.schoolAddresss),
        
        // status: new FormControl(this.statuss),
      })
    });
  }

  editSubmit() {
    console.log(this.formData.value);
    this.schoolService.update(this.schoolid, this.formData.value).subscribe(res => {
      console.log('Data Updated Successfully!');
      console.log(res);
      this.getAllData();
    //   this.editAlert();
  
    })
  }

  // SEARCH
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // ALERT 
//   statusAlert() {
//     Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 3000, title: 'Success!', text: 'Success to Activate Status', icon: 'success', });
//   }
//   addAlert() {
//     Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 3000, title: 'Success!', text: 'Success to Add Data', icon: 'success', });
//   }
//   editAlert() {
//     Swal.fire({ toast: true, position: 'top-end', showConfirmButton: false, timer: 3000, title: 'Success!', text: 'Success to Update Data', icon: 'success', });
//   }
 

}