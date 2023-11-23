import { Injectable } from '@angular/core'

interface Scripts {
	name: string
	src: string
	loaded?: boolean
}

const ScriptStore: { [key: string]: Scripts[] } = {
	init: [
		{ name: 'googleAnalytics', src: 'https://www.googletagmanager.com/gtag/js?id=G-9CFF4D6N19' },
		{ name: 'googleAnalyticsScript', src: '../../assets/scripts/googleAnalytics.js' }
	],
	click: [{ name: 'calendly', src: 'https://assets.calendly.com/assets/external/widget.js' }]
}

@Injectable()
export class ScriptStoreService {
	private scripts: Scripts[] = []

	constructor() {
		ScriptStore['init'].forEach((script) => {
			this.scripts.push({
				name: script.name,
				loaded: false,
				src: script.src
			})
			this.loadScript(script.name)
		})
	}

	openCalendly() {
		if (!this.scripts.find((script) => script.name == 'calendly')) {
			const {
				name = '',
				loaded = false,
				src = ''
			} = ScriptStore['click'].find((script) => script.name == 'calendly') as Scripts
			this.scripts.push({
				name,
				loaded,
				src
			})
			this.loadScript('calendly').then(() => {
				;(window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/cobuildr/30min' })
			})
		} else {
			;(window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/cobuildr/30min' })
		}
	}

	private loadScript(name: string) {
		return new Promise((resolve, reject) => {
			const findScript = this.scripts.find((script) => script.name == name)
			if (!findScript?.loaded) {
				let script = document.createElement('script')
				script.type = 'text/javascript'
				script.src = findScript!.src
				script.defer = true
				script.onload = () => {
					findScript!.loaded = true
					resolve({ script: name, loaded: true, status: 'Loaded' })
				}
				document.getElementsByTagName('body')[0].appendChild(script)
			}
		})
	}
}
