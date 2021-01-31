import { Component, OnInit } from '@angular/core';
import { Session } from '../session';
import { FakesessionitemService } from '../fakesessionitem.service';
import { ActivatedRoute } from '@angular/router';


import { Observable } from 'rxjs';
@Component({
    selector: 'app-session-edit-form',
    templateUrl: './session-edit-form.component.html',
    styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
    id: any;
    private sub: any;
    session: any;
    tracks = ['MEAN', 'Angular',
        'NodeJS', 'Android', 'Swift', 'Xamarin'];
    constructor(private route: ActivatedRoute, private sessionItemService: FakesessionitemService) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        console.log('Session ID ' + this.id.toString());
        this.session = this.sessionItemService.getSession(this.id);
    }
    editSession(sessionItem: any) {
        console.log(sessionItem);
    }
}