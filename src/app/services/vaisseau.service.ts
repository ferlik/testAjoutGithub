import { Injectable } from '@angular/core';
import { Vaisseau } from '../models/vaisseau';

@Injectable({
  providedIn: 'root'
})
export class VaisseauService {
  vehiculs = [
    new Vaisseau(1,"faucon millenium","galaxicorp",true,10),
    new Vaisseau(2,"xwing","spacex",false,2)
  ]

  constructor() { }

  getAllVaisseau() : Vaisseau[] {
    return this.vehiculs;
  }

  getOneVehiculsById (id:number):Vaisseau {
    return this.vehiculs.filter(vehiculs => vehiculs.id===id)[0];
  }
  addVaisseau(vaisseau: Vaisseau): void {
    this.vehiculs.push(vaisseau);
  }
}
