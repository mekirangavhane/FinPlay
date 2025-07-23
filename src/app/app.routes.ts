import { Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChatComponent } from './pages/chat/chat.component';
import { StressComponent } from './pages/stress/stress.component';
import { BadgesComponent } from './pages/badges/badges.component';
import { LearnComponent } from './pages/learn/learn.component';
import { SavingsComponent } from './pages/savings/savings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'stress', component: StressComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'savings', component: SavingsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '' }
];