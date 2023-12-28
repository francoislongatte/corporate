import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
@Component({
	selector: 'card',
	templateUrl: './card.component.html',
	standalone: true,
	imports: [NgOptimizedImage],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'h-card rounded-2xl  overflow-hidden'
	}
})
export class CardComponent {
	@Input() src!: string
	@Input() count!: string
	@Input() width!: string
	@Input() height!: string
	@Input() alt!: string
}
