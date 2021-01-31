import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeformateurService } from 'src/app/services/fakeformateur.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private sub: any;
  id: any;
  formateur: any;
  
  constructor(private route: ActivatedRoute, private formateurService: FakeformateurService) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.formateur = this.formateurService.getById(this.id);
  }
  editFormateur(formateur: any) {
    console.log(formateur);
  }

}
