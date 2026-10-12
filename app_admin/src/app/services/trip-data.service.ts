
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private apiUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  public getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  public addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.apiUrl, trip);
  }

  public updateTrip(trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(
      `${this.apiUrl}/${trip.code}`,
      trip
    );
  }

}
