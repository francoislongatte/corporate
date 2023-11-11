import { Component } from '@angular/core';
import { PriceComponent } from './core/page-index/index/price/price.component';
import { ServicesComponent } from './core/page-index/index/services/services.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { TimelineComponent } from './core/page-index/index/timeline/timeline.component';
import { CapabilitiesComponent } from './core/page-index/index/capabilities/capabilities.component';
import { IconSectionComponent } from './core/page-index/index/icon-section/icon-section.component';
import { FaqComponent } from './core/page-index/index/faq/faq.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
    IconSectionComponent,
    ServicesComponent,
    PriceComponent,
    TimelineComponent,
    CapabilitiesComponent,
    FaqComponent,
  ],
  host: {
    class: '',
  },
})
export class AppComponent {
  title = 'angular-universal';
}
