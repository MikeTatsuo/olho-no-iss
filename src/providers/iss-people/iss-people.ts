import { Injectable } from '@angular/core';
import { OpenNotifyProvider } from '../open-notify/open-notify'

@Injectable()
export class IssPeopleProvider {
  endpoint: string = "astros.json"
  constructor(
    public openNotify: OpenNotifyProvider
  ) { }

  getAstros() {
    return new Promise((resolve, reject) => {
      this.openNotify.get(this.endpoint)
        .subscribe(data => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }
}
