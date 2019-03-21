import { Component, OnInit } from '@angular/core';
import { IssPositionService } from "../services/iss-position.service";

@Component({
  selector: 'app-where',
  templateUrl: './where.page.html',
  styleUrls: ['./where.page.scss'],
})
export class WherePage implements OnInit {
  public latitude: string;
  public longitude: string;
  private interval: any;
  //public time: number;
  constructor(
    private issPosition: IssPositionService
  ) { }

  ngOnInit() {
    this.getISS();
    this.changeInterval(10000)
  }

  ionViewWillLeave() {
    clearInterval(this.interval)
  }

  getISS() {
    this.issPosition.get()
      .then((localization: any) => {
        this.latitude = localization.latitude;
        this.longitude = localization.longitude;
      }).catch((erro: any) => {
        console.error(erro)
      })
  }

  changeInterval(sec: number) {
    this.interval = setInterval(() => {
      this.getISS()
    }, sec)
  }
}

