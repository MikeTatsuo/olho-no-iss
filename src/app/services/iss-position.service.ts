import { Injectable } from '@angular/core';
import { OpenNotifyService } from "./open-notify.service";

@Injectable({
  providedIn: 'root'
})
export class IssPositionService {
  endpoint: string = "iss-now.json"
  constructor(
    public openNotify: OpenNotifyService
  ) { }

  get() {
    return new Promise((resolve, reject) => {
      this.openNotify.get(this.endpoint).subscribe((resp: any) => {
        resolve(resp.iss_position)
      }, (error: any) => {
        reject(error)
      })
    })
  }
}
