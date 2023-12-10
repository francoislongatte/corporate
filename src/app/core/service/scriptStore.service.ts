import { Injectable } from '@angular/core'

interface Scripts {
	name: string
	src: string
	loaded?: boolean
}

@Injectable()
export class ScriptStoreService {
	private scripts: Scripts[] = []

	scriptStore: { [key: string]: Scripts[] } = {
		init: [
			{ name: 'googleAnalytics', src: 'https://www.googletagmanager.com/gtag/js?id=G-9CFF4D6N19' },
			{ name: 'googleAnalyticsScript', src: '../../assets/scripts/googleAnalytics.js' }
		],
		click: [
			{ name: 'calendly', src: 'https://assets.calendly.com/assets/external/widget.js' }
		]
	}

	constructor() {
		this.scriptStore['init'].forEach((script) => {
			this.scripts.push({
				name: script.name,
				loaded: false,
				src: script.src
			})
			this.loadScript(script.name)
		})
	}

	openCalendly() {
		this.addScriptToStore('calendly')
		this.loadScript('calendly').then(() => {
			;(window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/cobuildr/30min' })
		})
	}

	private addScriptToStore(name: string) {
		if (!this.scripts.find((script) => script.name == name)) {
			const findScript: Scripts = this.scriptStore['click'].find(
				(script) => script?.name == name
			) || {
				name: '',
				loaded: false,
				src: ''
			}
			this.scripts.push(
				Object.assign(
					{
						name: '',
						loaded: false,
						src: ''
					},
					findScript
				)
			)
		}
	}

	private loadScript(name: string) {
		return new Promise((resolve, reject) => {
			const findScript = this.scripts.find((script) => script.name == name)
			if (findScript?.loaded) {
				resolve({ script: name, loaded: true })
			} else {
				let script = document.createElement('script')
				script.setAttribute('type', 'text/javascript')
				script.setAttribute('src', findScript!.src)
				script.setAttribute('defer', '')
				script.onload = () => {
					findScript!.loaded = true
					resolve({ script: name, loaded: true })
				}
				document.getElementsByTagName('body')[0].appendChild(script)
			}
		})
	}
}
