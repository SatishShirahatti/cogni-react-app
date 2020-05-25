import React from "react";
import {Link} from "react-router-dom"
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
require('./Menuitems.scss');


const  MenuItems =() =>{

return (

	<div className="modal-body">
		<Container className="search-grid">
			<Row >
				<div className="m0 hidden-xs">

			<div className="input-group">
				<input className="form-control menu_input " type="text"  placeholder="Søk på wideroe.no" />
					<button  className="input-group-addon autoWidth">
						<i className="WFi_search-24px-l" aria-hidden="true"></i><span className="sr-only">sumbit</span>
					</button>
                                </div>
				<div className="searchInput-dropdown" >
					<ul className="search-dropdown" role="listbox" search-suggestion="">
            		 </ul>
				</div>
			</div>
		</Row>
		</Container>
		<Container className="navigation-section">
			<Row className="row100">
			<Col xs={12} sm={12} md={8}>
				<Row>
						<Col sm={12} md={6}>
							<span role="listitem">
								<Link to="/innsjekk.html">
									Sjekk inn <span className="sr-only ng-binding"></span>
									<ArrowRight style={{ float: 'right' }} color="#4d4e50" size={20} />
								</Link>
							</span>
						</Col>
						<Col sm={12} md={6}>
							<span role="listitem">
								<Link to="/innsjekk.html">
									fly-i-rute <span className="sr-only ng-binding"></span>
									<ArrowRight style={{ float: 'right' }} color="#4d4e50" size={20} />
								</Link>
							</span>
						</Col>
						<Col sm={12} md={6}>
							<span role="listitem">
								<Link to="/innsjekk.html">
									destinasjoner <span className="sr-only ng-binding"></span>
									<ArrowRight style={{ float: 'right' }} color="#4d4e50" size={20} />
								</Link>
							</span>
						</Col>
						<Col sm={12} md={6}>
							<span role="listitem">
								<Link to="/innsjekk.html">
									vare-billigste-flybilletter <span className="sr-only ng-binding"></span>
									<ArrowRight style={{ float: 'right' }} color="#4d4e50" size={20} />
								</Link>
							</span>
						</Col>
						<Col sm={12} md={6}>
							<span role="listitem">
								<Link to="/innsjekk.html">
									mine-reiser-gjest <span className="sr-only ng-binding"></span>
									<ArrowRight style={{ float: 'right' }} color="#4d4e50" size={20} />
								</Link>
							</span>
						</Col>
						<Col sm={12} md={6}>
							<span role="listitem">
								<Link to="/innsjekk.html">
									bedriftsportal <span className="sr-only ng-binding"></span>
									<ArrowRight style={{ float: 'right' }} color="#4d4e50" size={20} />
								</Link>
							</span>
						</Col>
						<Col sm={12} md={6}>
							<span role="listitem">
								<Link to="/innsjekk.html">
									hjelp-og-kontakt <span className="sr-only ng-binding"></span>
									<ArrowRight style={{ float: 'right' }} color="#4d4e50" size={20} />
								</Link>
							</span>
						</Col>
						<Col sm={12} md={6}>
							<span role="listitem">
								<Link to="/innsjekk.html">
									sok <span className="sr-only ng-binding"></span>
									<ArrowRight style={{ float: 'right' }} color="#4d4e50" size={20} />
								</Link>
							</span>
						</Col>


			</Row>
			</Col>
				<Col xs={12} sm={12} md={4} >
					<Form className="dropdown-form">
							<div className="form-group ">
								<label for="prefAirport">Velg din flyplass</label>
								<select className="form-control" name="" id="">
									<option label="Aberdeen (ABZ)" value="string:ABZ">Aberdeen (ABZ)</option>
									<option label="Aberdeen (ABZ)" value="string:ABZ">Aberdeen (ABZ)</option>
									<option label="Aberdeen (ABZ)" value="string:ABZ">Aberdeen (ABZ)</option>
									<option label="Aberdeen (ABZ)" value="string:ABZ">Aberdeen (ABZ)</option>
									<option label="Aberdeen (ABZ)" value="string:ABZ">Aberdeen (ABZ)</option>
								</select>
							</div>
						<button class="hidden-xs" type="button" disabled="disabled">Endre</button>
					</Form>
				</Col>
		</Row>
		</Container>

			</div>
);

}

export default MenuItems;