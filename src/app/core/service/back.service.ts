import { Inject, Injectable } from '@angular/core'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { DOCUMENT } from '@angular/common'

export const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

@Injectable()
export class BackService {
	baseURL!: string

	constructor(
		private httpCLient: HttpClient,
		@Inject(DOCUMENT) private document: Document
	) {
		this.baseURL = this.document.location.origin + '/'
	}

	saveEmail(email: string) {
		const headers = new HttpHeaders()
		headers.set('Content-Type', 'application/json; charset=utf-8')
		return this.httpCLient.post(this.baseURL + 'api/saveEmail', { email }, { headers: headers })
	}
}
