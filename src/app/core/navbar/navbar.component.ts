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
      'flex flex-wrap relative justify-center items-center  w-full bg-white text-sm  dark:bg-gray-800 dark:border-gray-700',
  },
})
export class NavbarComponent {}
