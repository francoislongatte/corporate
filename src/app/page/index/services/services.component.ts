import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '.services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  host: {
    class: 'max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {}
