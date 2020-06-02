import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {  Row, Col } from 'react-bootstrap';
import './footer.scss';

require('../../utils/Icons');

class Footer extends Component {

	render() {
		return (
		<div className="footer_wrapper">			
			<div className="footer-container">
				<div className="footerLinks section">
					<div className="site_map row m0 hidden-xs">	
			<Row>
				<Col lg={3} md={3} sm={6} xs={12} >
					<h2>Fly With Us</h2>
						<ul>
							<li><a href="/en/home/destinations.html">Destinations</a></li>
							<li><a href="/en/home/our-cheapest-tickets.html">Our cheapest tickets</a></li>
							<li><a href="/en/home/fly-with-us/ticket-types.html">Ticket types</a></li>
							<li><a href="/en/home/fly-with-us/youth-student-senior.html">Youth, Student and Senior</a></li>
							<li><a href="/en/home/fly-with-us/eurobonus.html">EuroBonus</a></li>
							<li><a href="/en/home/fly-with-us/groups.html">Groups</a></li>
							<li><a href="/en/home/destinations/route-map.html">Route map</a></li>
							<li><a href="/en/home/fly-with-us/terms-conditions.html">Terms &amp; conditions</a></li>
							<li><a href="/en/home/help-and-contact.html">Help and contact</a></li>
						</ul>
				</Col>
				<Col lg={3} md={3} sm={6} xs={12} >
						<h2>Travel Info</h2>
									<ul>
										<li><a href="/en/home/my-trips-guest.html">My trips</a></li>
										<li><a href="/en/home/travel-info/check-in-information.html">Check-in info</a></li>
										<li><a href="/en/home/travel-info/baggage.html">Baggage</a></li>
										<li><a href="/en/home/fly-with-us/fast-track-lounge.html">Fast track and Lounge</a></li>
										<li><a href="/en/home/travel-info/traveling-with-children.html">Traveling with children</a></li>
										<li><a href="/en/home/travel-info/pets.html">Traveling with pets</a></li>
										<li><a href="/en/home/travel-info/special-assistance.html">Special assistance</a></li>
										<li><a href="/en/home/travel-info/passport-visa.html">Passport and visa</a></li>
										<li><a href="https://cars.cartrawler.com/wideroe/en/?clientId=511720#/searchcars" target="_blank" aria-label="Car rentalopens in a new window">Car rental</a></li>
									</ul>
				</Col>
				<Col lg={3} md={3} sm={6} xs={12} >
					<h2>Corporate</h2>
									<ul>
										<li><a href="/en/home/corporate.html">Corporate agreements  </a></li>
										<li><a href="/en/home/corporate/agent-and-sales-info.html">Agent and salesinfo</a></li>
										<li><a href="/en/home/corporate/cargo.html">Cargo</a></li>
										<li><a href="/en/home/corporate/charter.html">Charter a plane</a></li>
										<li><a href="/en/home/corporate/technical-services.html">Technical services</a></li>
										<li><a href="/en/home/corporate/ground-handling.html">Handling</a></li>
										<li><a href="/en/home/corporate/for-suppliers.html">For suppliers</a></li>
									</ul>
				</Col>
				<Col lg={3} md={3} sm={6} xs={12} >
					<h2>About Widerøe</h2>
									<ul>
										<li><a href="/en/home/about-wideroe.html">About the company</a></li>
										<li><a href="/en/home/sustainability.html">Sustainability</a></li>
										<li><a href="/en/home/about-wideroe/media.html">Media</a></li>
										<li><a href="/en/home/about-wideroe/privacy.html">Privacy Policy</a></li>
										<li><a href="/en/home/subscribe-newsletter.html">Newsletter</a></li>
									</ul>
				</Col>
			</Row>

		</div>

		</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Footer); 