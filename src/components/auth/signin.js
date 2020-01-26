import React, { Component } from 'react'

import SignInForm from "./signinForm.js";
import PageTitle from "../pageTitle.js";

class SignIn extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className="sign-in">
                <PageTitle className="sign-in-form__page-title" title="Login" />
                <SignInForm onSubmit={this.onSubmit} className="sign-in__form" />
            </div>
        )
    }
}

export default SignIn;