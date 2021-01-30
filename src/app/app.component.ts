import { Component } from '@angular/core';
import { SessionItemComponent } from './session-item/session-item.component';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  // title = 'GKAngular';
  // //session_name='Formation web';
  // nbpart:number=0;
  firstSession={
    id:1,
    name:'Formation web',
    track: 'Mean Stack',
    date:new Date('2018-06-13'),
    local:'Lyon',
    participant:0
  };
  nbrParticipantsChange(event:any){
    console.log(event);
    this.firstSession.participant=event.value;
  }
}
