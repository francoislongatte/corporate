import { AppComponent } from './app/app.component'

import { bootstrapApplication } from '@angular/platform-browser'
import { provideClientHydration } from '@angular/platform-browser'

bootstrapApplication(AppComponent, {
	providers: [provideClientHydration()]
}).catch((err) => console.error(err))
