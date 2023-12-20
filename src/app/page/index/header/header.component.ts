import { NgFor } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ButtonComponent } from 'src/app/core/component/button/button.component'

@Component({
	selector: '[header]',
	imports: [NgFor, ButtonComponent],
	standalone: true,
	templateUrl: './header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'pt-8 lg:pt-16'
	}
})
export class HeaderComponent {
	lists = [
		[
			'Unlimited requests',
			'Unlimited revisions',
			'Average 2-3 days delivery',
			'Async communication'
		],
		['No hiring process', 'Pause or cancel anytime', 'No contracts', 'No meetings']
	]
}
