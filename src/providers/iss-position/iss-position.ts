//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OpenNotifyProvider } from '../open-notify/open-notify'

/*
  Generated class for the IssPositionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IssPositionProvider {
  endpoint: string = "iss-now.json"
  constructor(
    //public http: HttpClient,
    public openNotify: OpenNotifyProvider
  ) {
    //console.log('Hello IssPositionProvider Provider');
  }

  get() {
    return new Promise((resolve, reject) => {
      this.openNotify.get(this.endpoint).subscribe((resp: any) => {
        resolve(resp.iss_position)
      }, error => {
        reject(error)
      })
    }
    )
  }
}
