import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { MapTo } from '@adobe/cq-react-editable-components';
import LazyLoad from 'react-lazyload';
import PlaceholderComponent from "../placeholder/placeholder";
//import FourCard_Data from "./fourcardjson";
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import selectFourcard from "../../redux/fourcards/fourcard.selectors";
require('./fourcard.scss');

/**
 * Default Edit configuration for the Image component that interact with the Core Image component and sub-types
 *
 * @type EditConfig
 */

const EditConfig = {

	emptyLabel: 'Four-Card',

	isEmpty: function () {
		return !this.props || !this.props.cqModel || this.props.cqModel.isEmpty;
	}
};

class Fourcard extends Component {
	render() {
		const { Fourcard} = this.props
		console.log("card_gallery", Fourcard.FourCardData.card_gallery);
		return (
			<div className="fourcard-contiainer">
				<div className="row">
					{
						Fourcard.FourCardData.card_gallery.map((gallerydata, index) => (
							<LazyLoad height={200}
								offset={[-200, 0]}
								debounce={500}
								placeholder={<PlaceholderComponent />} key={index}>
								<div className="gallery col-md-3">
									<div className="card gallery ">
										<Link to={gallerydata.Link} >
											<div className="imgContainer overflow-hidden">
												<img className="card-img-top img-responsive" src={gallerydata.image.src} alt={gallerydata.image.alter_text} />
											</div>
											<div className="p-4">
												<h3 className="gallery-title">{gallerydata.gallery_title}</h3>
											</div>
										</Link>
									</div>

								</div>
							</LazyLoad>
						))
					}
				</div>
			</div>);
	}
}
const mapStateToProps = createSelector(
 selectFourcard,
	Fourcard => ({ Fourcard: Fourcard})
)

const FourcardWithConnect = connect(mapStateToProps, null)(Fourcard)
export default MapTo('my-react-app/components/content/Fourcard')(FourcardWithConnect, EditConfig);

//Fourcard.defaultProps = FourCard_Data;