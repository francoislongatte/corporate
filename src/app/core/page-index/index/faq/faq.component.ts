import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { heroPlusSolid } from '@ng-icons/heroicons/solid';
import { provideIcons, NgIconComponent } from '@ng-icons/core';

@Component({
  selector: '.faq',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  viewProviders: [provideIcons({ heroPlusSolid })],
})
export class FaqComponent {}
