import { Routes } from "@angular/router";
import { ProfileView } from "./profile-view/profile-view";
import { ProfileDetail } from "./profile-detail/profile-detail";

export const PROFILE_ROUTES: Routes = [
  { path: '', component: ProfileView },
  { path: 'detail', component: ProfileDetail }
];