import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '.price',
  standalone: true,
  imports: [],
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceComponent {}
