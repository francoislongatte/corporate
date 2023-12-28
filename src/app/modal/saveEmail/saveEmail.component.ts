import { CommonModule } from '@angular/common'
import {
	ChangeDetectionStrategy,
	Component,
	Inject,
	PLATFORM_ID,
	ChangeDetectorRef
} from '@angular/core'
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog'
import { FormsModule } from '@angular/forms'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { DOCUMENT, isPlatformBrowser } from '@angular/common'
import { BackService, validateEmail } from 'src/app/core/service/back.service'
import { catchError, finalize } from 'rxjs/operators'
import { of } from 'rxjs'
import { ButtonComponent } from 'src/app/core/component/button/button.component'

@Component({
	selector: 'app-save-email',
	standalone: true,
	imports: [CommonModule, FormsModule, ButtonComponent],
	providers: [BackService],
	templateUrl: './saveEmail.component.html',
	styleUrl: './saveEmail.component.css'
})
export class SaveEmailComponent {
	baseURL!: string
	email: string = ''

	payload = {
		state: '',
		message: ''
	}

	constructor(
		private backService: BackService,
		public dialogRef: DialogRef<string>,
		private cdr: ChangeDetectorRef,
		@Inject(PLATFORM_ID) private readonly _platformId: Object
	) {}

	saveEmail() {
		this.payload = {
			state: '',
			message: ''
		}
		if (validateEmail(this.email)) {
			this.backService.saveEmail(this.email).subscribe({
				next: (data: any) => {
					this.payload = {
						state: 'success',
						message: data.message
					}
					setTimeout(() => {
						this.dialogRef.close()
					}, 5000)
					//this.cdr.detectChanges()
				},
				error: (data: any) => {
					this.payload = {
						state: 'error',
						message: data.error.message
					}
					//this.cdr.detectChanges()
				}
			})
		} else {
			this.payload = {
				state: 'error',
				message: 'Please include a valid email address so we can get back to you.'
			}
		}
	}
}
