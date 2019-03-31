import * as FormSubmitActions from './custom-form.action';
import { FormState } from './custom-form.model';

const initialState: FormState  = {
  CategoryList: null,
  TitleInput: null
};

export function reducer( state = initialState , action: FormSubmitActions.SubmitFormAction) {

  switch(action.type) {
    case FormSubmitActions.SUBMIT_FORM:
      return {
        ...state,
        ...action.payload,
      };
    default:
     return state;
  };
};