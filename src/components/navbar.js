import React, { useState } from 'react';
import { Link } from 'gatsby';

import Logo from '../images/logosmall.png';

import './style.scss';

import { colors } from '../theme/helpers';

import styled from 'styled-components';

const Navbar = ({ className }) => {
	const [menuActive, setMenuActive] = useState(false);
	return (
	<section className={className}>
		<div className="hero-head">
			<nav className="navbar  has-background-grey-darker is-fixed-top has-text-centered" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a href="#" className="navbar-item">
						<img src={Logo} className="image" alt="logo du studio" />
						{/* <p className="stud is-size-5">Studio Septième Sens</p> */}
					</a>
					{/* onClick={() => setMenuActive(!menuActive)} className={`navTrigger ${menuActive ? 'active' : ""}`}*/}
					<label htmlFor="nav-toggle-state" data-target="navbarBasicExample" onClick={() => setMenuActive(!menuActive)} className={`navTrigger ${menuActive ? 'active' : ""}`}>
						<i></i>
						<i></i>
						<i></i>
					</label>
					{/* <label role="button" className="navbar-burger burger" aria-label="menu"  aria-expanded="false" htmlFor="nav-toggle-state" data-target="navbarBasicExample">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</label> */}
				</div>
				<input type="checkbox" id="nav-toggle-state" />
				<div id="navbarBasicExample" className={`navbar-menu has-background-grey-darker ${menuActive ? 'show_list' : ''}`}>
					<div className="navbar-start is-pulled-right has-text-centered">
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
		</div>

		{/* test */}
		{/* <nav className="nav">
			<div className="container">
				<div className="logo">
					<a href="#" className="is-size-5"> Studio Septième Sens
						<img src={Logo} className="image" alt="logo du studio" />
					</a>
				</div>
				<div id="mainListDiv" className={`main_list ${menuActive ? 'show_list' : ""}`}>
					<ul className="navlinks">
						<li><a href="#">About</a></li>
						<li><a href="#">Portfolio</a></li>
						<li><a href="#">Services</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div>
				<span onClick={() => setMenuActive(!menuActive)} className={`navTrigger ${menuActive ? 'active' : ""}`}>
					<i></i>
					<i></i>
					<i></i>
				</span>
			</div>
		</nav> */}
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
		margin-left: 2rem;
	}
`;
