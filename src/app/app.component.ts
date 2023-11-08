import { Component } from '@angular/core';
import { PriceComponent } from './core/page-index/price/price.component';
import { ServicesComponent } from './core/page-index/services/services.component';
import { TestimonialsComponent } from './core/page-index/testimonials/testimonials.component';
import { IconSectionComponent } from './core/page-index/icon-section/icon-section.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { TimelineComponent } from './core/timeline/timeline.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
    IconSectionComponent,
    TestimonialsComponent,
    ServicesComponent,
    PriceComponent,
    TimelineComponent,
  ],
  host: {
    class: 'block mt-20 grid grid-cols-12 gap-x-6',
  },
})
export class AppComponent {
  title = 'angular-universal';
}
