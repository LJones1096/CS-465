
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent implements OnInit {
  trip: Trip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: '',
    description: ''
  };

  constructor(
    private tripDataService: TripDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const tripCode = this.route.snapshot.paramMap.get('tripCode');

    if (tripCode) {
      this.tripDataService.getTrips().subscribe({
        next: (trips) => {
          const selectedTrip = trips.find(
            trip => trip.code === tripCode
          );

          if (selectedTrip) {
            this.trip = {
              ...selectedTrip,
              start: selectedTrip.start
                ? selectedTrip.start.substring(0, 10)
                : ''
            };
          }
        },
        error: (error) => {
          console.error('Error loading trip:', error);
        }
      });
    }
  }

  public updateTrip(): void {
    this.tripDataService.updateTrip(this.trip).subscribe({
      next: () => {
        alert('Trip updated successfully!');
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error updating trip:', error);
        alert('Unable to update trip.');
      }
    });
  }
}

