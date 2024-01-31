import { DOCUMENT, NgFor, isPlatformBrowser } from '@angular/common'
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core'
import { RouterLink } from '@angular/router'
import { ButtonComponent } from 'src/app/core/component/button/button.component'
import { ScriptStoreService } from 'src/app/core/service/scriptStore.service'

@Component({
	selector: '[header]',
	imports: [NgFor, ButtonComponent, RouterLink],
	providers: [],
	standalone: true,
	templateUrl: './header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'pt-8 md:pt-16'
	}
})
export class HeaderComponent {
	constructor(
		@Inject(DOCUMENT) private document: Document,
		@Inject(PLATFORM_ID) private readonly _platformId: Object,
		private script: ScriptStoreService
	) {}
	lists = [
		[
			'Unlimited requests',
			'Unlimited revisions',
			'Average 2-3 days delivery',
			'Async communication'
		],
		['No hiring process', 'Pause or cancel anytime', 'No contracts', 'No meetings']
	]

	goToPlan() {
		if (isPlatformBrowser(this._platformId)) {
			this.document.getElementById('plan')?.scrollIntoView({ behavior: 'smooth' })
		}
	}

	popup() {
		if (isPlatformBrowser(this._platformId)) {
			this.script.openCalendly()
		}
	}
}
