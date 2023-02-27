import React, {Component} from "react";

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
        };
    }

    signIn = () => {
        this.setState({isAuthenticated: true});
    }

    login = () => {
        this.setState({isAuthenticated: true});
    }

    logout = () => {
        this.setState({isAuthenticated: false});
    }

    render() {
        if (this.state.isAuthenticated) {
            return (
                <button type="button" className="btn btn-outline-primary me-2" onClick={this.logout}>Logout</button>
            );
        }
        return (
            <>
                <button type="button" className="btn btn-primary" onClick={this.signIn}>Sign-up</button>
                <button type="button" className="btn btn-outline-primary me-2" onClick={this.login}>Login</button>
            </>
        );
    }
}

export default Auth;