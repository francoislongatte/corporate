import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core'

@Component({
	selector: 'button',
	standalone: true,
	imports: [CommonModule],
	template: `<span><ng-content></ng-content></span>`,
	styleUrl: './button.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
	@Input() secondary: boolean = false
	@HostBinding('class.secondary') get secondaryClass() {
		return this.secondary
	}
}
