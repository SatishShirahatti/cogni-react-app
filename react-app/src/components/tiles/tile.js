import React, { Component } from 'react';
import { MapTo } from '@adobe/cq-react-editable-components';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bookingIcon from "../../assets/images/booking_icon.svg";
import CheckinnIcon from "../../assets/images/checkinn_icon.svg";
import ExploreIcon from "../../assets/images/explore_icon.svg";
import FlightIcon from "../../assets/images/flight_on_time_plane.svg";
import LazyLoad from 'react-lazyload';
import './tile.scss';
require('../../utils/Icons');

const Loading = () => (
    <div>
        <div className="tile loading">
            <h1>Loading tiles</h1>
        </div>
    </div>
)

const EditConfig = {

    emptyLabel: 'My-Tile',

    isEmpty: function () {
        return !this.props || !this.props.cqModel || this.props.cqModel.isEmpty;
    }
};
class Tile extends Component {

    get homeLink() {
        let currLocation;
        currLocation = this.props.location.pathname;
        currLocation = currLocation.substr(0, currLocation.length - 5);

        if (this.props.navigationRoot && currLocation !== this.props.navigationRoot) {
            return (<Link className="Header-action" to={this.props.navigationRoot + ".html"}>
                <FontAwesomeIcon icon="chevron-left" />
            </Link>);
        }
        return null;
    }

    render() {
        return (
            <div className="my-tile">
                <div className="tile-container">
                    <div className="callouts">
                        <ul>
                            <LazyLoad
                                placeholder={<Loading />}>
                                <li className="col-md-3 col-sm-6 col-xs-6">
                                    <Link to="#">
                                        <span className="imgWrap">
                                            <img src={bookingIcon} alt="img1"></img>
                                        </span>
                                        <span>My travels</span>
                                    </Link>
                                </li>
                            </LazyLoad>
                            <LazyLoad
                                placeholder={<Loading />}>
                                <li className="col-md-3 col-sm-6 col-xs-6">
                                    <Link to="#">
                                        <span className="imgWrap">
                                            <img src={CheckinnIcon} alt="img2"></img>
                                        </span>
                                        <span>Check in!</span>
                                    </Link>
                                </li>
                            </LazyLoad>
                            <LazyLoad
                                placeholder={<Loading />}>
                                <li className="col-md-3 col-sm-6 col-xs-6">
                                    <Link to="#">
                                        <span className="imgWrap">
                                            <img src={ExploreIcon} alt="img3"></img>
                                        </span>
                                        <span>Is the plane on route?</span>
                                    </Link>
                                </li>
                            </LazyLoad>
                            <LazyLoad
                                placeholder={<Loading />}>
                                <li className="col-md-3 col-sm-6 col-xs-6">
                                    <Link to="#">
                                        <span className="imgWrap">
                                            <img src={FlightIcon} alt="img4"></img>
                                        </span>
                                        <span>Classic wideroe.no</span>
                                    </Link>
                                </li>
                            </LazyLoad>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MapTo('my-react-app/components/content/Tile')(Tile, EditConfig);
