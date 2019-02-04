import React, { Component } from "react";
import { History } from "history";
import { connect } from "react-redux";

export interface AuthProps {
    isLoggedIn: boolean;
    history: History
}

export default (ChildComponent: any) => {
    class CompossedComponent extends Component<AuthProps> {
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
        render() {
            return <ChildComponent {...this.props} />
        }
    }

    function mapStateToProps(state: any) {
        return { isLoggedIn: state.auth.isLoggedIn };
    }

    return connect(mapStateToProps)(CompossedComponent);
};