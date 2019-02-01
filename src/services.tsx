import { ajax } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { Comment } from "./store/comments/models/comentModel";

const commentData: Comment[] = [
    {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos."
    },
    {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam."
    },
    {
        "postId": 1,
        "id": 3,
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur."
    },
    {
        "postId": 1,
        "id": 4,
        "name": "alias odio sit",
        "email": "Lew@alysha.tv",
        "body": "non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem."
    }
];

const url = 'https://jsonplaceholder.typicode.com/comments';
export const fetchComments = (isMocked = false): Observable<Comment[]> => {
    if (isMocked) {
        return of<Comment[]>(commentData);
    }
    return ajax.getJSON<Comment[]>(url);
}