import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { ChatService } from './services/chat.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'fire-chat';

  constructor(public _cs:ChatService) {
    
  }
  
}
