import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

export interface LearnItem {
  id: string;
  type: 'Lesson' | 'Quiz' | 'Recommendation';
  titleKey: string;
  descriptionKey: string;
  icon: string;
  completed: boolean;
}

@Component({
  selector: 'app-lesson-list',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.scss',
})
export class LessonListComponent implements OnInit {
  learnItems: LearnItem[] = [];

  ngOnInit(): void {
    // In a real app, this data would be fetched from a service.
    this.learnItems = [
      {
        id: 'l1',
        type: 'Lesson',
        titleKey: 'learn.items.budgeting101.title',
        descriptionKey: 'learn.items.budgeting101.description',
        icon: '📚',
        completed: true,
      },
      {
        id: 'q1',
        type: 'Quiz',
        titleKey: 'learn.items.budgetingQuiz.title',
        descriptionKey: 'learn.items.budgetingQuiz.description',
        icon: '❓',
        completed: false,
      },
      {
        id: 'l2',
        type: 'Lesson',
        titleKey: 'learn.items.understandingDebt.title',
        descriptionKey: 'learn.items.understandingDebt.description',
        icon: '📚',
        completed: false,
      },
      {
        id: 'r1',
        type: 'Recommendation',
        titleKey: 'learn.items.savingsChallenge.title',
        descriptionKey: 'learn.items.savingsChallenge.description',
        icon: '💡',
        completed: false,
      },
    ];
  }
}
