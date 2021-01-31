import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeparticipantService } from 'src/app/services/fakeparticipant.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private sub: any;
  id: any;
  participant: any;
  
  constructor(private route: ActivatedRoute, private participantService: FakeparticipantService) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.participant = this.participantService.getById(this.id);
  }
  editParticipant(participant: any) {
    console.log(participant);
  }

}
