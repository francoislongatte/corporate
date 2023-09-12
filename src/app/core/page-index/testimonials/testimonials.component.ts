import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '.testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {}
