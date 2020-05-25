import React, { Component } from 'react';
import { createSelector } from 'reselect';
import selectAirport from "../../redux/airportList/airportlist.selectors";
import { MapTo } from '@adobe/cq-react-editable-components';
import { AirportList_Start} from "../../redux/airportList/airportlist.action";
import { connect } from 'react-redux';
import {bindActionCreators} from "redux"
require('./newsletter.scss');
//import { MapTo } from '@adobe/cq-react-editable-components';
/**
 * Default Edit configuration for the Image component that interact with the Core Image component and sub-types
 *
 * @type EditConfig
 */

 class Newsletter extends Component {


    render() {
		const { Airport } = this.props;
        return (
            <div className="newsletterContainer">
                <div className="row m0">
                    <h3 className="heading m0 col-12 text-center">Motta tilbud og nyheter først</h3>
                    <div className="row m0">
                        <form action="">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 p0">
                                <div className="row m0">
                                    <div className="col-md-4 p0">
                                        <label>E-post</label>
                                        <input type="email" className="form-control form-field" id="news_email" name="news_email" required="required"
                                            aria-required="true" aria-invalid="false" aria-describedby="formEmailError"/>
                                        </div>
                                        <div className="col-md-4 p0">
                                            <label >Velg din flyplass</label>
										<select className="form-control form-field" data-toggle="dropdown" aria-describedby="formPrefAirportError"
											required="required" aria-required="true" aria-invalid="false" aria-expanded="false">
											<option className="preferredOption" value="" disabled="disabled">- Velg -</option>
											{Airport.airports && Airport.airports.map((airport, i) => ((
												<option label={airport.city} value={airport.airportCode} key={i}>{airport.airport}</option>
											))
											)}
										</select>
                                        </div>


                                        <div className="col-md-2 p0">
                                            <label >Språk</label>
                                            <select className="form-control form-field" id="news_language" name="news_language" data-toggle="dropdown"
                                                required="required" aria-required="true" aria-invalid="false" aria-expanded="false">
                                                <option className="preferredOption" defaultValue="nb_no">Norsk</option>
                                                <option className="preferredOption" value="en_us">Engelsk</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12 col-lg-2 visible-lg p0">
                                            <label className="form-label">&nbsp;</label>
                                            <button type="submit" className="form-control btn-submit-desktop" id="news_submit_desktop">Abonner</button>
                                        </div>
                                    </div>
                                    <div className="row m0" >
                                        <div className="col-xs-12 p0">
                                            <label id="boxCheck" className="boxCheck consent-check">
                                                <span className="boxCheck_wrap" style={{marginRight: "10px"}}>
                                                    <input id="news_consent" type="checkbox" name="offerAlert"
                                                        aria-describedby="formConsentError"
                                                         aria-invalid="false"/>
                                                        <i className="checkClose "></i>  </span>

                                                    <span>Ja, jeg vil gjerne motta informasjon om Widerøe, kampanjer og personaliserte tilbud i henhold til
                  				Widerøes <a href="/om-selskapet/personvern.html" target="_blank"
                                                            aria-label="Personvernerklæringopens in a new window">Personvernerklæring</a>.
                                    
                </span>

              </label>
            </div>
                                        </div>
                                    </div>
      </form>

                            </div>
  </div>
                    </div>

                    );
                }
            }


const mapStateToProps = createSelector(
	selectAirport,
	Airport => ({ Airport: Airport })
)

const mapDispatchToProps = dispatch => bindActionCreators({ AirportList_Start}, dispatch)
const AirportWithConnect = connect(mapStateToProps, mapDispatchToProps)(Newsletter)
//export default connect(mapStateToProps, mapDispatchToProps)(Newsletter)

export default MapTo('my-react-app/components/content/Newsletter')(AirportWithConnect);
// const mapStateToProps = state => ({data : state.data})
// export default connect(mapStateToProps, mapDispatchToProps)(Newsletter)