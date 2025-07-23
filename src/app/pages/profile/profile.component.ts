import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

// A simple interface to define the shape of our profile data
interface UserProfile {
  name: string;
  age: number | null;
  goal: string;
  voiceTone: 'friendly' | 'elder' | 'youth';
  accessibility: 'default' | 'large-text' | 'high-contrast';
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, FormsModule, TranslateModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  // Initialize the form model with default values
  profile: UserProfile = {
    name: 'Alex Doe', // Example data
    age: 30,
    goal: 'Save for a vacation',
    voiceTone: 'friendly',
    accessibility: 'default'
  };

  saveProfile() {
    // In a real app, you would save this data to a service or backend.
    console.log('Saving profile:', this.profile);
    // Add logic here, like showing a success message.
  }
}
