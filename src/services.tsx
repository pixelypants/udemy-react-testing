import { ajax } from 'rxjs/ajax';
import { Comment } from "./store/comments/models/comentModel";

const url = 'https://jsonplaceholder.typicode.com/comments';
export const fetchComments = () =>
    ajax.getJSON<Comment[]>(url);