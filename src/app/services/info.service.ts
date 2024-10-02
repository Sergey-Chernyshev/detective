import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {ServicesDataInterface} from "../models/json.interface";

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  allInfoServices!: ServicesDataInterface;
  allInfoServices$: Subject<ServicesDataInterface> = new Subject<ServicesDataInterface>()

  setServices(services: ServicesDataInterface) {
    this.allInfoServices$.next(services);
    this.allInfoServices = services
  }
}
