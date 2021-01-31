import { Component, OnInit } from '@angular/core';
import { FakeformateurService } from 'src/app/services/fakeformateur.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private fakeformateurService: FakeformateurService) { }

  ngOnInit(): void {
  }

  addFormateur(formateur: any) {
    this.fakeformateurService.add(formateur);
  }

}
