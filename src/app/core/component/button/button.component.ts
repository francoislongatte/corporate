import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
	selector: 'button',
	standalone: true,
	imports: [CommonModule],
	template: `<span><ng-content></ng-content></span>`,
	styleUrl: './button.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {}
