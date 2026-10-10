import { Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { DistrictComponent } from './Pages/district/district.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'district',
    component: DistrictComponent,
  },
  {
    path: '**',
    redirectTo: 'Not Found',
  },
];
