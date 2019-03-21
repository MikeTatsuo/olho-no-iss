import { Injectable } from '@angular/core';
import { OpenNotifyService } from "./open-notify.service";

@Injectable({
  providedIn: 'root'
})
export class IssPeopleService {
  endpoint: string = "astros.json"
  constructor(
    public openNotify: OpenNotifyService
  ) { }

  getAstros() {
    return new Promise((resolve, reject) => {
      this.openNotify.get(this.endpoint)
        .subscribe((data: any) => {
          resolve(data)
        }, (error: any) => {
          reject(error)
        })
    })
  }
}
