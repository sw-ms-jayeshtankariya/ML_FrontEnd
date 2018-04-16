import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User, UserRoles } from "../_models/user";
import { Http, Response } from "@angular/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SelectListItem } from "../_models/SelectListItem";
import { debug } from "util";
import { Title } from "@angular/platform-browser";
import { slideInOutAnimation } from "../_animations/slide-in-out.animations";

@Component({
    templateUrl: './user.save.component.html',
    animations: [slideInOutAnimation],
    host: { '[@slideInOutAnimation]': ''}
})
export class SaveUserComponent implements OnInit {
    private _id: number;
    userForm: FormGroup;
    user: User;
    options: SelectListItem[];
    myValue: UserRoles;
    userRoles: typeof UserRoles = UserRoles;

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    constructor(private route: ActivatedRoute, private http: Http, 
        private _fb: FormBuilder,private titleService: Title) {
        let self = this;
        this.options = [];
        var opts = Object.keys(this.userRoles);
        opts.forEach(function (item) {
            self.options.push({ key: item, value: UserRoles[item] });
        });
        this.route.params.subscribe(params => {
            this._id = params["id"];
            if (this._id > 0) {
                this.http.get('assets/data/userData.json')
                    .toPromise().then(users => {
                        self.user = users.json().filter(function (item) { return item.id == self._id })[0];
                        this.userForm = _fb.group({
                            id: _fb.control(self.user.id, Validators.required),
                            firstName: _fb.control(self.user.firstName, Validators.required),
                            lastName: _fb.control(self.user.lastName, Validators.required),
                            email: _fb.control(self.user.email, Validators.required),
                            contactNo: _fb.control(self.user.contactNo, Validators.required),
                            role: _fb.control(self.user.role, Validators.required)
                        });
                    })
            }
            else {
                alert("id does not found");
            }
        });
        this.setTitle("Add / Edit User");
    }

    parseValue(value: string) {
        this.myValue = UserRoles[value];
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    ngOnInit(): void {

    }
}