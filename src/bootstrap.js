import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import "./style/main.scss";

import history from "./history";

import Layout from "./components/layout.js";
import SignIn from "./components/auth/signin.js";
import SignUp from "./components/auth/signup.js";

function main() {
	ReactDOM.render(
		<Provider store={createStoreWithMiddleware(reducers)}>
			<Router history={history}>
				<Layout>
					<Switch>
						<Route path="/" exact component={SignIn}/>
						<Route path="/signin" exact component={SignIn}/>
						<Route path="/signup" exact component={SignUp}/>
					</Switch>
				</Layout>
			</Router>
		</Provider>,
	document.querySelector(".app-wrapper")
	);
}

document.addEventListener("DOMContentLoaded", main);