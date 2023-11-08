import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '.timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  host: {
    class: 'pt-16',
  },
})
export class TimelineComponent {}
