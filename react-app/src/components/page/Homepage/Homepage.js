
import React, { Component } from 'react';
import Header from "../../header/Header";
import { withRoute } from '../../../utils/RouteHelper';
import { Page, MapTo, withComponentMappingContext } from "@adobe/cq-react-editable-components";
require('./Homepage.scss');

export default class JobNorge extends Page {

	get containerProps() {
		let attrs = super.containerProps;
		attrs.className = (attrs.className || '') + ' WkndPage ' + (this.props.cssClassNames || '');
		return attrs
	}
render(){
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


MapTo('wknd-events/components/structure/page/FirstArticle')(withComponentMappingContext(withRoute(JobNorge)));

