import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'vidhya-ui';

  constructor(
    private router: Router,
    private readonly location: Location
  ) {

  }

  currentRoute(): string {
    return this.location.path().substring(1);
  }


  ngOnInit(): void {

  }

  ngOnDestroy() { }
}