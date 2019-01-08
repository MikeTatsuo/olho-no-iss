//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OpenNotifyProvider } from '../open-notify/open-notify'

/*
  Generated class for the IssPassProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IssPassProvider {
  endpoint: string="iss-pass.json"
  constructor(
    //public http: HttpClient
    private openNotify: OpenNotifyProvider
  ) {
    console.log('Hello IssPassProvider Provider');
  }

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
