import { Directive, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appLanguageSelector]',
  standalone: true
})
export class LanguageSelectorDirective implements OnInit, OnDestroy {
  private langChangeSub!: Subscription;

  constructor(
    private el: ElementRef<HTMLSelectElement>, // The <select> element this directive is attached to
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    // 1. Set the initial value of the dropdown when it's created
    this.el.nativeElement.value = this.translate.currentLang || this.translate.defaultLang;

    // 2. Subscribe to global language changes to keep this dropdown in sync
    this.langChangeSub = this.translate.onLangChange.subscribe(event => {
      this.el.nativeElement.value = event.lang;
    });
  }

  // 3. Listen for the 'change' event on the <select> element
  @HostListener('change', ['$event.target.value'])
  onLanguageChange(lang: string): void {
    // When the user selects a new language, tell the service to use it.
    this.translate.use(lang);
  }

  ngOnDestroy(): void {
    // 4. Clean up the subscription to prevent memory leaks
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }
}
