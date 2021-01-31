import { Injectable } from '@angular/core';
import { FORMATEURITEMS } from '../admin/formateurs';
import { Formateur } from "../admin/formateur"
@Injectable({
  providedIn: 'root'
})
export class FakeformateurService {

  constructor() { }
  get() { 
    return FORMATEURITEMS; 
  }
  add(formateur: Formateur) {
    formateur.id = FORMATEURITEMS.length + 1;
    FORMATEURITEMS.push(formateur);
  }
  delete(formateur: Formateur | undefined) {
    if(formateur == undefined) return;
    var index = FORMATEURITEMS.indexOf(formateur);
    if (FORMATEURITEMS.indexOf(formateur) >= 0) {
      FORMATEURITEMS.splice(index, 1);
    }
  }
  getById(id: number) {
    return FORMATEURITEMS[id - 1];
  }
}
