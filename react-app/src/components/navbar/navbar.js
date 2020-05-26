import React, { useState } from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Modal from "../modelBox/modelbox";
import MenuItems from "../MenuItems/MenuItems"
require('./navbar.scss');

const Menu = () => {
	const [status, setStatus] = useState(false);
	return (
		<div>
			<Navbar collapseOnSelect expand="lg"  variant="light" >
				<Navbar.Brand href="#home">Wideroe</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav ">
					<Nav className="mr-auto">
					</Nav>
					<Nav className="float-right">
						<Nav.Link href="#deets">Login</Nav.Link>
						<NavDropdown title="Nok" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link eventKey={2} className="d-none d-lg-block">
							<div >
								<button type="button" className="menu_btn" onClick={() => setStatus(true)}
									data-toggle="collapse" data-target="#wdMenu" aria-expanded="false" aria-controls="wdMenu">
									<span>
										<div className="bar bar1"></div>
										<div className="bar bar2"></div>
										<div className="bar bar3"></div>
									</span>
									<span className="men_txt">Menu</span>
								</button>
								{status && (<Modal closeModal={() => setStatus(false)}> 
									<MenuItems/>

</Modal>)}
							</div>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar >

		</div >
	);
}


export default Menu;