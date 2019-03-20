import { Component, OnInit } from '@angular/core';
import { IssPeopleService } from "../services/iss-people.service";

@Component({
  selector: 'app-who',
  templateUrl: './who.page.html',
  styleUrls: ['./who.page.scss'],
})
export class WhoPage implements OnInit {
  astronauts: any
  nr_astronauts: number
  constructor(
    public issPeople: IssPeopleService
  ) {
    this.getAstronauts()
  }

  ngOnInit() {
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
