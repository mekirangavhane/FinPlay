import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule], // Standalone imports
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'] // <-- Fix here
})
export class DashboardComponent {

}
