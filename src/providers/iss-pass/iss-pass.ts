import { Injectable } from '@angular/core';
import { OpenNotifyProvider } from '../open-notify/open-notify'

@Injectable()
export class IssPassProvider {
  endpoint: string = "iss-pass.json"
  constructor(
    private openNotify: OpenNotifyProvider
  ) { }

  get(latitude: number, longitude: number) {
    return new Promise((resolve, reject) => {
      this.openNotify.get(`${this.endpoint}?lat=${latitude}&lon=${longitude}`)
        .subscribe((resp: any) => {
          resolve(resp)
        }, error => {
          reject(error)
        })
    })
  }
}
