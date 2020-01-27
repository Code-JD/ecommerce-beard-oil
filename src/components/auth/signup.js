import React, { Component } from 'react'

import SignUpForm from "./signupForm.js";
import PageTitle from "../pageTitle.js";

class SignUp extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className="sign-up">
                <PageTitle className="sign-up-form__page-title" title="Register" />
                <SignUpForm onSubmit={this.onSubmit} className="sign-up__form" />
            </div>
        )
    }
}

export default SignUp;