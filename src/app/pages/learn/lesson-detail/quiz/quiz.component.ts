import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define the data structures for the quiz
export interface QuizOption {
  text: string;
  correct: boolean;
}

export interface QuizQuestion {
  questionText: string;
  options: QuizOption[];
  explanation: string;
}

export interface Quiz {
  questions: QuizQuestion[];
}

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {
  @Input() quizData!: Quiz;

  currentQuestionIndex = 0;
  selectedOptionIndex: number | null = null;
  isAnswered = false;
  isQuizFinished = false;
  score = 0;

  ngOnInit(): void {
    // This can be used to reset state if the component is reused
  }

  get currentQuestion(): QuizQuestion {
    return this.quizData.questions[this.currentQuestionIndex];
  }

  selectOption(index: number): void {
    if (!this.isAnswered) {
      this.selectedOptionIndex = index;
    }
  }

  submitAnswer(): void {
    if (this.selectedOptionIndex === null) return;

    this.isAnswered = true;
    const selectedOption = this.currentQuestion.options[this.selectedOptionIndex];
    if (selectedOption.correct) {
      this.score++;
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.quizData.questions.length - 1) {
      this.currentQuestionIndex++;
      this.resetQuestionState();
    } else {
      this.isQuizFinished = true;
    }
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.isQuizFinished = false;
    this.resetQuestionState();
  }

  private resetQuestionState(): void {
    this.selectedOptionIndex = null;
    this.isAnswered = false;
  }
}
