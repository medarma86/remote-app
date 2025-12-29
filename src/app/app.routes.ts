import { Routes } from '@angular/router';
import { ProfileView } from './profile/profile-view/profile-view';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '', // Matches localhost:4201 exactly
    pathMatch: 'full',
    component: Home 
  },
    {
    path: 'profile',
    component: ProfileView
  }
];
