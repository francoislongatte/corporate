import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '[header]',
  imports: [NgFor],
  standalone: true,
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {},
})
export class HeaderComponent {
  text = [
    "We're your unlimited digital subscription agency.",
    'For a flat monthly fee, make unlimited requests and revisions.',
    "We'll complete them one by one within 2-3 business days on average.",
    'No freelancers, just instant digital solutions.',
    'Take a look at what we do',
  ];
}
