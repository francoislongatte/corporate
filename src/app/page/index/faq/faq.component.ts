import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { heroPlusSolid, heroMinusSolid } from '@ng-icons/heroicons/solid'
import { provideIcons, NgIconComponent } from '@ng-icons/core'

@Component({
	selector: '.faq',
	standalone: true,
	imports: [CommonModule, NgIconComponent],
	templateUrl: './faq.component.html',
	styleUrls: ['./faq.component.css'],
	viewProviders: [provideIcons({ heroPlusSolid, heroMinusSolid })]
})
export class FaqComponent {
	data = [
		{
			title: 'Why Cobuildr instead of hiring?',
			text: 'Lorem ipsum dolor sit amet consectetur. Risus aliquet senectus commodo consequat libero. Laoreet auctor nulla et venenatis duis cras quis. Velit nibh amet sit dignissim elementum. Laoreet tristique nulla dui diam. Augue montes viverra eget egestas in. <br/> <br/> Potenti ipsum lacus aenean euismod nibh phasellus et tortor quam. Cursus ultrices malesuada in id consequat duis. Porta dui mauris curabitur aliquet nulla. Sit ac fames aliquam enim duis molestie purus. Vel enim odio nisl viverra nisl sagittis vitae. Erat lobortis nisl amet nunc morbi semper iaculis fames.'
		},
		{
			title: 'How quickly will I receive my work?',
			text: 'Lorem ipsum dolor sit amet consectetur. Risus aliquet senectus commodo consequat libero. Laoreet auctor nulla et venenatis duis cras quis. Velit nibh amet sit dignissim elementum. Laoreet tristique nulla dui diam. Augue montes viverra eget egestas in. Potenti ipsum lacus aenean euismod nibh phasellus et tortor quam. Cursus ultrices malesuada in id consequat duis. Porta dui mauris curabitur aliquet nulla. Sit ac fames aliquam enim duis molestie purus. Vel enim odio nisl viverra nisl sagittis vitae. Erat lobortis nisl amet nunc morbi semper iaculis fames.'
		},
		{
			title: 'Why no calls or meetings?',
			text: 'Lorem ipsum dolor sit amet consectetur. Risus aliquet senectus commodo consequat libero. Laoreet auctor nulla et venenatis duis cras quis. Velit nibh amet sit dignissim elementum. Laoreet tristique nulla dui diam. Augue montes viverra eget egestas in. Potenti ipsum lacus aenean euismod nibh phasellus et tortor quam. Cursus ultrices malesuada in id consequat duis. Porta dui mauris curabitur aliquet nulla. Sit ac fames aliquam enim duis molestie purus. Vel enim odio nisl viverra nisl sagittis vitae. Erat lobortis nisl amet nunc morbi semper iaculis fames.'
		},
		{
			title: 'What does “One request at a time” mean?',
			text: 'Lorem ipsum dolor sit amet consectetur. Risus aliquet senectus commodo consequat libero. Laoreet auctor nulla et venenatis duis cras quis. Velit nibh amet sit dignissim elementum. Laoreet tristique nulla dui diam. Augue montes viverra eget egestas in. Potenti ipsum lacus aenean euismod nibh phasellus et tortor quam. Cursus ultrices malesuada in id consequat duis. Porta dui mauris curabitur aliquet nulla. Sit ac fames aliquam enim duis molestie purus. Vel enim odio nisl viverra nisl sagittis vitae. Erat lobortis nisl amet nunc morbi semper iaculis fames.'
		},
		{
			title: 'Are there any refunds?',
			text: 'Lorem ipsum dolor sit amet consectetur. Risus aliquet senectus commodo consequat libero. Laoreet auctor nulla et venenatis duis cras quis. Velit nibh amet sit dignissim elementum. Laoreet tristique nulla dui diam. Augue montes viverra eget egestas in. Potenti ipsum lacus aenean euismod nibh phasellus et tortor quam. Cursus ultrices malesuada in id consequat duis. Porta dui mauris curabitur aliquet nulla. Sit ac fames aliquam enim duis molestie purus. Vel enim odio nisl viverra nisl sagittis vitae. Erat lobortis nisl amet nunc morbi semper iaculis fames.'
		},
		{
			title: 'What if I don’t like the work?',
			text: 'Lorem ipsum dolor sit amet consectetur. Risus aliquet senectus commodo consequat libero. Laoreet auctor nulla et venenatis duis cras quis. Velit nibh amet sit dignissim elementum. Laoreet tristique nulla dui diam. Augue montes viverra eget egestas in. Potenti ipsum lacus aenean euismod nibh phasellus et tortor quam. Cursus ultrices malesuada in id consequat duis. Porta dui mauris curabitur aliquet nulla. Sit ac fames aliquam enim duis molestie purus. Vel enim odio nisl viverra nisl sagittis vitae. Erat lobortis nisl amet nunc morbi semper iaculis fames.'
		},
		{
			title: 'Is there a request limit?',
			text: 'Lorem ipsum dolor sit amet consectetur. Risus aliquet senectus commodo consequat libero. Laoreet auctor nulla et venenatis duis cras quis. Velit nibh amet sit dignissim elementum. Laoreet tristique nulla dui diam. Augue montes viverra eget egestas in. Potenti ipsum lacus aenean euismod nibh phasellus et tortor quam. Cursus ultrices malesuada in id consequat duis. Porta dui mauris curabitur aliquet nulla. Sit ac fames aliquam enim duis molestie purus. Vel enim odio nisl viverra nisl sagittis vitae. Erat lobortis nisl amet nunc morbi semper iaculis fames.'
		}
	]
}
