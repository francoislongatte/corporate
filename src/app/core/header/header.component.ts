import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '[header]',
  standalone: true,
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {},
})
export class HeaderComponent {}
