import React, { useState } from 'react';
import { Link } from 'gatsby';

import Logo from '../images/logosmall.png';

import './style.scss';

import { colors } from '../theme/helpers';

import styled from 'styled-components';

import { stack as Menu } from 'react-burger-menu';

const Navbar = ({ className }) => {
	const [menuActive, setMenuActive] = useState(false);
	return (
		<section className={className}>
			{/* <div className="hero-head">
			<nav className="navbar  has-background-grey-darker is-fixed-top has-text-centered" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a href="#" className="navbar-item">
						<img src={Logo} className="image is-hidden-mobile" alt="logo du studio" />
						<p className="stud is-size-5">Studio Septième Sens</p>
					</a>
				
					<label htmlFor="nav-toggle-state" data-target="navbarBasicExample" onClick={() => setMenuActive(!menuActive)} className={`navTrigger ${menuActive ? 'active' : ""}`}>
						<i></i>
						<i></i>
						<i></i>
					</label>
				
				</div>
				<input type="checkbox" id="nav-toggle-state" />
				<div id="navbarBasicExample" className={`navbar-menu has-background-grey-darker ${menuActive ? 'show_list' : ''}`}>
					<div className="navbar-end has-text-centered">
						<a href="#" className="navbar-item menu is-size-5">Accueil</a>
						<a href="#studio" className="navbar-item menu is-size-5">Le studio</a>
						<a href="#services" className="navbar-item menu is-size-5">Les services</a>
						<a href="#medias" className="navbar-item menu is-size-5">Médias</a>
						<a href="#avis" className="navbar-item menu is-size-5">Avis</a>
						<a href="#map" className="navbar-item menu is-size-5">Nous trouver</a>
						<a href="#contact" className="navbar-item menu is-size-5">Contact</a>
					</div>
				</div>
			</nav>
		</div> */}

			{/* test */}
			<div className="hero-head is-fixed-top">
				<Menu right>
						<a href="#" className="navbar-item menu is-size-5"><span className="icon"><i className="fas fa-home"></i></span>Accueil</a>
						<a href="#studio" className="navbar-item menu is-size-5">Le studio</a>
						<a href="#services" className="navbar-item menu is-size-5">Les services</a>
						<a href="#medias" className="navbar-item menu is-size-5">Médias</a>
						<a href="#avis" className="navbar-item menu is-size-5">Avis</a>
						<a href="#map" className="navbar-item menu is-size-5">Nous trouver</a>
						<a href="#contact" className="navbar-item menu is-size-5">Contact</a>
				</Menu>
			</div>
		</section>
	);
}

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

	.stud  {
		/* margin-left: 2rem; */
	}
	.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
	z-index: 1000 !important;
}
	.bm-burger-bars {
	color: green;
	width: 20rem;
	}
`;
