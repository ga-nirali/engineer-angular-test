import { Action } from '@ngrx/store';

export enum EPostsActions {
    GetPostsStart = '[Posts] Get Posts Start',
    GetPostsSuccess = '[Posts] Get Posts Success',
    GetPostsFailure = '[Posts] Get Posts Failure',
    ViewPostStart = '[Posts] View Post Start',
    ViewPostStop = '[Posts] View Post Stop'
}

export class GetPostsStart implements Action {
    readonly type = EPostsActions.GetPostsStart;
}

export class GetPostsSuccess implements Action {
    readonly type = EPostsActions.GetPostsSuccess;
    constructor(public payload: { data: any }) { }
}

export class GetPostsFailure implements Action {
    readonly type = EPostsActions.GetPostsFailure;
    constructor(public payload: { error: any }) { }
}

export class ViewPostStart implements Action {
    readonly type = EPostsActions.ViewPostStart;
    constructor(public payload: { data: any }) { }
}

export class ViewPostStop implements Action {
    readonly type = EPostsActions.ViewPostStop;
}

export type PostsActions = GetPostsStart | GetPostsSuccess | GetPostsFailure | ViewPostStart | ViewPostStop;