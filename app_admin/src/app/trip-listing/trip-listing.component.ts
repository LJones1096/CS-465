import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { TripCardComponent } from '../trip-card/trip-card.component';
@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private tripDataService: TripDataService) {}

  ngOnInit(): void {
    this.tripDataService.getTrips().subscribe({
      next: (data) => {
        this.trips = data;
      },
      error: (error) => {
        console.error('Error retrieving trips:', error);
      }
    });
  }
}