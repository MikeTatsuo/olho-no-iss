import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenNotifyService {
  //api: string = "http://api.open-notify.org/"
  api: string = "http://localhost:8100/openNotify/"
  constructor(
    public http: HttpClient
  ) { }

  get(params) {
    return this.http.get(this.api + params)
  }
}
