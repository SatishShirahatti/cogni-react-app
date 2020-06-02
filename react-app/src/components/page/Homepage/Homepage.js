
import React, { Component } from 'react';
import Header from "../../header/Header";
import { withRoute } from '../../../utils/RouteHelper';
import { createSelector } from 'reselect';
import selectjobNorge from "../../../redux/jobNorge/jobnorge.selectors";
import { JobNorgeData_Start } from "../../../redux/jobNorge/jobnorge.action";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { MapTo, withComponentMappingContext } from "@adobe/cq-react-editable-components";
require('./Homepage.scss');

const API = 'https://dev-api.wideroe.no/jobbnorge/v1/jobs/retrieve?language=nb';
export default class JobNorge extends Component {

constructor(props){
super(props);

	this.state ={
	jobdata :null
}
}
	get containerProps() {
		let attrs = super.containerProps;
		attrs.className = (attrs.className || '') + ' WkndPage ' + (this.props.cssClassNames || '');
		return attrs
	}
componentDidMount(){
	fetch(API)
	.then(response => response.json())
	.then(data => this.setState({ data }));

}


render(){
	const { data } = this.state;
	console.log("jobdata", this.props)
	console.log("jobdata full data", data)
 return(
<div>
 <Header/>
		 <div className="jobVacancies section">
			 <div className="jobNorgeContainer hidden-xs">
		{ data && data.map((item, index)=>(
	<div key={index}>
				<div className="title">Pilot</div>
			 <div className="subHeader">Her finner du en oversikt over ledige stillinger i Widerøe-konsernet</div>
			 <div className="jobs">
				 <div className="row headerFields">
					 <div className="col-6 ">  Jobb &amp; Avdeling</div>
					 <div className="col-3 ">Plassering</div>
					 <div className="col-3 "> Frist</div>
				 </div>
			<div>
						 <div className="row jobRow">
							 <div className="col-6 ">
						<Link to={item.link} target="_blank" aria-label={item.description}>
									<div className="positionTitle ">{item.positiontitle}</div>
									<div className="postitionDescription">{item.description}</div>
						 </Link>
							 </div>
								<div className="col-3">{item.location}</div>
								<div className="col-3 paddingDeadline ">{item.deadline}</div>
							 <i className="fa fa-angle-right arrowIcon"></i>
						 </div>
				 </div>
            </div>
	</div>
		))	}
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
MapTo('wknd-events/components/structure/page/FirstArticle')
(withComponentMappingContext(withRoute(jobNorgeWithConnect)));

