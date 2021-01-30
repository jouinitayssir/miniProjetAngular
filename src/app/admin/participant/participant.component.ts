import { Component, OnInit } from '@angular/core';
import { FakeparticipantserviceService } from '../../services/fakeparticipantservice.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  constructor(private participantService: FakeparticipantserviceService) { }

  ngOnInit(): void {
  }
  addParticipant(participantForm: any) {
    console.log(participantForm);
    this.participantService.add(participantForm);
    }
}
