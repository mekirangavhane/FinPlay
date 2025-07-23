import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; // Import for translations
import { CommonModule } from '@angular/common'; // Import for ngIf/ngFor

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, CommonModule], // Add modules to imports
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  // This ensures the copyright year is always up-to-date.
  currentYear: number = new Date().getFullYear();
}
