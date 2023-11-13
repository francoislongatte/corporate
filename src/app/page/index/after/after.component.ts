import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: '.after',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './after.component.html',
	styleUrl: './after.component.css'
})
export class AfterComponent {
	data = [
		'One request at a time',
		'Unlimited users',
		'Average 24 to 72 hour delivery',
		'Easy credit-card payments',
		'Unlimited brands',
		'Pause or cancel anytime'
	]
}
