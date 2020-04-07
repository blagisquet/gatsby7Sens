import React from 'react';

import Logo from '../images/logo.png';

import './style.scss';

import styled from 'styled-components';

const Navbar = ({ className }) => (
	<section className={className}>
		<div className="hero-head">
			<nav className="navbar has-background-grey-darker" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="">
						<img src={Logo} alt="logo du studio" />
					</a>
					<label role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" htmlFor="nav-toggle-state" data-target="navbarBasicExample">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</label>
				</div>
				<input type="checkbox" id="nav-toggle-state" />
				<div id="navbarBasicExample" className="navbar-menu has-background-grey-darker has-text-light">
					<div className="navbar-start">
						<a className="navbar-item">Accueil</a>
						<a className="navbar-item">Le studio</a>
						<a className="navbar-item">Médias</a>
						<a className="navbar-item">Avis</a>
						<a className="navbar-item">Nous trouver</a>
						<a className="navbar-item">Contact</a>
					</div>
				</div>
			</nav>
		</div>
	</section>
);

export default styled(Navbar)`
	#nav-toggle-state {
  	display: none;
	}

	#nav-toggle-state:checked ~ .navbar-menu {
  	display: block;
	}
`;
