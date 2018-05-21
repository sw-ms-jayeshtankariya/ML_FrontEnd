import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    template: `
    <div mat-dialog-title>
    CONFIRM
    <i (click)="onCancelClick()" class="fa fa-times-circle" aria-hidden="true" style="cursor:pointer; float:right; margin-top: 5px; width: 20px"></i>
</div>

<div mat-dialog-content>
    {{data}}      
</div>
<div mat-dialog-actions>
  <button (click)="onYesClick()" class="btn btn-outline-success" cdkFocusInitial>Yes</button>
  <button (click)="onCancelClick()" class="btn btn-outline-danger">No</button>
</div>
    `
})
export class ConfirmationModalComponent {
    constructor(private router: Router, public dialogRef: MatDialogRef<ConfirmationModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {

    }
    onYes = new EventEmitter();

    onCancelClick(): void {
        this.dialogRef.close();
    }

    onYesClick() {
        this.dialogRef.close();
        this.onYes.emit('');
    }
}
