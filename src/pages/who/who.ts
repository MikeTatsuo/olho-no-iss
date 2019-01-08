import { Component } from '@angular/core';
import { IssPeopleProvider } from '../../providers/iss-people/iss-people'

@Component({
  selector: 'page-who',
  templateUrl: 'who.html'
})
export class WhoPage {
  astronauts: any
  nr_astronauts: number
  constructor(
    public issPeople: IssPeopleProvider
  ) {
    this.getAstronauts()
  }

  getAstronauts() {
    this.issPeople.getAstros()
      .then((data: any) => {
        this.astronauts = data.people
        this.nr_astronauts = data.number
      }).catch(error => {
        // TODO alert for error
      })
  }
}
