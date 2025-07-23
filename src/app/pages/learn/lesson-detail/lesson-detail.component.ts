import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
// 1. Import both the component and the data model for the quiz
import { QuizComponent, Quiz } from './quiz/quiz.component';

export interface LessonSection {
  id: string;
  title: string;
  type: 'video' | 'text' | 'quiz' | 'header';
  // 2. Correctly type the content as a string OR a Quiz data object
  content?: string | Quiz;
  completed: boolean;
  points: number;
  subsections?: LessonSection[];
  isExpanded?: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  sections: LessonSection[];
}

@Component({
  selector: 'app-lesson-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, QuizComponent],
  templateUrl: './lesson-detail.component.html',
  styleUrl: './lesson-detail.component.scss',
})
export class LessonDetailComponent implements OnInit {
  lesson: Lesson | null = null;
  activeSection: LessonSection | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const lessonId = this.route.snapshot.paramMap.get('id');
    this.lesson = this.getMockLesson(lessonId!);

    if (this.lesson) {
      this.activeSection = this.findFirstSelectableSection(this.lesson.sections);
    }
  }

  // NEW: Add this type guard function
  /**
   * Type guard to check if the lesson content is a valid Quiz object.
   * @param content The content to check.
   * @returns True if the content is a Quiz, otherwise false.
   */
  public isQuiz(content: any): content is Quiz {
    // A robust check to see if the object has the shape of a Quiz
    return content && typeof content === 'object' && 'questions' in content;
  }

  selectSection(section: LessonSection): void {
    if (section.type !== 'header') {
      this.activeSection = section;
    }
  }

  toggleSection(section: LessonSection): void {
    if (section.type === 'header') {
      section.isExpanded = !section.isExpanded;
    }
  }

  get lessonProgress(): number {
    if (!this.lesson) return 0;
    const allSections = this.flattenSections(this.lesson.sections);
    if (allSections.length === 0) return 0;
    const completedCount = allSections.filter((s) => s.completed).length;
    return (completedCount / allSections.length) * 100;
  }

  get totalXpEarned(): number {
    if (!this.lesson) return 0;
    return this.flattenSections(this.lesson.sections)
      .filter((s) => s.completed)
      .reduce((sum, section) => sum + section.points, 0);
  }

  getSectionTotalXp(section: LessonSection): number {
    if (!section.subsections) {
      return 0;
    }
    return this.flattenSections(section.subsections).reduce(
      (sum, sub) => sum + sub.points,
      0
    );
  }

  private findFirstSelectableSection(
    sections: LessonSection[]
  ): LessonSection | null {
    for (const section of sections) {
      if (section.type !== 'header') {
        return section;
      }
      if (section.subsections) {
        const found = this.findFirstSelectableSection(section.subsections);
        if (found) return found;
      }
    }
    return null;
  }

  private flattenSections(sections: LessonSection[]): LessonSection[] {
    let flatList: LessonSection[] = [];
    for (const section of sections) {
      if (section.type !== 'header') {
        flatList.push(section);
      }
      if (section.subsections) {
        flatList = flatList.concat(this.flattenSections(section.subsections));
      }
    }
    return flatList;
  }

  // --- MOCK DATA with Rich HTML Content ---
  private getMockLesson(id: string): Lesson {
    return {
      id: id,
      title: 'Budgeting 101: Your Path to Financial Freedom',
      description:
        'Learn the fundamentals of creating and sticking to a budget that works for you.',
      sections: [
        {
          id: 'cat1',
          title: 'Getting Started',
          type: 'header',
          completed: false,
          points: 0,
          isExpanded: true,
          subsections: [
            {
              id: 's1',
              title: 'Introduction to Budgeting',
              type: 'video',
              content: 'placeholder_video_url',
              completed: true,
              points: 10,
            },
            {
              id: 's2',
              title: 'Why Budgeting Matters',
              type: 'text',
              completed: true,
              points: 5,
              content: `
                <p>Budgeting is the cornerstone of financial health. It provides a clear picture of your income and expenses, empowering you to make informed financial decisions.</p>
                <p>Without a budget, it's easy to overspend and difficult to save for your future goals, whether that's a down payment on a house, a vacation, or a comfortable retirement.</p>
              `,
            },
          ],
        },
        {
          id: 'cat2',
          title: 'Core Concepts',
          type: 'header',
          completed: false,
          points: 0,
          isExpanded: false,
          subsections: [
            {
              id: 's3',
              title: 'The 50/30/20 Rule',
              type: 'text',
              completed: true,
              points: 15,
              content: `
                <h2>What is the 50/30/20 Rule?</h2>
                <p>The 50/30/20 rule is a simple, effective budgeting guideline that allocates your after-tax income into three categories: <strong>50% for needs, 30% for wants, and 20% for savings and debt repayment.</strong></p>
                <h3>Breaking it Down:</h3>
                <ul>
                  <li><strong>Needs (50%):</strong> These are your essential expenses, such as housing, utilities, groceries, and transportation.</li>
                  <li><strong>Wants (30%):</strong> This category covers non-essential lifestyle choices like dining out, entertainment, and hobbies.</li>
                  <li><strong>Savings (20%):</strong> The final portion should go towards building your savings, investing, or paying off high-interest debt.</li>
                </ul>
                <p>By following this framework, you can ensure your essential costs are covered while still enjoying life and building a secure financial future.</p>
              `,
            },
            {
              id: 's4',
              title: 'Tracking Your Expenses',
              type: 'text',
              content: 'To know where your money is going, you must track it...',
              completed: false,
              points: 10,
            },
            {
              id: 's5',
              title: 'Choosing a Budgeting Tool',
              type: 'video',
              content: 'placeholder_video_url',
              completed: false,
              points: 10,
            },
          ],
        },
        {
          id: 'cat3',
          title: 'Final Steps',
          type: 'header',
          completed: false,
          points: 0,
          isExpanded: false,
          subsections: [
            {
              id: 's6',
              title: 'Knowledge Check',
              type: 'quiz',
              completed: false,
              points: 25,
              content: {
                questions: [
                  {
                    questionText:
                      'According to the 50/30/20 rule, what percentage of your income should go towards "Wants"?',
                    options: [
                      { text: '50%', correct: false },
                      { text: '30%', correct: true },
                      { text: '20%', correct: false },
                      { text: '10%', correct: false },
                    ],
                    explanation:
                      'The rule suggests 30% for wants, which covers non-essential lifestyle choices like dining out and hobbies.',
                  },
                  {
                    questionText:
                      'Which of the following is considered a "Need" in the 50/30/20 budget?',
                    options: [
                      { text: 'A new video game', correct: false },
                      { text: 'Dinner at a restaurant', correct: false },
                      { text: 'Monthly rent payment', correct: true },
                      { text: 'A vacation', correct: false },
                    ],
                    explanation:
                      'Needs are essential expenses required for living, such as housing, utilities, and groceries.',
                  },
                ],
              },
            },
          ],
        },
      ],
    };
  }
}
