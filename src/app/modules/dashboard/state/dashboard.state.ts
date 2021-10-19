import { State, Store } from '@ngxs/store';
import { DashboardStateModel, defaultDashboardState } from './dashboard.model';

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@State<DashboardStateModel>({
  name: 'dashboardState',
  defaults: defaultDashboardState,
})
@Injectable()
export class DashboardState {
  constructor(private apollo: Apollo, private store: Store) {}
}
