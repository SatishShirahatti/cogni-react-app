import React, { Component } from 'react';
import wideroe_logo_white from "../../assets/images/wideroe_logo_white.svg";
import FloatingLabelInput from "../Floatlabel/Floatlabel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom"
require('./sidenav.scss');


export default class Sidenav extends Component {
    state = {
        outDate: '',
        returnDate: '',
    }
    constructor() {
        super();
        this.handleTripChange = this.handleTripChange.bind(this);
        this.outDatehandleChange = this.outDatehandleChange.bind(this);
        this.returnDatehandleChange = this.returnDatehandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleTripChange = e => {
        console.log("hi")
        if (e.target.checked) {
            console.log(e.target.value);
        }
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    outDatehandleChange = (date) => {
        console.log("date", date)
        this.setState({
            outDate: date
        });

    };
    returnDatehandleChange = (date) => {
        console.log("date", date)
        this.setState({
            returnDate: date
        });

    };
    render() {
        return (
            <div>
                <div className="sideNav">
                    <div className="wideroeLogo">
                        <img src={wideroe_logo_white} alt="Widerøe Logo" />
                    </div>
                    <div className="findTickets findTktExpand">
                        <div className="calenderContainer">
                            <h2>Bestill flybilletter</h2>
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 tripDiv hidden-xs">
                                        <div className="triptype">
                                            <span>
                                                <input type="radio" id="roundtrip" name="options"
                                                    value="roundtrip"
                                                    defaultChecked
                                                    onChange={this.handleTripChange}
                                                />
                                                <label htmlFor="roundtrip">Round trip</label>
                                            </span>
                                            <span>
                                                <input type="radio" id="oneWay" name="options"
                                                    value="oneWay"
                                                    onChange={this.handleTripChange}
                                                />
                                                <label htmlFor="oneWay">One Way</label>
                                            </span>

                                        </div>
                                    </div>
                                    <FloatingLabelInput placeholder="Fly fra" />
                                    <FloatingLabelInput placeholder="Fly til" />


                                    <div className="">
                                        <div className="inputContainer col-6 p-0 d-inline-flex" >
                                            <DatePicker selected={this.state.outDate}
                                                // monthsShown={2}
                                                onChange={this.outDatehandleChange} />
                                        </div>
                                        <div className="inputContainer inputBorderLeft col-6 p-0 d-inline-flex" >
                                            <DatePicker selected={this.state.returnDate} onChange={this.returnDatehandleChange} />
                                        </div>
                                    </div>
                                    <div className="inputContainer inputBorderTop">
                                        <FloatingLabelInput placeholder="1 Voksen" />
                                    </div>

                                </div>


                                <button className="submitBtn" type="submit">SØK</button>
                                <Link to="_blank" className="addDiscount">
                                    <span>+</span> <span>Legg til rabattkode</span>
                                </Link>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
