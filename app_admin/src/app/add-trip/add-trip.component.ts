
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-trip.component.html',
  styleUrl: './add-trip.component.css'
})
export class AddTripComponent {
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
    private router: Router
  ) {}

  public addTrip(): void {
    this.tripDataService.addTrip(this.trip).subscribe({
      next: () => {
        alert('Trip added successfully!');
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error adding trip:', error);
        alert('Unable to add trip.');
      }
    });
  }
}
