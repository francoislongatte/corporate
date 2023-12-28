import { AppComponent } from './app/app.component'
import { importProvidersFrom } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { bootstrapApplication } from '@angular/platform-browser'
import { provideClientHydration } from '@angular/platform-browser'

bootstrapApplication(AppComponent, {
	providers: [provideClientHydration(), importProvidersFrom(HttpClientModule)]
}).catch((err) => console.error(err))
