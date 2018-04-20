import { Component, ViewChild, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { User } from '../../_models/user';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: User[] = [];
    title = 'app';
    @ViewChild('tblReviewData')
    private tblUsers: DataTables.DataTables;
    dtOptions: DataTables.Settings = {};

    dtTrigger: Subject<any> = new Subject();

    constructor(private http: Http, private router: Router, private titleService: Title) {
        this.setTitle("User List");
    }
    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
    ngOnInit(): void {
        this.dtOptions = {
            pageLength: 5
        };
        this.http.get('assets/data/userData.json')
            .map(this.extractData)
            .subscribe(tData => {
                this.users = tData;
                // Calling the DT trigger to manually render the table
                this.dtTrigger.next();
            });
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    editUser(id: number) {
        this.router.navigateByUrl("/ml/user/" + id);
    }
}
