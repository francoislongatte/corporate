import { Component } from '@angular/core';
import { PriceComponent } from './core/page-index/price/price.component';
import { ServicesComponent } from './core/page-index/services/services.component';
import { TestimonialsComponent } from './core/page-index/testimonials/testimonials.component';
import { IconSectionComponent } from './core/page-index/icon-section/icon-section.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    host: {
        'id': 'root'
    },
    standalone: true,
    imports: [NavbarComponent, HeaderComponent, IconSectionComponent, TestimonialsComponent, ServicesComponent, PriceComponent]
})
export class AppComponent {
  title = 'angular-universal';
}
