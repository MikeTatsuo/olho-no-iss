import { Component } from '@angular/core';
import { IssPassProvider } from '../../providers/iss-pass/iss-pass'

@Component({
  selector: 'page-when',
  templateUrl: 'when.html'
})
export class WhenPage {
  latitude: number = -23.5504428
  longitude: number = -46.6339418
  passes: any
  nr_passes: number
  constructor(
    public issPass: IssPassProvider
  ) {
    this.getPass(this.latitude, this.longitude)
  }

  getCurrentLocation() {

  }

  getPass(lat: number, lon: number) {
    this.issPass.get(lat, lon)
      .then((resp: any) => {
        this.nr_passes = resp.request.passes
        this.passes = resp.response
      }).catch(error => {
        // TODO alert for error
      })
  }
}
