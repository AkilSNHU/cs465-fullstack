import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card.ts';

import { TripDataService } from '../services/trip-data.ts';
import { Trip } from '../models/trip';

import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
  providers: [TripDataService]
})

export class TripListingComponent implements OnInit{

  trips!: Trip[];
  message: string = '';

  constructor(
    private TripDataService: TripDataService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    console.log('trip-listing constructor');
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  private getStuff(): void {
    console.log('Starting API request...');

    this.TripDataService.getTrips().subscribe({
      next: (value: Trip[]) => {
        console.log('API response received:', value);

        this.trips = value;

        console.log('Number of trips:', this.trips.length);

        this.cdr.markForCheck();
      },
      error: (error: any) => {
        console.error('API REQUEST FAILED:', error);
      },
      complete: () => {
        console.log('API request completed.');
      }
    });
  }

  ngOnInit(): void {
    console.log('ngOnit');
    this.getStuff();
  }
}
