import React from "react";
import {Link} from "react-router-dom"
import { Form } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import Menu_Data from "./menuData";
require('./Menuitems.scss');


const  MenuItems =() =>{

	console.log(Menu_Data.Menu_items)
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
				{
							Menu_Data.Menu_items.map((item,index)=>((
								<Col sm={12} md={6} key={index}>
									<div role="listitem">
										<Link to={item.Link} target="_blank">
											{item.Name}<span className="sr-only ng-binding"></span>
											<ArrowRight style={{ float: 'right' }} color="#4d4e50" size={20} />
										</Link>
									</div>
								</Col>

		)))							
				}
			</Row>
			</Col>
				<Col xs={12} sm={12} md={4} >
					<Form className="dropdown-form">
							<div className="form-group ">
							<label htmlFor="prefAirport">Velg din flyplass</label>
								<select className="form-control" name="" id="">
									<option label="Aberdeen (ABZ)" value="string:ABZ">Aberdeen (ABZ)</option>
									<option label="Aberdeen (ABZ)" value="string:ABZ">Aberdeen (ABZ)</option>
									<option label="Aberdeen (ABZ)" value="string:ABZ">Aberdeen (ABZ)</option>
									<option label="Aberdeen (ABZ)" value="string:ABZ">Aberdeen (ABZ)</option>
									<option label="Aberdeen (ABZ)" value="string:ABZ">Aberdeen (ABZ)</option>
								</select>
							</div>
						<button className="hidden-xs" type="button" disabled="disabled">Endre</button>
					</Form>
				</Col>
		</Row>
		</Container>

			</div>
);

}

export default MenuItems;