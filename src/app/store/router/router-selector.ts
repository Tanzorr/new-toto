import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateModel, RouterStateUrl } from './custom-serializer';
import { RouterReducerState } from '@ngrx/router-store';

// @ts-ignore
const getrouterstate = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const routerSelector = createSelector(getrouterstate, (state) => state);
