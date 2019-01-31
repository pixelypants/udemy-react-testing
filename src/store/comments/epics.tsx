import { ajax } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, filter, tap, flatMap, mergeMap, take } from 'rxjs/operators';
import { ActionType, getType, StateType, isOfType } from 'typesafe-actions';
import { Epic, ofType, ActionsObservable } from "redux-observable";
import {
    FETCH_COMMENT,
    FETCH_COMMENT_SUCCESS,
    FETCH_COMMENT_FAIL,
    FetchCommentSuccess,
    FetchCommentFail,
    FetchComments
} from "./actions";
import { Comment } from "./models/comentModel";
import { fetchComments } from "../../services";
import * as comments from './actions';
export type CommentActions = ActionType<typeof comments>;

export const fetchCommentsEpic: Epic<CommentActions> = (action$, store, { api }) =>
    action$
        .pipe(
            filter(isOfType(FETCH_COMMENT)),
            switchMap(() => {
                return fetchComments()
                    .pipe(
                        map((comments: Comment[]) =>
                            comments.map((comment: Comment) => comment.name)))
            }),
            map(comments => FetchCommentSuccess(comments)),
            catchError((error: Error) => of(FetchCommentFail(error.message)))
        )

// https://github.com/redux-observable/redux-observable/blob/master/docs/recipes/InjectingDependenciesIntoEpics.md
// https://mikebridge.github.io/articles/typescript-redux-observable-epic-test/