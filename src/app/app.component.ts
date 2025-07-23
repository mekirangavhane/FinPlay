import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateService } from '@ngx-translate/core'; // 1. Import the service

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'finplay';

  // 2. Inject the service in the constructor
  constructor(private translate: TranslateService) {
    // 3. Set the default language for the application
    translate.setDefaultLang('en');

    // 4. Optionally, use the browser's language or fallback to 'en'
    const browserLang = translate.getBrowserLang() ?? 'en';
    translate.use(browserLang.match(/en|hi|mr/) ? browserLang : 'en');
  }
}
