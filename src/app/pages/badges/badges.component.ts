import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

// Define a clear structure for a single badge
export interface Badge {
  icon: string;
  name: string;
  description: string;
  earned: boolean;
}

// Define the data structure for the entire page
export interface BadgesPageData {
  level: number;
  xp: number;
  xpMax: number;
  badges: Badge[];
}

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.scss'
})
export class BadgesComponent implements OnInit {

  pageData!: BadgesPageData;

  ngOnInit(): void {
    // In a real app, this data would come from a user service
    this.pageData = {
      level: 2,
      xp: 65,
      xpMax: 100,
      badges: [
        { icon: '💡', name: 'First Tip', description: 'Saved your first financial tip.', earned: true },
        { icon: '💰', name: 'Saver', description: 'Tracked your savings for 3 days.', earned: true },
        { icon: '🚀', name: 'Quick Start', description: 'Completed onboarding.', earned: true },
        { icon: '📈', name: 'Investor', description: 'Learned about mutual funds.', earned: false },
        { icon: '🛡️', name: 'Scam Shield', description: 'Finished the scam awareness module.', earned: false },
        { icon: '🗓️', name: 'Weekly Streak', description: 'Maintained a 7-day streak.', earned: false },
      ]
    };
  }

  // Helper methods to separate earned from unearned badges for the template
  get earnedBadges(): Badge[] {
    return this.pageData?.badges.filter(b => b.earned) || [];
  }

  get unearnedBadges(): Badge[] {
    return this.pageData?.badges.filter(b => !b.earned) || [];
  }
}
