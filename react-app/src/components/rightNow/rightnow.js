import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { MapTo } from '@adobe/cq-react-editable-components';
import { Link } from "react-router-dom";
//import Rightnow_Data from "./rightnowdata";
import selectRightNow from "../../redux/rightnow/rightnow.selectors"
require('./rightnow.scss');

const EditConfig = {

	emptyLabel: 'Right-Now',

	isEmpty: function () {
		return !this.props || !this.props.cqModel || this.props.cqModel.isEmpty;
	}
};

class RightNow extends Component {

	render() {
		const { rightNow} = this.props;
		return (
			<div className="Rightnow-contiainer">
				<h3>{rightNow.RightNowData.H3_header_data}</h3>
				<div className="row">
					{
						rightNow.RightNowData.card_gallery.map((gallerydata, index) => (
							<div className="gallery col-4" key={index}>
								<div className="card gallery ">
									<Link to={gallerydata.Link} >
										<div className="imgContainer overflow-hidden">
											<img className="card-img-top img-responsive" src={gallerydata.image.src} alt={gallerydata.image.alter_text} />
										</div>
										<div className="p-4">
											<h4 className="gallery-title">{gallerydata.gallery_title}</h4>
											<p className="gallery-text">{gallerydata.gallery_text_content}</p>
										</div>
									</Link>
								</div>

							</div>
						))
					}
				</div>
			</div>);
	}
}

const mapStateToProps = createSelector(
	selectRightNow,
	rightNow => ({
	rightNow:rightNow
})
);
const RightNowWithConnect = connect(mapStateToProps, null)(RightNow)
export default (MapTo('my-react-app/components/content/RightNow')(RightNowWithConnect, EditConfig));
//RightNow.defaultProps = Rightnow_Data;