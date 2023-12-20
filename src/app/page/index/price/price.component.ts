import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { DialogModule, Dialog } from '@angular/cdk/dialog'
import { SaveEmailComponent } from 'src/app/modal/saveEmail/saveEmail.component'
import { DOCUMENT, isPlatformBrowser } from '@angular/common'
import { ButtonComponent } from 'src/app/core/component/button/button.component'
import { ScriptStoreService } from 'src/app/core/service/scriptStore.service'

@Component({
	selector: '.price',
	standalone: true,
	imports: [DialogModule, ButtonComponent],
	providers: [ScriptStoreService],
	templateUrl: './price.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceComponent {
	lists = [
		[
			'Unlimited requests',
			'Unlimited revisions',
			'Average 2-3 days delivery',
			'Async communication'
		],
		['No hiring process', 'Pause or cancel anytime', 'No contracts', 'No meetings']
	]
	constructor(
		private script: ScriptStoreService,
		@Inject(PLATFORM_ID) private readonly _platformId: Object,
		public dialog: Dialog
	) {}
	openDialog(): void {
		if (isPlatformBrowser(this._platformId)) {
			const dialogRef = this.dialog.open<string>(SaveEmailComponent, {
				width: '600px'
			})
		}
	}
	popup() {
		if (isPlatformBrowser(this._platformId)) {
			this.script.openCalendly()
		}
	}
}
