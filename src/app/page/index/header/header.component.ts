import { NgFor } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
	selector: '[header]',
	imports: [NgFor],
	standalone: true,
	templateUrl: './header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'pt-8 lg:pt-16'
	}
})
export class HeaderComponent {}
