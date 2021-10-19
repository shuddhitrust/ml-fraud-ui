import { Component, OnInit } from '@angular/core';
import { youtube } from 'src/links.config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  youtube = youtube;
  constructor() {}

  ngOnInit(): void {}
}
