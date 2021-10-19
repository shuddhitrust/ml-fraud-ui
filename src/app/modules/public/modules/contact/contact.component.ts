import { Component, OnInit } from '@angular/core';
import { github, twitter } from 'src/links.config';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  twitter = twitter;
  github = github;

  constructor() {}

  ngOnInit(): void {}
}
