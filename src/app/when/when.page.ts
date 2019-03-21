import { Component, OnInit } from '@angular/core';
import { IssPassService } from '../services/iss-pass.service';
import { Geolocation } from "@ionic-native/geolocation/ngx";

@Component({
  selector: 'app-when',
  templateUrl: './when.page.html',
  styleUrls: ['./when.page.scss'],
})
export class WhenPage implements OnInit {
  public latitude: number;
  public longitude: number;
  public passes: any;
  public nr_passes: number
  constructor(
    private issPass: IssPassService,
    private geolocation: Geolocation
  ) { }

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    this.geolocation.getCurrentPosition().then((resp: any) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.getPass(this.latitude, this.longitude);
    })
      .catch((err: any) => {
        console.error(err)
      })
  }

  getPass(lat: number, lon: number) {
    this.issPass.get(lat, lon)
      .then((resp: any) => {
        this.nr_passes = resp.request.passes
        this.passes = resp.response
      }).catch((erro: any) => {
        console.error(erro)
      })
  }

  convertToDate(timestamp) {
    let date = new Date(timestamp).toString()
    return date
  }

  formatDuration(duration) {
    let seconds = (duration % 60)
    let minutes = Math.floor(duration / 60)
    let formated = minutes + " min " + seconds + " sec"
    return formated
  }
}
