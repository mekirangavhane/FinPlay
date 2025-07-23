import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

// Define a structure for our content modules
interface StressModule {
  id: 'scam' | 'overspending' | 'emi';
  titleKey: string;
  contentKey: string;
}

@Component({
  selector: 'app-stress',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './stress.component.html',
  styleUrl: './stress.component.scss'
})
export class StressComponent {
  // Define the available modules
  modules: StressModule[] = [
    { id: 'scam', titleKey: 'stress.button.scamRecovery', contentKey: 'stress.content.scamRecovery' },
    { id: 'overspending', titleKey: 'stress.button.overspending', contentKey: 'stress.content.overspending' },
    { id: 'emi', titleKey: 'stress.button.emiRegret', contentKey: 'stress.content.emiRegret' }
  ];

  // Keep track of the currently selected module
  selectedModule: StressModule | null = null;

  /**
   * Sets the active module to display its content.
   * @param module The module that was clicked.
   */
  selectModule(module: StressModule): void {
    this.selectedModule = module;
  }
}
