import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss' // Corrected typo
})
export class ChatComponent {

}
