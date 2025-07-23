import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent {

  constructor(private router: Router) {}
  steps = [0, 1, 2];
  current = 0;

  uiLanguage = 'en';
  formLanguage = 'en';

  // Form model
  form = {
    age: '',
    role: '',
    goal: '',
    language: 'en',
    confidence: ''
  };

  get stepIndicator() {
    return `Step ${this.current + 1} of ${this.steps.length}`;
  }

  prevStep() {
    if (this.current > 0) this.current--;
  }

  nextStep() {
    if (this.current < this.steps.length - 1) {
      this.current++;
    } else {
      this.router.navigate(['/dashboard']);

    }
  }

  // Sync language selectors
  onUiLanguageChange(val: string) {
    this.uiLanguage = val;
    this.formLanguage = val;
    this.form.language = val;
    document.documentElement.lang = val;
  }
  onFormLanguageChange(val: string) {
    this.formLanguage = val;
    this.uiLanguage = val;
    this.form.language = val;
    document.documentElement.lang = val;
  }
}
