import { Component, OnInit } from '@angular/core';
import { FakeparticipantService } from 'src/app/services/fakeparticipant.service';
import { Participant } from "src/app/admin/participant";

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  participants: Participant[] | undefined;
  participant: Participant | undefined;
  constructor(private participantService: FakeparticipantService) { }
  ngOnInit(): void {
    this.participants = this.participantService.get();
  }

  onDelete(id: number) {
    this.participant = this.participants?.find((element) => element.id == id)
    this.participantService.delete(this.participant);
  }
}
