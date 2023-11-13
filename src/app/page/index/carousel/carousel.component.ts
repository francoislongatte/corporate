import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NgFor } from '@angular/common'
import { CardComponent } from './card/card.component'

@Component({
	selector: '[carousel]',
	standalone: true,
	imports: [NgFor, CardComponent],
	templateUrl: './carousel.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {}
