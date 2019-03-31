
// ActionReducerMap
import { ActionReducerMap } from '@ngrx/store';
import * as formReducer from '../../app/components/custom-form/custom-form.reducer';
import { IAppState } from 'src/app/app.model';

export const reducers: ActionReducerMap<IAppState> = {
  formState: formReducer.reducer
};

