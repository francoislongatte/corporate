import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: '.logo',
	standalone: true,
	imports: [],
	templateUrl: './logo.component.html',
	host: {
		class: 'flex items-center gap-1.5'
	}
})
export class LogoComponent {}
