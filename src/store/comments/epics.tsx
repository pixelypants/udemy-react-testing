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

import * as comments from './actions';
export type CommentActions = ActionType<typeof comments>;

const url = 'https://jsonplaceholder.typicode.com/comments';
export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export const fetchCommentsEpic: Epic<CommentActions> = (action$) =>
    action$
        .pipe(
            filter(isOfType(FETCH_COMMENT)),
            switchMap(() => {
                return ajax
                    .getJSON<Comment[]>(url)
                    .pipe(
                        map((comments: Comment[]) =>
                            comments.map((comment: Comment) => comment.name)))
            }),
            map(comments => FetchCommentSuccess(comments)),
            catchError((error: Error) => of(FetchCommentFail(error.message)))
        )


// export const fetchCommentsEpic: Epic<CommentActions> = (action$) =>
//     action$.pipe(
//         filter(isOfType(FETCH_COMMENT)),
//         switchMap((action: CommentActions) => (
//             ajax
//                 .getJSON(url)
//                 .pipe(
//                     tap(comment => comment),

//                     // switchMap((comments) => FetchCommentSuccess(comments))
//                 )
//         ))
//             .map((comments: string[]) => FetchCommentSuccess(comments))
//             .catchError((error: Error) => of(FetchCommentFail(error.message)))


        //     fetchProducts(): Observable < Product[] > {
        //     return this.http.get("http://examples.com/myData")
        //         .map((response) => {
        //             return response.json().products;
        //         })
        //         .switchMap(productArray => {
        //             return Observable.from(productArray);
        //         })
        //         .map((productData: any) => {
        //             return new Product(
        //                 productData.id,
        //                 productData.name,
        //                 productData.materials
        //             );
        //         })
        //         .toArray();
        // }