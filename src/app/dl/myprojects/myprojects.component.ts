import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '../../_models/project';
// tslint:disable-next-line:import-blacklist
import { Subject } from 'rxjs';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';

@Component({
    templateUrl: './myprojects.component.html',
    styleUrls: ['./myprojects.component.css']
})
export class MyProjectsComponent implements OnInit {
    projectData: Project[] = [];

    @ViewChild('tblProjects')
    private tblProjects: DataTables.DataTables;

    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    constructor(private http: Http) {

    }

    ngOnInit(): void {
        this.dtOptions = {
            pageLength: 5
        };
        this.http.get('assets/data/projectData.json')
            .map(this.extractData)
            .subscribe(tData => {
                this.projectData = tData;
                this.dtTrigger.next();
                // Calling the DT trigger to manually render the table
            });
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    showProjectInfo(id: number) {

    }
}
