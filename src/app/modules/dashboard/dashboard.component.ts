import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthorizationService } from 'src/app/shared/api/authorization/authorization.service';
import { ADMIN_SECTION_LABELS } from 'src/app/shared/common/constants';
import {
  resources,
  RESOURCE_ACTIONS,
  UserPermissions,
} from 'src/app/shared/common/models';
import { uiroutes } from '../../shared/common/ui-routes';
import { AuthState } from '../auth/state/auth.state';
import { DashboardState } from './state/dashboard.state';

export const ADMIN = 'Admin';
export const ANNOUNCEMENTS = 'Announcements';
export const ASSIGNMENTS = 'Assignments';
export const COURSES = 'Courses';
export const GROUPS = 'Groups';
export const GRADING = 'Grading';
export const REPORTS = 'Reports';

const tabIndexList = {
  0: ADMIN,
};

const adminEntities = [
  { value: resources.USER_ROLE, label: ADMIN_SECTION_LABELS.USER_ROLES },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  ADMIN = ADMIN;
  activeTabIndex = 0;
  tabIndexList = tabIndexList;
  params: object = {};
  @Select(AuthState.getPermissions)
  permissions$: Observable<UserPermissions>;
  resources = resources;
  visibleTabs = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthorizationService,
    private store: Store
  ) {
    this.permissions$.subscribe((val) => {
      this.populateVisibleTabs();
    });
  }

  ngOnInit(): void {
    this.setActiveIndexFromParams();
  }

  setActiveIndexFromParams() {
    this.route.queryParams.subscribe((params) => {
      this.params = params;
      const tabName = params['tab'];
      if (tabName) {
        const indexByParams = this.getIndexFromTabName(tabName);
        if (indexByParams === 'NaN') {
          this.router.navigateByUrl(uiroutes.DASHBOARD_ROUTE.route);
        }
        this.activeTabIndex = parseInt(indexByParams, 10);
      } else {
        // If there are no tabname params, inject the available ones here.
        // Do this after authorization is implemented
      }
    });
  }
  populateVisibleTabs() {
    const keys = Object.keys(this.tabIndexList);
    const visibleTabKeys = keys.filter((index) => {
      const tab = this.tabIndexList[index];
      switch (tab) {
        case ADMIN:
          return this.processEntities().length;

        default:
          return false;
      }
    });
    this.visibleTabs = visibleTabKeys.map((key) => this.tabIndexList[key]);
    this.setActiveIndexFromParams();
  }

  processEntities(): any[] {
    let newEntities = adminEntities.filter((e) => {
      return this.authorizeResourceMethod(e.value);
    });
    return newEntities;
  }

  authorizeResourceMethod(resource, action = '*') {
    return this.auth.authorizeResource(resource, action);
  }

  onTabChange($event) {
    const tab = this.visibleTabs[$event];
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab },
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }

  getIndexFromTabName = (tabName: string): string => {
    const index = this.visibleTabs.indexOf(tabName);

    return index?.toString();
  };
}
