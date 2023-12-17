import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { DialogModule, Dialog } from '@angular/cdk/dialog'
import { SaveEmailComponent } from 'src/app/modal/saveEmail/saveEmail.component'
import { DOCUMENT, isPlatformBrowser } from '@angular/common'

@Component({
	selector: '.price',
	standalone: true,
	imports: [DialogModule],
	templateUrl: './price.component.html',
	styleUrls: ['./price.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceComponent {
	
	constructor(
		@Inject(PLATFORM_ID) private readonly _platformId: Object,
		public dialog: Dialog
	) {
		
	}
	openDialog(): void {
		if (isPlatformBrowser(this._platformId)) {
			console.log('dialog')
			const dialogRef = this.dialog.open<string>(SaveEmailComponent, {
				width: '600px'
			})
		}
	}
}
