import { ChangeDetectionStrategy, Component } from '@angular/core'
import { LogoComponent } from '../logo/logo.component'

@Component({
	selector: '[Navbar]',
	templateUrl: './navbar.component.html',
	standalone: true,
	imports: [LogoComponent],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {}
