import { AppComponent } from './app/app.component'

import { bootstrapApplication } from '@angular/platform-browser'
import { ScriptStoreService } from './app/core/service/scriptStore.service'

bootstrapApplication(AppComponent, {
	providers: [ScriptStoreService]
}).catch((err) => console.error(err))
