import { IPostsState, intitialPostsState } from './posts.state';

export interface IAppState {
    postsData: IPostsState
}

export const initialAppState: IAppState = {
    postsData: intitialPostsState
}