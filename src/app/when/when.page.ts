import { Component, OnInit } from '@angular/core';
import { IssPassService } from '../services/iss-pass.service';
//import  {Geolocation } from "@ionic-native/geolocation/ngx";

@Component({
  selector: 'app-when',
  templateUrl: './when.page.html',
  styleUrls: ['./when.page.scss'],
})
export class WhenPage implements OnInit {
  public latitude: number = -23.5504428;
  public longitude: number = -46.6339418;
  public passes: any;
  public nr_passes: number
  constructor(
    private issPass: IssPassService,
    //public geolocation: Geolocation
  ) { }

  ngOnInit() {
    this.getPass(this.latitude, this.longitude)
  }

  /* getCurrentLocation() {
    this.geolocation.getCurrentPosition().then(function (resp) {
      console.log(resp)
      debugger
    })
      .catch((error:any) => {
        console.error(error)
        debugger
      })
  } */

  getPass(lat: number, lon: number) {
    this.issPass.get(lat, lon)
      .then((resp: any) => {
        this.nr_passes = resp.request.passes
        this.passes = resp.response
      }).catch(error => {
        // TODO alert for error
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
