// step 1: import Action from ngrx/store and payload interfaces
import { Action } from '@ngrx/store';
import { ListItem } from './custom-form.model';

// step 2: create actions
export const ADD_TO_LIKE_LIST = '[CustomApp] ADD_TO_LIKE_LIST';

export const ADD_TO_HATE_LIST = '[CustomApp] ADD_TO_HATE_LIST';

export const REMOVE_FROM_LIST = '[CustomApp] REMOVE_FROM_LIKE_LIST';

// step 3: create action creators
export class AddToLikeList implements Action {
  readonly type = ADD_TO_LIKE_LIST;
  constructor(readonly payload: ListItem) {}
}

export class AddToHateList implements Action {
  readonly type = ADD_TO_HATE_LIST;
  constructor(readonly payload: ListItem) {}
}

export class RemoveFromList implements Action {
  readonly type = REMOVE_FROM_LIST;
  constructor(readonly payload: ListItem ) {}
}

// step 4: export action creators | action types
export type AppActions = AddToLikeList | AddToHateList | RemoveFromList;
