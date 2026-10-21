import { Component } from '@angular/core';

import { DistrictcardComponent } from '../../Components/districtcard/districtcard.component';
import { CarouselComponent } from '../../Components/carousel/carousel.component';
@Component({
  selector: 'app-home',
  imports: [DistrictcardComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Discover Odisha';
  description =
    'Explore the culture, history, temples, beaches, wildlife and hidden gems of Odisha.';

  districts = [
    {
      name: 'Puri',
      description: 'Famous for Jagannath Temple and beautiful beaches.',
      image: 'assets/krishna.png',
      alt: 'Something Error',
      rating: 4.8,
    },

    {
      name: 'Khordha',
      description: 'Home to Bhubaneswar and many ancient temples.',
      image: 'assets/krishna.png',
      alt: 'Something Error',
      rating: 4.8,
    },

    {
      name: 'Cuttack',
      description:
        'A historic city known for Barabati Fort and silver filigree.',
      image: 'assets/krishna.png',
      alt: 'Something Error',
      rating: 4.8,
    },

    {
      name: 'Ganjam',
      description: 'Known for Gopalpur beach and beautiful coastal landscapes.',
      image: 'assets/krishna.png',
      alt: 'Something Error',
      rating: 5,
    },
    {
      name: 'Mayurbhanj',
      description:
        'Known for Similipal National Park, lush forests, and rich tribal culture.',
      image: 'assets/krishna.png',
      alt: 'Something Error',
      rating: 4.8,
    },

    {
      name: 'Koraput',
      description:
        'Famous for its scenic hills, waterfalls, coffee plantations, and tribal heritage.',
      image: 'assets/krishna.png',
      alt: 'Something Error',
      rating: 5,
    },

    {
      name: 'Sambalpur',
      description:
        'Known for Hirakud Dam, Sambalpuri handloom, and the famous Samaleswari Temple.',
      image: 'assets/krishna.png',
      alt: 'Something Error',
      rating: 4.9,
    },

    {
      name: 'Balasore',
      description:
        'Known for Chandipur Beach, where the sea mysteriously recedes during low tide.',
      image: 'assets/krishna.png',
      alt: 'Something Error',
      rating: 4.4,
    },
  ];

  category = [
    'Temple',
    'Beaches',
    'Waterfalls',
    'Wildlife',
    'Historical Places',
    'Lakes',
    'Hill Stations',
    'Tribal Culture',
    'Architecture',
  ];
}
