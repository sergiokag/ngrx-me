import * as FormSubmitActions from './custom-form.action';
import { FormState } from './custom-form.model';

const initialState: FormState  = {
  Category: null,
  Title: null
};

export function reducer( state = initialState , action: FormSubmitActions.SubmitFormAction) {

  console.log('form_state', { state })

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