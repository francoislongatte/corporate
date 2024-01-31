import { NgFor, NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ScriptStoreService } from 'src/app/core/service/scriptStore.service'
import { CardComponent } from './card/card.component'

@Component({
	selector: '[carousel]',
	standalone: true,
	styleUrl: 'carousel.component.css',
	imports: [NgFor, CardComponent, NgOptimizedImage],
	providers: [],
	templateUrl: './carousel.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent {
	links = [
		'./assets/img/carousel/optim/01.webp',
		'./assets/img/carousel/optim/02.webp',
		'./assets/img/carousel/optim/03.webp',
		'./assets/img/carousel/optim/01.webp'
	]
}
