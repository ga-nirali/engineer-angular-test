import { Post } from '../../interfaces/post.interface';
import { Algolia } from '../../interfaces/algolia.interface';

export interface IPostsState {
    algoliaResponse: Algolia;
    selectedPost: Post;
    error: any
}

export const intitialPostsState: IPostsState = {
    algoliaResponse: null,
    selectedPost: null,
    error: null
};
