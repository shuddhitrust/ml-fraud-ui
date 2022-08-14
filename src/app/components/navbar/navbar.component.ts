
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { paths } from 'src/app/app-routing.module';
import { Location } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    paths = paths
    constructor(
        public dialog: MatDialog,
        private router: Router,
        private location: Location
    ) {
    }

    currentRoute(): string {
        return this.location.path().substring(1);
    }
    ngOnInit(): void { }

    menuLinkClass(path: string) {
        return path == this.currentRoute() ? 'nav-item active' : 'nav-item'
    }
}