import React, { Component } from 'react'

import SignUpForm from "./signupForm.js";
import PageTitle from "../pageTitle.js";

import { connect } from "react-redux";
import * as actions from "../../actions"

class SignUp extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

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

SignUp = connect(null, actions)(SignUp);

export default SignUp;