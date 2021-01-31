import { Component, OnInit } from '@angular/core';
import { FakeparticipantService } from 'src/app/services/fakeparticipant.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private fakeparticipantService: FakeparticipantService) { }

  ngOnInit(): void {
  }

  addParticipant(participant: any) {
    alert(JSON.stringify(participant))
    this.fakeparticipantService.add(participant);
  }

}
