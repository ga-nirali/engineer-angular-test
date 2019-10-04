import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { EPostsActions, GetPostsStart, GetPostsSuccess, GetPostsFailure } from '../actions/posts.action';
import { AlgoliaService } from '../../services/algolia.service';


@Injectable()
export class PostsEffects {
    @Effect() getPosts$;

    constructor(
        private _actions$: Actions,
        private _algoliaService: AlgoliaService
    ) {
        this.getPosts$ = this._actions$
            .pipe(
                ofType(EPostsActions.GetPostsStart),
                switchMap((action: GetPostsStart) => {
                    return this._algoliaService.getPosts()
                        .pipe(
                            map(response => new GetPostsSuccess({ data: response })),
                            catchError(error => of(new GetPostsFailure({ error })))
                        )
                })
            )
    }
}