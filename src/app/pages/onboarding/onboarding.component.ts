import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LanguageSelectorDirective } from '../../shared/directives/language-selector.directive'; // 1. Import directive

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, TranslateModule, LanguageSelectorDirective], // 2. Add to imports
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss'
})
export class OnboardingComponent implements OnInit, OnDestroy {
  steps = [0, 1, 2];
  current = 0;
  private langChangeSub!: Subscription;

  form = {
    age: '',
    role: '',
    goal: '',
    language: 'en', // This property is still needed for the form's data model
    confidence: ''
  };

  constructor(private router: Router, private translate: TranslateService) {
    this.form.language = this.translate.currentLang || this.translate.defaultLang;
  }

  ngOnInit(): void {
    // This component still needs to know the language for its own data model.
    // It subscribes so `form.language` is always in sync with the global state.
    this.langChangeSub = this.translate.onLangChange.subscribe(event => {
      this.form.language = event.lang;
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }

  // ... (The rest of your component logic: nextStep, prevStep, etc. remains the same)
  // The onFormLanguageChange() method has been removed.

  get stepIndicator() {
    return `Step ${this.current + 1} of ${this.steps.length}`;
  }

  prevStep() {
    if (this.current > 0) {
      this.current--;
    }
  }

  nextStep() {
    if (this.current < this.steps.length - 1) {
      this.current++;
    } else {
      console.log('Onboarding complete with data:', this.form);
      this.router.navigate(['/dashboard']);
    }
  }
}
