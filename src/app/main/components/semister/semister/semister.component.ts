import { Component, Inject, OnInit, ViewChild, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Programs } from 'src/app/models/programs/programs';
import { ProgramsService } from 'src/app/services/programs/programs.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-semister',
  templateUrl: './semister.component.html',
  styleUrls: ['./semister.component.scss']
})
export class SemisterComponent implements OnInit {

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  totalRemain: any = 0;
	inProgress = false;
	tableProgress = false;

	
	cardDataSource!: MatTableDataSource<any>;
	cardColumns: string[] = ['ID', 'name','status','action'];

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

	  constructor(public dialog: MatDialog, private _formBuilder: FormBuilder) {
		
	 }
  ngOnInit(): void {
  }

}
