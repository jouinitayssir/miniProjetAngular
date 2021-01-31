import { Component, OnInit } from '@angular/core';
import { FakeformateurService } from 'src/app/services/fakeformateur.service';
import { FakesessionitemService } from '../fakesessionitem.service';
import { Formateur } from "src/app/admin/formateur";
import { Session } from "src/app/admin/session";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formateurs: Formateur[];
  sessions: Session[]; 

  constructor(
    private fakeformateurService: FakeformateurService,
    private fakesessionitemService: FakesessionitemService
  ) {
    this.formateurs = []
    this.sessions = []
  }
  ngOnInit(): void {
    this.formateurs = this.fakeformateurService.get()
    this.sessions = this.fakesessionitemService.get()

  }

}
