import { Component } from '@angular/core';
import { IssPositionProvider } from '../../providers/iss-position/iss-position';

@Component({
  selector: 'page-where',
  templateUrl: 'where.html'
})
export class WherePage {
  latitude: string
  longitude: string
  interval: any
  time: number
  constructor(
    public issPosition: IssPositionProvider
  ) {
  }

  ionViewDidLoad() {
    this.getISS();
    this.changeInterval(1000)
  }

  ionViewWillLeave() {
    clearInterval(this.interval)
  }

  getISS() {
    this.issPosition.get()
      .then((localization: any) => {
        this.latitude = localization.latitude;
        this.longitude = localization.longitude;
      }).catch(erro => {
        // TODO alert for error
      })
  }

  changeInterval(sec: number) {
    this.interval = setInterval(() => {
      this.getISS()
    }, sec)
  }
}
