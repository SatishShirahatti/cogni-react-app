import React from 'react';
import ReactDOM from 'react-dom';
//import { ModelManager, Constants } from '@adobe/cq-spa-page-model-manager';
import './index.scss';
import App from './App';
import "./components/MappedComponents";
import ScrollToTop from './utils/RouteHelper';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Redirect, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';

import { store, persistor } from './redux/store';
import JobNorge from "./components/page/Homepage/Homepage"



	ReactDOM.render((
		<Provider store={store}>
		<BrowserRouter>
				<PersistGate persistor={persistor}>
					<Switch>
			<Route exact path="/" component={App}></Route>
			<Route path="/JobNorge" component={JobNorge}></Route>
			<Route></Route>
					</Switch>
			</PersistGate>
		</BrowserRouter>
</Provider>
	

	),
		document.getElementById('root'));

	

serviceWorker.register();

// <ScrollToTop>
// 	<Route exact path="/content/wknd-events/react.html" render={() => (
// 		<Redirect to="/content/wknd-events/react/home.html" />
// 	)} />
// 	<Route path="/first-article" component={FirstArticle}></Route>
// 	<App cqChildren={model[Constants.CHILDREN_PROP]} cqItems={model[Constants.ITEMS_PROP]} cqItemsOrder={model[Constants.ITEMS_ORDER_PROP]}
// 		cqPath={ModelManager.rootPath} locationPathname={window.location.pathname} />
// </ScrollToTop>
//ModelManager.initialize({ path: process.env.REACT_APP_PAGE_MODEL_PATH }).then(render);
