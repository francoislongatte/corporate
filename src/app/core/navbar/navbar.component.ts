import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '[Navbar]',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    id: 'work',
    class:
      'top-0 flex flex-wrap relative justify-center items-center max-w-4xl mx-auto px-4 z-50 w-full bg-white text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700',
  },
})
export class NavbarComponent {}
