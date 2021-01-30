import { Component, OnInit } from '@angular/core';
import { FakesessionitemService } from '../admin/fakesessionitem.service';
@Component({
 selector: 'app-session-item-list',
 templateUrl: './session-item-list.component.html',
 styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {
 sessionItems: any ;
 constructor(private sessionItemService: FakesessionitemService) { }
 ngOnInit() {
     this.sessionItems=this.sessionItemService.get();
 }
}

