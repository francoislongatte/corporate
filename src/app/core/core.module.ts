import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IconSectionComponent } from './page-index/icon-section/icon-section.component';
import { PriceComponent } from './page-index/price/price.component';
import { ServicesComponent } from './page-index/services/services.component';
import { TestimonialsComponent } from './page-index/testimonials/testimonials.component';

@NgModule({
  imports: [
    CommonModule,
    NavbarComponent,
    HeaderComponent,
    IconSectionComponent,
    TestimonialsComponent,
    ServicesComponent,
    PriceComponent,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    IconSectionComponent,
    TestimonialsComponent,
    ServicesComponent,
    PriceComponent,
  ],
})
export class CoreModule {}
