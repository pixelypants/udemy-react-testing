import React, { Component } from 'react';
import { connect } from "react-redux";

export interface CommentListProps {
    comments: string[];
}

class CommentList extends Component<CommentListProps> {
    renderComments() {
        return this.props.comments.map(comment => {
            return <li key={comment}>{comment}</li>
        });
    }
    render() {
        return (
            <div>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>)
    }
}

function mapStateToProps(state: any) {
    return { comments: state.commentsState.comments };
}
export default connect(mapStateToProps)(CommentList);