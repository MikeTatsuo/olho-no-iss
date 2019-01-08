import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OpenNotifyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OpenNotifyProvider {
  //api: string = "http://api.open-notify.org/"
  api: string="http://localhost:8100/openNotify/"
  constructor(
    public http: HttpClient
  ) {
    //console.log('Hello OpenNotifyProvider Provider');
  }

  get(params) {
    console.log(this.api + params)
    return this.http.get(this.api + params)
  }
}
