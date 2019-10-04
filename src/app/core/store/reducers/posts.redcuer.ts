import { intitialPostsState } from '../state/posts.state';
import { PostsActions, EPostsActions } from '../actions/posts.action';

export const postsReducer = (state = intitialPostsState, action: PostsActions) => {
    switch (action.type) {
        case EPostsActions.GetPostsStart:
            return {
                ...state
            }
        case EPostsActions.GetPostsSuccess:
            return {
                ...state,
                selectedPost: null,
                error: null,
                algoliaResponse: { ...action.payload.data }
            }
        case EPostsActions.GetPostsFailure:
            return {
                ...state,
                selectedPost: null,
                algoliaResponse: null,
                error: { ...action.payload.error }
            }
        case EPostsActions.ViewPostStart:
            return {
                ...state,
                selectedPost: { ...action.payload.data }
            }
        case EPostsActions.ViewPostStop:
            return {
                ...state,
                selectedPost: null
            }
        default:
            return state;
    }
}