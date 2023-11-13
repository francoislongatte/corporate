import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { heroPlusSolid } from '@ng-icons/heroicons/solid'
import { provideIcons, NgIconComponent } from '@ng-icons/core'

@Component({
	selector: '.capabilities',
	standalone: true,
	imports: [CommonModule, NgIconComponent],
	templateUrl: './capabilities.component.html',
	styleUrls: ['./capabilities.component.css'],
	viewProviders: [provideIcons({ heroPlusSolid })]
})
export class CapabilitiesComponent {
	data = [
		{
			title: 'UI/UX Design',
			text: "This is the third item's accordion body.  It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. "
		},
		{
			title: 'Web & Mobile',
			text: "This is the third item's accordion body.  It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. "
		},
		{
			title: 'Development',
			text: "This is the third item's accordion body.  It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. "
		},
		{
			title: 'Branding',
			text: "This is the third item's accordion body.  It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. "
		},
		{
			title: 'Design System',
			text: "This is the third item's accordion body.  It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. "
		},
		{
			title: 'Landing Pages',
			text: "This is the third item's accordion body.  It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. "
		}
	]
}
