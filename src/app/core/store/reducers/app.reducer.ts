import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { postsReducer } from './posts.redcuer';

export const appReducer: ActionReducerMap<IAppState, any> = {
    postsData: postsReducer
}