import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { heroPlusSolid } from '@ng-icons/heroicons/solid';
import { provideIcons, NgIconComponent } from '@ng-icons/core';

@Component({
  selector: '.capabilities',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.css'],
  host: {
    class: 'pt-16',
  },
  viewProviders: [provideIcons({ heroPlusSolid })],
})
export class CapabilitiesComponent {}
