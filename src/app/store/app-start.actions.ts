import { Action } from '@ngrx/store';

export enum AppStartActionTypes {
    AppInitActionType = '[AppStart] main App Component Init'

}

export class AppInit implements Action {
    readonly type = AppStartActionTypes.AppInitActionType;
}

export type AppStartActions = AppInit ;


function sayName({ first = 'Bob', last = 'Smith' }: { first?: string; last?: string } = {}) {
    const name = first + ' ' + last;
    alert(name);
}
