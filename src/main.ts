import { AppComponent } from './app/app.component'
import { importProvidersFrom } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { bootstrapApplication } from '@angular/platform-browser'
import { provideClientHydration } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'

bootstrapApplication(AppComponent, {
	providers: [provideRouter([]), provideClientHydration(), importProvidersFrom(HttpClientModule)]
}).catch((err) => console.error(err))
