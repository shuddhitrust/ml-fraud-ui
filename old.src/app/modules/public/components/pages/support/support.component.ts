import { Component, OnInit } from '@angular/core';
import { volunteer, donation } from 'src/links.config';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
  volunteer = volunteer;
  donation = donation;

  constructor() {}

  ngOnInit(): void {}
}
