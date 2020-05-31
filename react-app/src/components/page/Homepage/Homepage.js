
import React, { Component } from 'react';
import Header from "../../header/Header";
import { withRoute } from '../../../utils/RouteHelper';
import { createSelector } from 'reselect';
import selectjobNorge from "../../../redux/jobNorge/jobnorge.selectors";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux"
import { JobNorgeData_Start } from "../../../redux/jobNorge/jobnorge.action";
import { Page, MapTo, withComponentMappingContext } from "@adobe/cq-react-editable-components";
require('./Homepage.scss');

export default class JobNorge extends Component {

	get containerProps() {
		let attrs = super.containerProps;
		attrs.className = (attrs.className || '') + ' WkndPage ' + (this.props.cssClassNames || '');
		return attrs
	}
componentDidMount(){
	console.log("in mount", this.props);
	//this.props.JobNorgeData_Start();
}


render(){
	const { jobNorge} = this.props;
	console.log("jobdata", this.props)
	console.log("jobdata full data", jobNorge)
 return(
<div>
 <Header/>
		 <div className="jobVacancies section">
			 <div className="jobNorgeContainer hidden-xs">
			 <div className="title">Ledige stillinger</div>
			 <div className="subHeader">Her finner du en oversikt over ledige stillinger i Widerøe-konsernet</div>
			 <div className="jobs">
				 <div className="row headerFields">
					 <div className="col-6 ">  Jobb &amp; Avdeling</div>
					 <div className="col-3 ">Plassering</div>
					 <div className="col-3 "> Frist</div>
				 </div>
			<div className="ng-scope">
					 <a ng-href="https://www.jobbnorge.no/ledige-stillinger/stilling/183777/pilot" target="_blank" href="https://www.jobbnorge.no/ledige-stillinger/stilling/183777/pilot" aria-label="Pilot
				Widerøes Flyveselskap
				Base tildeles etter behov
				Løpendeopens in a new window">
						 <div className="row jobRow">
							 <div className="col-6 ">
								 <div className="positionTitle ng-binding">Pilot</div>
								 <div className="postitionDescription ng-binding">Widerøes Flyveselskap</div>
							 </div>
							 <div className="col-3 ng-binding">Base tildeles etter behov</div>
							 <div className="col-3 paddingDeadline ng-binding">Løpende</div>
							 <i className="fa fa-angle-right arrowIcon"></i>
						 </div>
					 </a>
				 </div>
            </div>
		 </div>
		 </div>
</div>
)
}

}
 const mapStateToProps = createSelector(
	 selectjobNorge,
	 jobNorge => ({ jobNorge: jobNorge})		
);

//const mapDispatchToProps = dispatch => bindActionCreators({ JobNorgeData_Start }, dispatch)

const jobNorgeWithConnect = connect(mapStateToProps, {JobNorgeData_Start})(JobNorge)
MapTo('wknd-events/components/structure/page/FirstArticle')(withComponentMappingContext(withRoute(jobNorgeWithConnect)));

