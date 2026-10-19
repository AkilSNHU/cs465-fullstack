import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.ts';
import { TripListingComponent } from './trip-listing/trip-listing.ts';
import { EditTripComponent } from './edit-trip/edit-trip.ts'

export const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent },
    { path: 'edit-trip', component: EditTripComponent },
    { path: '', component: TripListingComponent, pathMatch: 'full' }
];
