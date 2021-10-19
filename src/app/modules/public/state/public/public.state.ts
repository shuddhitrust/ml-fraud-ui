import { Action, Selector, State, Store } from '@ngxs/store';

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { defaultPublicState, PublicStateModel } from './public.model';

@State<PublicStateModel>({
  name: 'publicState',
  defaults: defaultPublicState,
})
@Injectable()
export class PublicState {
  constructor(private apollo: Apollo, private store: Store) {}
}
