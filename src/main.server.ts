import { importProvidersFrom } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { ServerModule } from '@angular/platform-server'
import { AppComponent } from './app/app.component'
import { provideClientHydration } from '@angular/platform-browser'

const bootstrap = () =>
	bootstrapApplication(AppComponent, {
		providers: [importProvidersFrom(ServerModule), provideClientHydration()]
	})

export default bootstrap
