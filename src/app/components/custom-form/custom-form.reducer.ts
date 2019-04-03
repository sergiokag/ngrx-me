import * as FormSubmitActions from './custom-form.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './custom-form.model';

const initialState: AppState  = {
  LikeList: [],
  HateList: []
};


const getListFeatureState = createFeatureSelector<AppState>('app');
export const getLikeList = createSelector(
  getListFeatureState,
  state => state.LikeList // projector function
);

export const getHateList = createSelector(
  getListFeatureState,
  state => state.HateList // projector function
)

export function reducer( state = initialState , action: FormSubmitActions.AppActions): AppState {

  console.log('app_state', { state })

  switch(action.type) {
    case FormSubmitActions.ADD_TO_LIKE_LIST:
      return {
        ...state,
        LikeList: [...state.LikeList, action.payload ]
      };
    case FormSubmitActions.ADD_TO_HATE_LIST:
      return {
        ...state,
        HateList: [...state.HateList, action.payload ]
      };
    case FormSubmitActions.REMOVE_FROM_LIST:
      return {
        ...state,
        LikeList: state.LikeList.filter( el => el.id !== action.payload.id ),
        HateList: state.HateList.filter( el => el.id !== action.payload.id )
      };
    default:
     return state;
  };

};