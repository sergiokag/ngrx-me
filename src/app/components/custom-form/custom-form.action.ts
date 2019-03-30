// step 1: import Action from ngrx/store
import { Action } from '@ngrx/store';

// step 2: create actions
export const SUBMIT_FORM = '[CustomForm] Submit form';

// step 3: create action creators
export class SubmitForm implements Action {
  readonly type = SUBMIT_FORM;
  constructor(readonly payload: { CategoryList: string, TitleInput: string }) {}
}

// step 4: export action creators | action types
export type SubmitFormAction = SubmitForm;
