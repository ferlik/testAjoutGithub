import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets = [
    new Planet (1,"Alderran",0,"résistance",199,"/assets/images/espace.jpg"),
    new Planet (2,"Tatouinne",2500000,"république",85200,"/assets/images/2.jpg")

  ]

  constructor() { }

  getAllPlanets(): Planet[] {
    return this.planets;
  }
  getOnePlanetById(id:number): Planet{

    return this.planets.filter(planet=>planet.id===id)[0];
  }


}
