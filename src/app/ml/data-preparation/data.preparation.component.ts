import { Component, OnInit, ViewChild, Testability } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { MatDialog, MatStepper, _countGroupLabelsBeforeOption } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { TableSelectionComponent } from './table.selection.component';
import { TableData } from '../../_models/tabledata';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Router, ActivatedRoute } from '@angular/router';
import { DPSharedService } from './data.preparation.shared';

@Component({
  templateUrl: './data.preparation.component.html',
  styleUrls: ['./data.preparation.component.css']
})
export class DataPreparationComponent implements OnInit {
  selectedTable: string;
  title = 'app';
  events = [];
  @ViewChild('datapreparationstepper') private myStepper: MatStepper;
  dataConnectionForm: FormGroup;

  public CONNECTION_TYPE = {
    FTP: 'ftp',
    DATABASE: 'database'
  };
  ngOnInit(): void {
    this.subscribePaymentTypeChanges();
  }

  saveDataPreparation() {
    this.http.get('assets/data/tableList.json')
      .subscribe(tData => {
        // Calling the DT trigger to manually render the table
        const dialogRef = this.dialog.open(TableSelectionComponent, {
          width: 'auto',
          maxWidth: '20vw',
          data: tData.json()
        });
        const sub = dialogRef.componentInstance.onAdd.subscribe((data) => {
          this.selectedTable = data;
          this.myStepper.next();
          this._router.navigate([this.URL, { outlets: { 'rdata': ['reviewdata'] } }]);
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
    };
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
    };
    return model;
  }
  // tslint:disable-next-line:member-ordering
  _url = '';

  get URL() {
    if (this._url === '') {
      this._url = this._router.url;
    }
    return this._url;
  }

  constructor(private _fb: FormBuilder, private http: Http, private _commService: DPSharedService,
    public dialog: MatDialog, private titleService: Title, private _router: Router, private route: ActivatedRoute) {
    this.dataConnectionForm = _fb.group({
      connectionType: this._fb.control(this.CONNECTION_TYPE.FTP, Validators.required),
      ftp: this._fb.group(this.initFTPConnection()),
      database: this._fb.group(this.initDatabaseConnection())
    });
    this.setTitle('Data Preparation');
    _commService.changeEmitted$.subscribe((text) => {
      this.myStepper.next();
      if (text === 'cdata') {
        this._router.navigate([this.URL, { outlets: { 'cdata': ['cleandata'] } }]);
      } else {
        this._router.navigate([this.URL, { outlets: { 'pdata': ['prepareddata'] } }]);
      }
    });
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }


  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = '';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }


  onNotify(tag: string): void {
    alert('test');
  }

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
  const emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  if (control.value && !emailRegexp.test(control.value)) {
    return { invalidEmail: true };
  }
}

// FORM GROUP VALIDATORS
export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  return (group: FormGroup): { [key: string]: any } => {
    const password = group.controls[passwordKey];
    const confirmPassword = group.controls[confirmPasswordKey];

    if (password.value !== confirmPassword.value) {
      return {
        mismatchedPasswords: true
      };
    }
  };
}
