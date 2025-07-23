import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

interface SavingsData {
  goal: number;
  currentAmount: number;
}

@Component({
  selector: 'app-savings',
  standalone: true,
  imports: [RouterModule, FormsModule, TranslateModule, CommonModule],
  templateUrl: './savings.component.html',
  styleUrl: './savings.component.scss'
})
export class SavingsComponent implements OnInit {
  // The main data model for the page
  savings: SavingsData = {
    goal: 1000,
    currentAmount: 350
  };

  // A separate model for the form input
  amountToAdd: number | null = null;

  // Smart suggestions based on progress
  suggestion: string = '';

  ngOnInit(): void {
    this.updateSuggestion();
  }

  /**
   * Handles the form submission to add to savings.
   */
  addSavings(): void {
    if (this.amountToAdd && this.amountToAdd > 0) {
      this.savings.currentAmount += this.amountToAdd;
      this.amountToAdd = null; // Reset the input field
      this.updateSuggestion();
    }
  }

  /**
   * Calculates the progress percentage for the progress bar.
   */
  get progressPercentage(): number {
    if (this.savings.goal === 0) {
      return 100;
    }
    return (this.savings.currentAmount / this.savings.goal) * 100;
  }

  /**
   * Updates the smart suggestion text based on current progress.
   */
  updateSuggestion(): void {
    const percentage = this.progressPercentage;
    if (percentage < 30) {
      this.suggestion = 'A great start! Every little bit helps.';
    } else if (percentage < 75) {
      this.suggestion = 'You\'re making amazing progress. Keep it up!';
    } else if (percentage < 100) {
      this.suggestion = 'You\'re so close to your goal! Just a little more.';
    } else {
      this.suggestion = 'Congratulations! You\'ve reached your savings goal!';
    }
  }
}
