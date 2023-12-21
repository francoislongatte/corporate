import { Component, Inject, PLATFORM_ID } from '@angular/core'
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
import { ReactiveFormsModule } from '@angular/forms'
import { FormControl } from '@angular/forms'
import { CommonModule, isPlatformBrowser } from '@angular/common'
import { ButtonComponent } from './core/component/button/button.component'
import { Meta, Title } from '@angular/platform-browser'

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
		AfterComponent,
		ReactiveFormsModule,
		CommonModule,
		ButtonComponent
	],
	providers: [ScriptStoreService],
	host: {
		class: 'antialiased block bg-[#FFFEFC] lg:mt-20 mt-16 lg:px-6 px-4'
	}
})
export class AppComponent {
	email = new FormControl('')

	constructor(
		private metaTagService: Meta,
		private titleService: Title,
		private script: ScriptStoreService,
		@Inject(PLATFORM_ID) private readonly _platformId: Object
	) {
		this.titleService.setTitle('Cobuildr')
		this.metaTagService.addTags([
			{ name: 'description', content: 'Design and development as a service' },
			{ name: 'keywords', content: 'Digital partner, subscription, agency' },
			{ name: 'robots', content: 'index, follow' },
			{ name: 'author', content: 'Iacuzzo Giovanni & Longatte Francois' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'date', content: '2023-12-21', scheme: 'YYYY-MM-DD' },
			{ charset: 'UTF-8' }
		])
	}

	popup() {
		if (isPlatformBrowser(this._platformId)) {
			this.script.openCalendly()
		}
	}
}
