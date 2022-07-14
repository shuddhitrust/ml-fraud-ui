import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-public-lists',
  templateUrl: './public-lists.component.html',
  styleUrls: ['./public-lists.component.scss'],
})
export class PublicTabsComponent implements OnInit {
  activeTabIndex = 0;
  params;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}
  ngOnInit() {}
}
