import { Component, input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-districtcard',
  imports: [],
  templateUrl: './districtcard.component.html',
  styleUrl: './districtcard.component.scss',
})
export class DistrictcardComponent {
  district = input.required<{
    name: string;
    description: string;
    image: string;
    alt: string;
    rating: number;
  }>();

  private router = inject(Router);

  exploreDistrict() {
    const name = this.district().name.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['/districts', name]);
  }
}
