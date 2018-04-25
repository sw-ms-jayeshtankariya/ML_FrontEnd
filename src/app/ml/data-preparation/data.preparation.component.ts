import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import { MatDialog, MatStepper } from '@angular/material';
import { SalesInformationComponent } from './salesinfo.component';
import { Title } from '@angular/platform-browser';
import { TableSelectionComponent } from './table.selection.component';
import { TableData } from '../../_models/tabledata';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Router } from '@angular/router';

@Component({
  templateUrl: './data.preparation.component.html',
  styleUrls: ['./data.preparation.component.css']
})
export class DataPreparationComponent implements OnInit {
  selectedTable: string;
  events = [];
  @ViewChild('datapreparationstepper') private myStepper: MatStepper;
  dataConnectionForm: FormGroup;
  ngOnInit(): void {
    this.subscribePaymentTypeChanges();
  }

  saveDataPreparation() {
    this.http.get('assets/data/tableList.json')
      .subscribe(tData => {
        // Calling the DT trigger to manually render the table
        let dialogRef = this.dialog.open(TableSelectionComponent, {
          width: 'auto',
          maxWidth: '20vw',
          data: tData.json()
        });
        const sub = dialogRef.componentInstance.onAdd.subscribe((data) => {
          this.selectedTable = data;
          this.myStepper.next();
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
        });
      });
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
  constructor(private _fb: FormBuilder, private http: Http,
    public dialog: MatDialog, private titleService: Title, private _router: Router) {
    this.dataConnectionForm = _fb.group({
      connectionType: this._fb.control(this.CONNECTION_TYPE.FTP, Validators.required),
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
  }
  public setConnectionType(type: string) {
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