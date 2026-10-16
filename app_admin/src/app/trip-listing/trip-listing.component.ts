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

  deleteTrip(tripCode: string): void {
    const confirmed = window.confirm(
      'Are you sure you want to delete this trip?'
    );

    if (!confirmed) {
      return;
    }

    this.tripDataService.deleteTrip(tripCode).subscribe({
      next: () => {
        this.trips = this.trips.filter(
          trip => trip.code !== tripCode
        );
        alert('Trip deleted successfully.');
      },
      error: (error) => {
        console.error('Error deleting trip:', error);
        alert('Unable to delete trip.');
      }
    });
  }
}