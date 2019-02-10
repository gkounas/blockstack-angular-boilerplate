import { Action, createSelector } from '@ngrx/store';
import { AppStartActions, AppStartActionTypes } from './app-start.actions';
import { AppState } from '.';

export interface AppStartState {
    started: boolean
}

export const initialState: AppStartState = {
    started: false
};

export function reducer(state = initialState, action: AppStartActions): AppStartState {
    switch (action.type) {

        case AppStartActionTypes.AppInitActionType:
            return {
                ...state,
                started: true,
            };

        default:
            return state;
    }
}

export const selectAppStartState = (root: AppState) => root.appStart;
export const selectAppStarted = createSelector(
    selectAppStartState,
    (state: AppStartState) => state.started
);


