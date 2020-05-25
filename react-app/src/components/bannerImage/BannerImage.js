import React, { Component } from 'react';
import { MapTo } from '@adobe/cq-react-editable-components';
import desktopImage from "../../assets/images/hero-image.jpg";
import TabletImage from "../../assets/images/bannerTablet.jpg";
import './BannerImage.scss';
import LazyLoad from 'react-lazyload';
import Image from "../image/Image";
require('../../utils/Icons');

var divStyle = {

	height: "auto",
	width: "100%"
};
var divStyleAnchor = {
	maxHeight: "506px",
	height: "506px",
};
const Spinner = () => (
	<div className="post loading">
		<svg
			width="80"
			height="80"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
		>
			<circle
				cx="50"
				cy="50"
				fill="none"
				stroke="#49d1e0"
				strokeWidth="10"
				r="35"
				strokeDasharray="164.93361431346415 56.97787143782138"
				transform="rotate(275.845 50 50)"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					calcMode="linear"
					values="0 50 50;360 50 50"
					keyTimes="0;1"
					dur="1s"
					begin="0s"
					repeatCount="indefinite"
				/>
			</circle>
		</svg>
	</div>
);
const BannerImageEditConfig = {

	emptyLabel: 'BannerImage',

	isEmpty: function () {
		return !this.props || !this.props.src || this.props.src.trim().length < 1;
	}
};

class BannerImage extends Component {


	render() {

		const bannerImage = window.innerWidth >= 768 ? desktopImage : TabletImage;
		return (
			<>
				<LazyLoad
					height={500}
					once={true}
					debounce={300}
					placeholder={<Spinner />}>
					<a href="/vare-billigste-flybilletter.html" className="homeBanner heroBanner hidden-xs"
						style={divStyleAnchor}>
						<div className="caption_Fbanner caption_homebanner right bannerOpacity">
							<div>
								<span className="bannerDesc">Våre billigste flybilletter</span>
								<span className="bannerDesc"></span>

								<span className="act_btn btn right bestoffersGreen">Bestill nå</span>

							</div>
						</div>
						<Image className="bannerImage img-responsive"
							alt="banner" src={bannerImage} style={divStyle} />
					</a>
				</LazyLoad>
			</>
		);
	}
}

export default MapTo('my-react-app/components/content/BannerImage')(BannerImage, BannerImageEditConfig);
