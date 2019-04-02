import { ActionReducerMap } from '@ngrx/store';
import * as appReducer from '../../app/components/custom-form/custom-form.reducer';
import { IAppState } from 'src/app/app.model';

export const reducers: ActionReducerMap<IAppState> = {
  app: appReducer.reducer
};
