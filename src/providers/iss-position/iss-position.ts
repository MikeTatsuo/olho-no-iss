import { Injectable } from '@angular/core';
import { OpenNotifyProvider } from '../open-notify/open-notify'

@Injectable()
export class IssPositionProvider {
  endpoint: string = "iss-now.json"
  constructor(
    public openNotify: OpenNotifyProvider
  ) { }

  get() {
    return new Promise((resolve, reject) => {
      this.openNotify.get(this.endpoint).subscribe((resp: any) => {
        resolve(resp.iss_position)
      }, error => {
        reject(error)
      })
    })
  }
}
