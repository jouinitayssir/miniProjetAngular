import { Injectable } from '@angular/core';
import { PARTICIPANTITEMS } from '../admin/participants';
import { Participant } from "../admin/participant"
@Injectable({
  providedIn: 'root'
})
export class FakeparticipantService {

  constructor() { }
  get() { return PARTICIPANTITEMS; }
  add(participant: Participant) {
    participant.id = PARTICIPANTITEMS.length + 1;
    PARTICIPANTITEMS.push(participant);
  }

  delete(participant: Participant | undefined) {
    if (participant == undefined) return;
    let index;
    index = PARTICIPANTITEMS.indexOf(participant);
    if (PARTICIPANTITEMS.indexOf(participant) >= 0) {
      PARTICIPANTITEMS.splice(index, 1);
    }
  }
  getById(id: number) {
    return PARTICIPANTITEMS[id - 1];
  }
}
