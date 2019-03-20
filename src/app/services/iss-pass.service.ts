import { Injectable } from '@angular/core';
import { OpenNotifyService } from "./open-notify.service";

@Injectable({
  providedIn: 'root'
})
export class IssPassService {
  endpoint: string = "iss-pass.json"
  constructor(
    private openNotify: OpenNotifyService
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
