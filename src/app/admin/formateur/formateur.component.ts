import { Component, OnInit } from '@angular/core';
import { FakeformateurService } from 'src/app/services/fakeformateur.service';
import { Formateur } from "src/app/admin/formateur";

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {
  formateurs: Formateur[] | undefined;
  formateur: Formateur | undefined;
  constructor(private formateurService: FakeformateurService) { }
  ngOnInit(): void {
    this.formateurs = this.formateurService.get();
  }

  onDelete(id: number) {
    this.formateur = this.formateurs?.find((element) => element.id == id)
    this.formateurService.delete(this.formateur);
  }
}
