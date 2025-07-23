import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

// Define an interface for our dashboard data for type safety
interface DashboardSummary {
  userName: string;
  dailyGoal: number;
  xp: number;
  xpMax: number;
  level: number;
  streak: number;
  badges: string[];
  aiNudge: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  // Initialize summary data with placeholders or from a service
  summary!: DashboardSummary;

  ngOnInit(): void {
    // In a real app, you would fetch this data from a service.
    // For now, we'll use mock data.
    this.summary = {
      userName: 'Alex',
      dailyGoal: 10,
      xp: 65,
      xpMax: 100,
      level: 2,
      streak: 5,
      badges: ['💡', '💰', '🚀'], // Using emojis as simple badges
      aiNudge: 'You saved ₹12 yesterday! Try saving ₹15 today to build your streak.'
    };
  }

  // Helper to calculate XP percentage for the progress bar
  get xpPercentage(): number {
    if (!this.summary || this.summary.xpMax === 0) {
      return 0;
    }
    return (this.summary.xp / this.summary.xpMax) * 100;
  }
}
