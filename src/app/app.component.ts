import { Component } from '@angular/core';
import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component'
import { NavBarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FooterComponent, NavBarComponent, NgFor, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'AirLine';

  public images = [
    {
      name: 'Chicago',
      img: './assets/img/chicago1.jpg',
      price: 'From $600.00'
    },
    {
      name: 'Porto',
      img: './assets/img/porto.jpg',
      price: 'From $600.00'
    },
    {
      name: 'Chicago',
      img: './assets/img/chicago2.jpg',
      price: 'From $600.00'
    },
]
}
