
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  // orders: Array<OrderMenu> = [];
	// orderData: Array<OrderMenuData> = [];
	totalRemain: any = 0;
	inProgress = false;
	tableProgress = false;

	
	cardDataSource!: MatTableDataSource<any>;
	cardColumns: string[] = ['ID', 'title', 'cscode', 'unit','scope','lecturer','program', 'status'];

	@ViewChild('callDialog') callDialog!: TemplateRef<any>;
	@ViewChild('callEditDialog') callEditDialog!: TemplateRef<any>;
	@ViewChild('callStatus0Dialog') callStatus0Dialog!: TemplateRef<any>;
	@ViewChild('callStatus1Dialog') callStatus1Dialog!: TemplateRef<any>;
	@ViewChild("paginator") paginator!: MatPaginator;
	@ViewChild(MatSort) matSort!: MatSort;

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


	  constructor(public dialog: MatDialog) {
		
	 }
  ngOnInit(): void {
  }

}

