import {
  Component,
  DestroyRef,
  computed,
  effect,
  input,
  signal,
  inject,
} from '@angular/core';

export interface CarouselSlide {
  id: number;
  label: string;
  image: string;
  onClick?: () => void;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  private destroyRef = inject(DestroyRef);

  slides = input<CarouselSlide[]>([
    {
      id: 1,
      label: 'Explore Mountains',
      image: 'https://picsum.photos/id/1018/1600/900',
    },
    {
      id: 2,
      label: 'Discover Forests',
      image: 'https://picsum.photos/id/1015/1600/900',
    },
    {
      id: 3,
      label: 'Visit Lakes',
      image: 'https://picsum.photos/id/1016/1600/900',
    },
    {
      id: 4,
      label: 'Walk the Coast',
      image: 'https://picsum.photos/id/1011/1600/900',
    },
    {
      id: 5,
      label: 'See the Valleys',
      image: 'https://picsum.photos/id/1039/1600/900',
    },
    {
      id: 6,
      label: 'Chase Waterfalls',
      image: 'https://picsum.photos/id/1043/1600/900',
    },
  ]);

  interval = input(3000);
  visibleCards = input(4);

  active = signal(0);
  paused = signal(false);

  // Thumbnail indexes start with the active slide and wrap around.
  rail = computed(() => {
    const count = this.slides().length;

    if (count === 0) return [];

    const size = Math.min(Math.max(0, this.visibleCards()), count);

    return Array.from(
      { length: size },
      (_, index) => (this.active() + index) % count,
    );
  });

  constructor() {
    // Restart the timer if its settings or slide list changes.
    effect((onCleanup) => {
      const count = this.slides().length;
      const delay = this.interval();

      if (count < 2 || delay <= 0) return;

      const timer = setInterval(() => {
        if (!this.paused()) {
          this.active.update((index) => (index + 1) % count);
        }
      }, delay);

      onCleanup(() => clearInterval(timer));
    });
  }

  next(): void {
    const count = this.slides().length;

    if (count === 0) return;

    this.active.update((index) => (index + 1) % count);
  }

  prev(): void {
    const count = this.slides().length;

    if (count === 0) return;

    this.active.update((index) => (index - 1 + count) % count);
  }

  select(index: number): void {
    if (index < 0 || index >= this.slides().length) return;

    this.active.set(index);
  }
}
