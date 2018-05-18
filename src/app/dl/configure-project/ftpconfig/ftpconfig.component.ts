import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ftpconfig',
  templateUrl: './ftpconfig.component.html',
  styleUrls: ['./ftpconfig.component.css']
})
export class FtpconfigComponent implements OnInit {
  dataConnection: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.dataConnection = _fb.group({
      ftp: _fb.group(this.initFTPConnection())
    });
  }

  ngOnInit() {

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

}
