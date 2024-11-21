import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from './custom-serializer';
import { RouterReducerState } from '@ngrx/router-store';

const getrouterstate = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const routerSelector = createSelector(getrouterstate, (state) => state);
