import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planete',
  templateUrl: './planete.component.html',
  styleUrls: ['./planete.component.css']
})
export class PlaneteComponent implements OnInit {

  planet: Planet [];
  constructor(private planetservice:PlanetService) { }

  ngOnInit(): void {
    this.planet = this.planetservice.getAllPlanets();
  }

}
