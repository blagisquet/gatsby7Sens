import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import Logo from '../images/logo.png';

import './style.scss';

import styled from 'styled-components';

const Navbar = ({ className, sticky }) => (
	<Fragment className={sticky ? "navbar navbar-sticky" : "navbar"}>
		<section className={className}>
			<div className="hero-head">
				<nav className="navbar has-background-grey-darker" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<Link to="#" className="navbar-item">
							<img src={Logo} alt="logo du studio" />
						</Link>
						<label role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" htmlFor="nav-toggle-state" data-target="navbarBasicExample">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</label>
					</div>
					<input type="checkbox" id="nav-toggle-state" />
					<div id="navbarBasicExample" className="navbar-menu has-background-grey-darker">
						<div className="navbar-start">
							<Link to="#" className="navbar-item">Accueil</Link>
							<Link to="#studio" className="navbar-item">Le studio</Link>
							<Link to="#services" className="navbar-item">Les services</Link>
							<Link to="#medias" className="navbar-item">Médias</Link>
							<Link to="#avis" className="navbar-item">Avis</Link>
							<Link to="#map" className="navbar-item">Nous trouver</Link>
							<Link to="#contact" className="navbar-item">Contact</Link>
						</div>
					</div>
				</nav>
			</div>
		</section>
	</Fragment>
);

export default styled(Navbar)`
	section {
		position: fixed;
	}
	#nav-toggle-state {
  	display: none;
	}

	#nav-toggle-state:checked ~ .navbar-menu {
  	display: block;
	}

	.navbar-sticky {
		position: fixed;
		top: 0;
		left:0;
		animation: moveDown 0.5s ease-in-out;
	}

	.navbar-item, label {
		color: white;
		&:hover {
			background-color: hsl(0, 0%, 21%);
			color: #C80036;
		}
	}
	
	@keyframes moveDown {
  	from {
    	transform: translateY(-5rem);
  	}
  	to {
    	transform: translateY(0rem);
  	}
	}
`;
