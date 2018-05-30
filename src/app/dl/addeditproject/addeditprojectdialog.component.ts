import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../_models/project';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addeditprojectdialog',
  templateUrl: './addeditprojectdialog.component.html',
  styleUrls: ['./addeditprojectdialog.component.css']
})
export class AddeditprojectdialogComponent implements OnInit {
  projectForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddeditprojectdialogComponent>,
    private _fb: FormBuilder, @Inject(MAT_DIALOG_DATA) data) {
    this.projectForm = _fb.group({
      id: _fb.control(data.id, Validators.required),
      name: _fb.control(data.name, Validators.required),
      desc: _fb.control(data.desc, Validators.required),
      createdOn: _fb.control(data.createdOn, Validators.required)
    });
  }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  saveProject() {
      this.dialogRef.close();
  }
}
