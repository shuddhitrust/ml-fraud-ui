import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { twitter, medium, github, youtube } from '../links.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  twitter = twitter;
  medium = medium;
  github = github;
  youtube = youtube;

  currentYear = new Date().getFullYear();
  showMobileBottomnav = false;
  mobileBottomNavIcon = 'fa fa-chevron-up';

  constructor(private router: Router, private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e) => {
      // Running this on every click
      const topDropdownIsOpen = !document
        .getElementById('topnav-dropdown-toggle')
        .classList.contains('collapsed');
      const clickIsNotOnToggler = e.path[0] != 'span.navbar-toggler-icon';
      if (topDropdownIsOpen && clickIsNotOnToggler) {
        // Clicking the topnav-drodown-toggle if the dropdown is open
        document.getElementById('topnav-dropdown-toggle').click();
      }
    });
  }

  toggleMobileBottomnav() {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 400);
    this.mobileBottomNavIcon = this.showMobileBottomnav
      ? 'fa fa-chevron-up'
      : 'fa fa-chevron-down';
    this.showMobileBottomnav = !this.showMobileBottomnav;
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
