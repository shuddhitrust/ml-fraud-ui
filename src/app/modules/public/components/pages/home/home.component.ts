import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { parseDateTime } from 'src/app/shared/common/functions';
import { videos, shuddhiVidhya } from '../../../../../../links.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  shuddhiVidhya = shuddhiVidhya;
  videos: any = videos.slice(0, 10);
  constructor(private sanitizer: DomSanitizer) {
    this.videos = this.videos.map((v) => {
      return {
        ...v,
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/' + v.id
        ),
      };
    });
  }

  parseDate(dateString) {
    const date = new Date(dateString).toDateString();
    return parseDateTime(date);
  }

  slideClass(i) {
    return i == 0 ? 'carousel-item active' : 'carousel-item';
  }

  ngOnInit(): void {}
}
