import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateModel } from './CustomSeriializer';
import {RouterReducerState} from "@ngrx/router-store";

const getrouterstate = createFeatureSelector<RouterReducerState<RouterStateModel>>('router');

export const routerSelector = createSelector(
  getrouterstate,
  (state) => state.state
);
