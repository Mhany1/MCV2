import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBus } from './bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

 constructor(private http:HttpClient) { }

 url:string = './assets/datafile.json'

 getData():Observable<IBus[]>
  {
    return this.http.get<IBus[]>(this.url)
  }
}
