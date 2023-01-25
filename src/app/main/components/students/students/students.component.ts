import { AfterViewInit, Component, Inject, OnInit, ViewChild, TemplateRef,Output } from '@angular/core';

import { FormBuilder, FormControl, NgForm, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, startWith, map } from 'rxjs';

import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


import { DatePipe } from '@angular/common';
import { Students } from 'src/app/models/students/students';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {


 
    inProgress = false;
    tableProgress = false;
    tableForm!: FormGroup;
    tables: Array<any> = [];
  dialog: any;
  tableServ: any;
  notify: any;
    get er() { return this.tableForm.controls; }
  
    constructor(
    ) {
    }
  
    ngOnInit(): void {
      this.getTableDetails();
      this.tableForm = new FormGroup({
        id: new FormControl([Validators.required]),
        tableNumberName: new FormControl([Validators.required])
      });
    }
    newTable() {
      this.inProgress = false;
      const table= { id: '0', tableNumberName: '' };
      this.setTableFormValue(table);
    }
    editTable(data: any ){
      this.inProgress = false;
      const table={ id: data.id, tableNumberName: data.tableNumberName };
      this.setTableFormValue(table);
    }
    deleteTable(table: any) {
      const swalBtns = mixin({
        customClass: {
          confirmButton: 'btn btn-danger mx-1',
          cancelButton: 'btn btn-success mx-1'
        }, buttonsStyling: false
      })
      swalBtnsfire({
        title: "Are you sure you want to delete this table named '" + table.tableNumberName + "'.",
        text: "You won't be able to revert this!",
        color: '#b33131',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      })
    }
    setTableFormValue(data:any) {
      this.tableForm = new FormGroup({
        id: new FormControl(data.id, [Validators.required]),
        tableNumberName: new FormControl(data.tableNumberName, [Validators.required])
      });
      this.openTableModalDialog();
    }
    saveTableNumber() {
      this.inProgress = true;
      this.tableFormModalDialogRef.close();
      if (this.tableForm.get("id")?.value == "0") {
        this.tableServ.newTable(this.tableForm.value).subscribe(
          () => {
            this.notify.showSuccess("Table has been registered.", "Success!");
            this.getTableDetails();
          }, (error: any) => {
            console.log(error);
            this.notify.showError("Fail to register new table.", "Error!");
          });
      } else {
        this.tableServ.updateTable(this.tableForm.get("id")?.value, this.tableForm.value).subscribe(
          () => {
            this.notify.showSuccess("Table has been updated.", "Success!");
            this.getTableDetails();
          }, (error: any) => {
            console.log(error);
            this.notify.showError("Fail to update table details.", "Error!");
          });
      }
  
    }
    getTableDetails() {
      this.tableProgress = true;
      this.tableServ.getTables().subscribe(
        (        data: any[]) => {
          this.tables = data;
          this.tableDataSource = new MatTableDataSource(this.tables);
          this.tableDataSource.sort = this.tableSort;
          this.tableDataSource.paginator = this.tablePaginator;
          this.tableProgress = false;
        }, () => {
          this.notify.showError("Fail to get table details.", "Error!");
          this.tableProgress = false;
        });
    }
    // table settings
    tableColumns: string[] = ['no', 'tableName', 'edit'];
    tableDataSource!: MatTableDataSource<any>;
    @ViewChild(MatPaginator) tablePaginator!: MatPaginator;
    @ViewChild(MatSort) tableSort!: MatSort;
    applyTableFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.tableDataSource.filter = filterValue.trim().toLowerCase();
      if (this.tableDataSource.paginator) {
        this.tableDataSource.paginator.firstPage();
      }
    }
    // end of table settings
  
    // dialog settings
    @ViewChild('tableFormModalDialog') tableFormModalDialog!: TemplateRef<any>;
    private tableFormModalDialogRef!: MatDialogRef<TemplateRef<any>>;
    openTableModalDialog(): void {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.restoreFocus = false;
      dialogConfig.autoFocus = false;
      dialogConfig.role = 'dialog';
      this.tableFormModalDialogRef = this.dialog.open(this.tableFormModalDialog, dialogConfig);
      this.tableFormModalDialogRef.afterClosed().subscribe(result => {
      });
    }
    // end of dialog settings
  }

function mixin(arg0: { customClass: { confirmButton: string; cancelButton: string; }; buttonsStyling: boolean; }) {
  throw new Error('Function not implemented.');
}
function swalBtnsfire(arg0: { title: string; text: string; color: string; icon: string; showCancelButton: boolean; confirmButtonText: string; cancelButtonText: string; reverseButtons: boolean; }) {
  throw new Error('Function not implemented.');
}

function then(arg0: (result: { isConfirmed: any; }) => void) {
  throw new Error('Function not implemented.');
}

