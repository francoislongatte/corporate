import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '[Navbar]',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
