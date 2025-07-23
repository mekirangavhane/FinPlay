import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [RouterModule], // Standalone imports
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'] // <-- Fix here
})
export class ChatComponent {

}
