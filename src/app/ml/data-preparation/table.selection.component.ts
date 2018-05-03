import { Component, Inject, ViewChild,EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Title } from "@angular/platform-browser";
import { Http } from "@angular/http";
import { Subject } from "rxjs";
import { SSnackBar } from "../../_matProviders/mat.snack";
@Component({
    selector: 'tableselection',
    templateUrl: 'table.selection.component.html',
})
export class TableSelectionComponent {
    selectedTable: string;
    dtTrigger: Subject<any> = new Subject();
    onAdd = new EventEmitter();
    dtOptions: DataTables.Settings = {};
    @ViewChild('tbltblList')
    private tbltblList: DataTables.DataTables;

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    constructor(
        public dialogRef: MatDialogRef<TableSelectionComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, private titleService: Title,
        private http: Http, private snack:SSnackBar) {
        this.setTitle("Select Table")
        this.selectedTable = "";
        this.dtOptions = {
            pageLength: 5,
            autoWidth:false
          };
    }

    onCancelClick():void{
        this.dialogRef.close();
    }

    onOKClick(): void {
        if (this.selectedTable == "") {
            this.openSnackBar("Please select atleast one table.", "")
        }
        else {
            this.onAdd.emit(this.selectedTable);
            this.dialogRef.close();
        }
    }

    openSnackBar(message: string, action: string) {
        this.snack.openInTopRightCorner(message, action, {
            duration: 2000
        });
    }
}