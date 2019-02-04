import React, { Component } from 'react'
import CommentBox from './CommentBox'
import CommentList from './CommentList';
import { connect } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import * as authActions from "../store/auth/actions";

export interface AppProps {
    auth: boolean;
    changeAuth: typeof authActions.changeAuth;
}

class App extends Component<AppProps> {
    renderButton() {
        if (this.props.auth) {
            return (
                <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
            )
        } else {
            return (
                <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
            )
        }
    }
    renderHeader() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li>{this.renderButton()}</li>
            </ul>
        );
    }
    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox} />
                <Route path="/" exact component={CommentList} />
            </div>
        );
    }
};

function mapStateToProps(state: any) {
    return { auth: state.auth.isLoggedIn };
}

export default connect(mapStateToProps, authActions)(App);