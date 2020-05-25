import React, { Suspense } from 'react';
//import { connect } from 'react-redux'
import { Page, withModel } from '@adobe/cq-react-editable-components';
import { Switch, Route } from 'react-router-dom';
//import Header from './components/header/Header';
import Tile from "./components/tiles/tile";
import RightNow from "./components/rightNow/rightnow";
//import BannerImage from "./components/bannerImage/BannerImage";
//import Fourcard from "./components/fourcards/fourcard";
import TravelTip from "./components/TravelTips/traveltip";
import Newsletter from "./components/newsletter/newsletter";
import Sidenav from "./components/sidenav/sidenav";
import Header from "./components/header/Header";
//import axios from 'axios';


import './App.scss';

// This component is the application entry point
//const BannerImage = React.lazy(() => import('./components/bannerImage/BannerImage'));
//const BannerImage = React.lazy(() => import('./components/bannerImage/BannerImage'));

const BannerImage = React.lazy(
	() =>
		new Promise((resolve, reject) =>
			setTimeout(() => resolve(import("./components/bannerImage/BannerImage")), 100)
		)
);
const Fourcard = React.lazy(
	() =>
		new Promise((resolve, reject) =>
			setTimeout(() => resolve(import("./components/fourcards/fourcard")), 5000)
		)
);
class App extends Page {
	// componentDidMount() {

	//     axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson').then(resp => {
	//         store.dispatch({
	//             type: 'SET_QUAKES',
	//             quakes: resp.data.features
	//         });
	//     });
	// }
	render() {
		//	console.log("hello saga");
		return (
			<div className="App">
				<Header />
				<div className="row">
					<div className="Wideroe_cnt_left col-lg-2 col-md-3 col-sm-3 col-xs-12">
						<Sidenav></Sidenav>
					</div>
					<div className="Wideroe_cnt_right row m0">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pad0">
							<Suspense fallback={<div>Loading...BannerImage</div>}>
								<BannerImage label="BannerImage" />
							</Suspense>
							<Tile></Tile>
							<RightNow></RightNow>
							<TravelTip></TravelTip>
							<Suspense fallback={<div>Loading...Fourcard</div>}>
								<Fourcard label="Fourcard" />
							</Suspense>
							<Newsletter></Newsletter>
						</div>
					</div>
					{this.childComponents}
					{this.childPages}
				</div>
			</div >
		);
	}
}

export default withModel(App);