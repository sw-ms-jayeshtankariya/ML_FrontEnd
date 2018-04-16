import * as $ from 'jquery';
import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { NgbTabset, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import { TableData } from '../_models/tabledata';
import { MatDialog } from '@angular/material';
import { SalesInformationComponent } from './salesinfo.component';
import { Title } from '@angular/platform-browser';
import { slideInOutAnimation } from '../_animations/slide-in-out.animations';

@Component({
  templateUrl: './data.preparation.component.html',
  styleUrls: ['./data.preparation.component.css']
})
export class DataPreparationComponent implements OnInit {
  tableData: TableData[] = [];
  events = [];
  @ViewChild('tblReviewData')
  private tblReviewData: DataTables.DataTables;
  dtOptions: DataTables.Settings = {};
  dataConnectionForm: FormGroup;
  dtTrigger: Subject<any> = new Subject();
  ngOnInit(): void {
    this.subscribePaymentTypeChanges();
    this.dtOptions = {
      pageLength: 5
    };
    this.http.get('assets/data/tableData.json')
      .map(this.extractData)
      .subscribe(tData => {
        this.tableData = tData;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }
  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  saveDataPreparation() {
    //alert("valid");    
  }

  initDatabaseConnection() {
    const model = {
      connectionName: ['', Validators.required],
      dataSource: ['', Validators.required],
      databaseType: ['', Validators.required],
      host: ['', Validators.required],
      port: ['', Validators.required],
      databaseName: ['', Validators.required],
      userName: ['', Validators.required],
      passWord: ['', Validators.required]
    }
    return model;
  }
  initFTPConnection() {
    const model = {
      connectionName: ['', Validators.required],
      dataSource: ['', Validators.required],
      host: ['', Validators.required],
      port: ['', Validators.required],
      userName: ['', Validators.required],
      passWord: ['', Validators.required],
      file: ['', Validators.required]
    }
    return model;
  }

  showSalesInfo(ver: number) {
    var salesRec = this.tableData.filter(function (item) {
      return item.var === ver;
    })[0];
    let dialogRef = this.dialog.open(SalesInformationComponent, {
      width: '500px',
      data: salesRec
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    //const modalRef = this._salesInfo.open(SalesInfoComponent, { size: 'lg', backdrop: 'static',centered:true });
    //modalRef.componentInstance.sales_Info = salesRec.sales_info;
  }
  constructor(private _fb: FormBuilder, private http: Http,
    public dialog: MatDialog, private titleService: Title) {
    this.dataConnectionForm = _fb.group({
      connectionType: this.CONNECTION_TYPE.FTP,
      ftp: this._fb.group(this.initFTPConnection()),
      database: this._fb.group(this.initDatabaseConnection())
    });

    this.setTitle("Data Preparation")
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  title = 'app';
  public loadScript(url: string) {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
  public CONNECTION_TYPE = {
    FTP: 'ftp',
    DATABASE: 'database'
  };
  subscribePaymentTypeChanges() {
    // controls
    const cnCtrl = (<any>this.dataConnectionForm).controls.connectionType;
    const ftpCtrl = (<any>this.dataConnectionForm).controls.ftp;
    const dbCtrl = (<any>this.dataConnectionForm).controls.database;

    // initialize value changes stream
    const changes$ = cnCtrl.valueChanges;

    // subscribe to the stream
    changes$.subscribe(connectionType => {
      if (connectionType === this.CONNECTION_TYPE.FTP) {
        Object.keys(ftpCtrl.controls).forEach(key => {
          ftpCtrl.controls[key].setValidators(this.initFTPConnection()[key][1]);
          ftpCtrl.controls[key].updateValueAndValidity();
        });

        Object.keys(dbCtrl.controls).forEach(key => {
          dbCtrl.controls[key].setValidators(null);
          dbCtrl.controls[key].updateValueAndValidity();
        });
      }

      if (connectionType === this.CONNECTION_TYPE.DATABASE) {
        Object.keys(ftpCtrl.controls).forEach(key => {
          ftpCtrl.controls[key].setValidators(null);
          ftpCtrl.controls[key].updateValueAndValidity();
        });

        Object.keys(dbCtrl.controls).forEach(key => {
          dbCtrl.controls[key].setValidators(this.initDatabaseConnection()[key][1]);
          dbCtrl.controls[key].updateValueAndValidity();
        });
      }

    });
    this.setConnectionType(this.CONNECTION_TYPE.FTP);
  }
  setConnectionType(type: string) {
    // update payment method type value
    const ctrl: FormControl = (<any>this.dataConnectionForm).controls.connectionType;
    ctrl.setValue(type);
  }
}

// SINGLE FIELD VALIDATORS
export function emailValidator(control: FormControl): { [key: string]: any } {
  var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  if (control.value && !emailRegexp.test(control.value)) {
    return { invalidEmail: true };
  }
}

// FORM GROUP VALIDATORS
export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  return (group: FormGroup): { [key: string]: any } => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];

    if (password.value !== confirmPassword.value) {
      return {
        mismatchedPasswords: true
      };
    }
  }
}