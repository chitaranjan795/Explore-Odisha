import { Component, input } from '@angular/core';

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

  exploreDistrict() {
    document.title = this.district().name; // Here the page title is changing on click the explore button
  }
}
