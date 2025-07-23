import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule], // Standalone imports
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'] // <-- Fix here
})
export class AdminComponent {

}