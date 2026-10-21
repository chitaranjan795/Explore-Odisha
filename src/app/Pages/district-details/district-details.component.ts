import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-district-details',
  imports: [RouterLink],
  templateUrl: './district-details.component.html',
  styleUrl: './district-details.component.scss',
})
export class DistrictDetailsComponent {
  private route = inject(ActivatedRoute);
  districtName = this.route.snapshot.paramMap.get('name') ?? 'Unknown District';

  get formattedDistrictName(): string {
    return this.districtName
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
