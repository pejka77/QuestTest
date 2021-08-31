import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Worker } from '../models/worker';
import { Flight } from '../models/flights';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http: HttpClient) { }

  private workersUrl = 'https://interview-mock.herokuapp.com/api/workers/';
  

  public getWorkers(){
  
    return this.http.get<Worker[]>(this.workersUrl);
  }

  public getFlightsByWorker(id: number){

    return this.http.get<Flight[]>(this.workersUrl + id);
  }

}
