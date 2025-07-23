import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing.component').then(m => m.LandingComponent)
  },
  {
    path: 'onboarding',
    loadComponent: () => import('./pages/onboarding/onboarding.component').then(m => m.OnboardingComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'chat',
    loadComponent: () => import('./pages/chat/chat.component').then(m => m.ChatComponent)
  },
  {
    path: 'stress',
    loadComponent: () => import('./pages/stress/stress.component').then(m => m.StressComponent)
  },
  {
    path: 'badges',
    loadComponent: () => import('./pages/badges/badges.component').then(m => m.BadgesComponent)
  },
  {
    path: 'learn',
    // The parent component/shell is also lazy-loaded
    loadComponent: () => import('./pages/learn/learn.component').then(m => m.LearnComponent),
    children: [
      {
        path: '', // Renders when the URL is '/learn'
        // The child list component is lazy-loaded
        loadComponent: () => import('./pages/learn/lesson-list/lesson-list.component').then(m => m.LessonListComponent),
      },
      {
        path: ':id', // Renders when the URL is '/learn/some-id'
        // The child detail component is lazy-loaded
        loadComponent: () => import('./pages/learn/lesson-detail/lesson-detail.component').then(m => m.LessonDetailComponent),
      },
    ],
  },
  {
    path: 'savings',
    loadComponent: () => import('./pages/savings/savings.component').then(m => m.SavingsComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent)
  },
  // Wildcard route should always be last
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
