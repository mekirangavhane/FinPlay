import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; // <-- Import TranslateModule

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [TranslateModule], // <-- Add TranslateModule here
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss' // <-- Corrected from styleUrls
})
export class AdminComponent {

}
