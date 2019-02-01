import { of } from 'rxjs';
import { map, switchMap, catchError, filter } from 'rxjs/operators';
import { ActionType, isOfType } from 'typesafe-actions';
import { Epic } from "redux-observable";
import {
    FETCH_COMMENT,
    FetchCommentSuccess,
    FetchCommentFail,
} from "./actions";
import { Comment } from "./models/comentModel";
import { fetchComments } from "../../services";
import * as comments from './actions';
export type CommentActions = ActionType<typeof comments>;

export const fetchCommentsEpic: Epic<CommentActions> = (action$) =>
    action$
        .pipe(
            filter(isOfType(FETCH_COMMENT)),
            switchMap(() =>
                fetchComments(true)
                    .pipe(
                        map((comments: Comment[]) =>
                            comments.map((comment: Comment) => comment.name)),
                    )
            ),
            map(comments => FetchCommentSuccess(comments)),
            catchError((error: Error) => of(FetchCommentFail(error.message)))
        )
// https://github.com/redux-observable/redux-observable/blob/master/docs/recipes/InjectingDependenciesIntoEpics.md
// https://mikebridge.github.io/articles/typescript-redux-observable-epic-test/