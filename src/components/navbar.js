import React from 'react';
import { Link } from 'gatsby';

import Logo from '../images/logosmall.png';

import './style.scss';

import { colors } from '../theme/helpers';

import styled from 'styled-components';

const Navbar = ({ className }) => (
	<section className={className}>
		<div className="hero-head">
			<nav className="navbar has-background-grey-darker is-fixed-top-mobile" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link to="#" className="navbar-item">
						<img src={Logo} className="image" alt="logo du studio" />
					</Link>
					<label role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" htmlFor="nav-toggle-state" data-target="navbarBasicExample">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</label>
				</div>
				<input type="checkbox" id="nav-toggle-state" />
				<div id="navbarBasicExample" className="navbar-menu has-background-grey-darker">
					<div className="navbar-start has-text-centered-desktop">
						<Link to="#" className="navbar-item menu is-size-4">Accueil</Link>
						<Link to="#studio" className="navbar-item menu is-size-4">Le studio</Link>
						<Link to="#services" className="navbar-item menu is-size-4">Les services</Link>
						<Link to="#medias" className="navbar-item menu is-size-4">Médias</Link>
						<Link to="#avis" className="navbar-item menu is-size-4">Avis</Link>
						<Link to="#map" className="navbar-item menu is-size-4">Nous trouver</Link>
						<Link to="#contact" className="navbar-item menu is-size-4">Contact</Link>
					</div>
				</div>
			</nav>
		</div>
	</section>
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

	.menu-item {
		margin-left: 2rem;
	}

	.navbar-item, label {
		color: white;
		&:hover {
			background-color: hsl(0, 0%, 21%);
			color: ${colors.primary};
		}
	}
`;
