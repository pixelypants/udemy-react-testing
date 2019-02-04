import React, { Component, useImperativeMethods } from 'react';
import { connect } from "react-redux";
import { ActionType, getType, StateType } from 'typesafe-actions';
import { History } from "history";

import * as comments from '../store/comments/actions';

export interface CommentBoxProps {
    isLoggedIn: boolean;
    history: History
    SaveComment: typeof comments.SaveComment;
    FetchComments: typeof comments.FetchComments;
}

class CommentBox extends Component<CommentBoxProps> {
    state = { comment: '' };

    componentDidMount() {
        this.isAuthenticated();
    }

    componentDidUpdate() {
        this.isAuthenticated();
    }

    isAuthenticated() {
        if (!this.props.isLoggedIn) {
            this.props.history.push('/');
        }
    }

    handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let comment = this.state.comment;
        if (comment != '') {
            this.props.SaveComment(this.state.comment);
            this.setState({ comment: '' })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.FetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

function mapStateToProps(state: any) {
    return { isLoggedIn: state.auth.isLoggedIn };
}

export default connect(mapStateToProps, comments)(CommentBox);