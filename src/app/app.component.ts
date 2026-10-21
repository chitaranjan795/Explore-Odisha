import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './Layout/navbar/navbar.component';
import { FooterComponent } from './Layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Wander-Odisha';
}
