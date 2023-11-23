import { Component } from '@angular/core'
import { NavbarComponent } from './core/navbar/navbar.component'
import { CapabilitiesComponent } from './page/index/capabilities/capabilities.component'
import { HeaderComponent } from './page/index/header/header.component'
import { PriceComponent } from './page/index/price/price.component'
import { ServicesComponent } from './page/index/services/services.component'
import { TimelineComponent } from './page/index/timeline/timeline.component'
import { FaqComponent } from './page/index/faq/faq.component'
import { CarouselComponent } from './page/index/carousel/carousel.component'
import { AfterComponent } from './page/index/after/after.component'
import { ScriptStoreService } from './core/service/scriptStore.service'

@Component({
	selector: 'main',
	templateUrl: './app.component.html',
	standalone: true,
	imports: [
		NavbarComponent,
		HeaderComponent,
		CarouselComponent,
		ServicesComponent,
		PriceComponent,
		TimelineComponent,
		CapabilitiesComponent,
		FaqComponent,
		AfterComponent
	],
	providers: [ScriptStoreService],
	host: {
		class: 'antialiased block bg-[#FFFEFC] lg:mt-20 mt-8 lg:px-6 px-4'
	}
})
export class AppComponent {
	constructor(private script: ScriptStoreService) {}
	popup() {
		this.script.openCalendly()
		return false
	}
}
