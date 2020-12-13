import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/home/home.page";
import DetallePage from "./pages/detalle/detalle.page";
import ContactoPage from "./pages/contacto/contacto.page";
import Layout from "./components/layout/layout.component";

import { Provider } from "react-redux";

import store from "./store/index";

import { CSSTransition } from "react-transition-group";
import "./App.css";

function App() {
	return (
		<div>
			<Provider store={store}>
				<BrowserRouter>
					<Layout>
						
							<Route exact path="/">
								{(props) => (
									<CSSTransition
										in={props.match != null}
										timeout={300}
										classNames="page"
										unmountOnExit
									>
										<div className="page">
											<HomePage />
										</div>
									</CSSTransition>
								)}
							</Route>

							<Route exact path="/detalle/:id">
								{(props) => (
									<CSSTransition
										in={props.match != null}
										timeout={300}
										classNames="page"
										unmountOnExit
									>
										<div className="page">
											<DetallePage />
										</div>
									</CSSTransition>
								)}
							</Route>
							<Route exact path="/contacto">
								{(props) => (
									<CSSTransition
										in={props.match != null}
										timeout={300}
										classNames="page"
										unmountOnExit
									>
										<div className="page">
											<ContactoPage />
										</div>
									</CSSTransition>
								)}
							</Route>
					</Layout>
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
