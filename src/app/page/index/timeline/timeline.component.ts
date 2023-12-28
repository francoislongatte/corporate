import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: '.timeline',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
	data = [
		{
			title: 'Subscribe',
			text: "Once you've subscribed you'll be invited a private Trello board where you'll get every piece of information needed to start sending requests into the queue."
		},
		{
			title: 'Receive',
			text: 'After a couple days of making your request you will have something great in your hands.'
		},
		{
			title: 'Revise',
			text: "Don't worry, if it's not perfect, we'll revise it as many times as you like until it is. All good? Move onto the next request."
		}
	]
}
