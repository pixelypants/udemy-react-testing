import React, { Component, useImperativeMethods } from 'react';
import { connect } from "react-redux";
import * as commentActions from "../store/comments/actions";
class CommentBox extends Component {
    state = { comment: '' };

    handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // TODO: Call an action creator
        // and save the comment using redux

        this.setState({ comment: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={this.handleChange} value={this.state.comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default connect(null, commentActions)(CommentBox);