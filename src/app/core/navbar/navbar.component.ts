import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '[Navbar]',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'flex flex-wrap relative justify-center items-center w-full mx-auto px-4 z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700',
  },
})
export class NavbarComponent {
  navigations = [
    {
      label: 'work',
    },
    {
      label: 'services',
    },
    {
      label: 'process',
    },
    {
      label: 'pricing',
    },
    {
      label: 'contact',
    },
  ];
}
