import { Action, Select, State, StateContext, Store } from '@ngxs/store';

import { Injectable } from '@angular/core';
import {
  defaultSubscriptionsState,
  SubscriptionsStateModel,
} from './subscriptions.model';
import { AuthorizationService } from '../../api/authorization/authorization.service';
import { InitiateSubscriptionsAction } from './subscriptions.actions';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/modules/auth/state/auth.state';
import { RESOURCE_ACTIONS } from '../../common/models';
// import { ChatMessageSubscriptionAction } from 'src/app/modules/dashboard/modules/chat/state/chat.actions';

@State<SubscriptionsStateModel>({
  name: 'subscriptionState',
  defaults: defaultSubscriptionsState,
})
@Injectable()
export class SubscriptionsState {
  @Select(AuthState.getIsFullyAuthenticated)
  isFullyAuthenticated$: Observable<boolean>;
  isFullyAuthenticated: boolean = false;
  constructor(private auth: AuthorizationService, private store: Store) {
    this.isFullyAuthenticated$.subscribe((val) => {
      if (this.isFullyAuthenticated == false && val) {
        this.isFullyAuthenticated = val;
        // this.store.dispatch(new InitiateSubscriptionsAction());
      }
    });
  }

  @Action(InitiateSubscriptionsAction)
  initiateSubscriptions({
    getState,
    patchState,
  }: StateContext<SubscriptionsStateModel>) {
    const authorizeResourceListMethod = (resource) => {
      return this.auth.authorizeResource(resource, RESOURCE_ACTIONS.LIST);
    };
    const state = getState();
    const { subscriptionsInitiated } = state;
    if (!subscriptionsInitiated && this.isFullyAuthenticated) {
      // if (authorizeResourceListMethod(resources.ANNOUNCEMENT)) {
      //   this.store.dispatch(new AnnouncementSubscriptionAction());
      // }
    }
    patchState({
      subscriptionsInitiated: true,
    });
  }
}
