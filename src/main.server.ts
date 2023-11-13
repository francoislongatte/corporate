import { importProvidersFrom } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { ServerModule } from '@angular/platform-server'
import { AppComponent } from './app/app.component'

const bootstrap = () =>
	bootstrapApplication(AppComponent, {
		providers: [importProvidersFrom(ServerModule)]
	})

export default bootstrap
