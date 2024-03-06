import { Component, EventEmitter, Output, NgModule } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})

export class NavBarComponent {
    isMenuOpen: boolean = false;

    isInformationMenuOpen: boolean = false;

    @Output() changeDrawer = new EventEmitter<boolean>();
    public images = [
        {
            name: 'AirPlane',
            // img: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/292038590/original/7524282077881bfb1cf95bc631c662a514818ab6/make-an-awesome-style-airline-logo-for-your-business.png'
            img: './assets/img/airline.jpeg'
        },
        {
            name: 'World',
            img: './assets/img/world-logo.png'
        }
    ]

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }

    toggleInformationMenu() {
        this.isInformationMenuOpen = !this.isInformationMenuOpen;
      }
  }