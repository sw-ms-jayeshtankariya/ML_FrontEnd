import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { Title } from "@angular/platform-browser";

@Component({
  templateUrl: './data.connection.component.html'
})
export class DataConnectionComponent implements OnInit {
  dataConnectionForm: FormGroup;
  ngOnInit(): void {
    this.subscribePaymentTypeChanges();
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  constructor(private _fb: FormBuilder, private titleService: Title) {
    this.dataConnectionForm = _fb.group({
      connectionType: this.CONNECTION_TYPE.FTP,
      ftp: this._fb.group(this.initFTPConnection()),
      database: this._fb.group(this.initDatabaseConnection())
    });
    this.setTitle("Data Connection");
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
}

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