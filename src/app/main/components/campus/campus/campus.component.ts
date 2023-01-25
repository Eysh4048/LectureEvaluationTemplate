import { Component, Inject, OnInit, ViewChild, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Programs } from 'src/app/models/programs/programs';
import { ProgramsService } from 'src/app/services/programs/programs.service';
import {FormBuilder} from '@angular/forms';
import { Campus } from 'src/app/models/campus/campus';
import { CampusService } from 'src/app/services/campus/campus.service';
@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.scss']
})
export class CampusComponent implements OnInit {
callUpdate(_t93: any) {
throw new Error('Method not implemented.');
}



  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  totalRemain: any = 0;
	inProgress = false;
	tableProgress = false;


	dataSource!: MatTableDataSource<any>;
	cardColumns: string[] = ['ID', 'campusName', 'campusCode', 'campusAddress','status','action'];

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
	  campuss: Campus[] = [];


	  campusid:any;
	  campusCodes:any;
	 campusNames:any;
	 campusAddresss :any
	  constructor(private campusService : CampusService ,public dialog: MatDialog, private _formBuilder: FormBuilder) {
		
	 }
  ngOnInit(): void {

	this.dataSource = new MatTableDataSource();
     this.getAllData();
	 this.createData();
  }

  getAllData() {
    this.campusService.getAllPage(this.page, this.itemsPerPage).subscribe((data: any[]) => {
      this.loading = false;
      this.campuss = data;
      
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
      console.log(data);
    });
  }


   // INSERT DATA
   createData() {
    this.formData = new FormGroup({
	
	   campusId: new FormControl('', [Validators.required]),
	   campusCode: new FormControl('', [Validators.required]),
	   campusName: new FormControl('', [Validators.required]),
	   campusAddress: new FormControl('', [Validators.required]),
      
      status: new FormControl('', [Validators.required]),
    });
  }
  submit() {
    console.log(this.formData.value);
    this.campusService.create(this.formData.value).subscribe(res => {
      console.log('Data Inserted Successfully!');
      this.getAllData();
    //   this.addAlert();
    })
  }

   // UPDATE DATA
   callDataById(detail: any) {
    this.campusService.get(detail.campusId).subscribe((data) => {
      this.campusid = data.supplierId;
      this.campusNames = data.firstName;
      this.campusCodes = data.middleName;
      this.campusAddresss = data.lastName;
      
    //   this.statuss = data.status;
      console.log(data);

      this.formData = new FormGroup({
        campusId: new FormControl(this.campusid),
        campusName: new FormControl(this.campusNames),
        campusCode: new FormControl(this.campusCodes),
        campusAddress: new FormControl(this.campusAddresss),
        
        // status: new FormControl(this.statuss),
      })
    });
  }

  editSubmit() {
    console.log(this.formData.value);
    this.campusService.update(this.campusid, this.formData.value).subscribe(res => {
      console.log('Data Updated Successfully!');
      console.log(res);
      this.getAllData();
    //   this.editAlert();
  
    })
  }


}