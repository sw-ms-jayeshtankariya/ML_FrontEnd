import { MatSnackBar, MatSnackBarConfig } from "@angular/material";
import { Component, Injectable } from "@angular/core";
@Injectable()
export class SSnackBar {
    constructor(public snackBar: MatSnackBar) {

    }

    openInTopRightCorner(message: string, action: string, config: MatSnackBarConfig) {
        config.verticalPosition = 'top';
        config.horizontalPosition = 'end';
        this.snackBar.open(message, action, config);
    }
}