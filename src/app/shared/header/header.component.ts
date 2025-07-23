import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorDirective } from '../directives/language-selector.directive'; // 1. Import the directive

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule,
    LanguageSelectorDirective // 2. Add it to imports
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // All the previous logic (currentLang, onLanguageChange, constructor) is now gone!
}
