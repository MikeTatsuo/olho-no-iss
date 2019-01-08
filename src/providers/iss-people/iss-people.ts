//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OpenNotifyProvider } from '../open-notify/open-notify'

/*
  Generated class for the IssPeopleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IssPeopleProvider {
  endpoint: string = "astros.json"
  constructor(
    //public http: HttpClient
    public openNotify: OpenNotifyProvider
  ) {
    //console.log('Hello IssPeopleProvider Provider');
  }

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
