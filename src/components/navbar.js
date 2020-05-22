import React, { useState } from 'react';

import Logo from '../images/logosmall.png';

import './style.scss';

import { colors } from '../theme/helpers';

import styled from 'styled-components';

const Navbar = ({ className }) => {
	const [menuActive, setMenuActive] = useState(false);
	return (
		<section className={className}>
			<div className="hero-head">
				<nav className="navbar has-background-grey-darker is-fixed-top has-text-centered" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<a href="#accueil" className="navbar-item">
							<img src={Logo} className="image" alt="logo du studio" />
							<p className="stud is-size-5 is-hidden-mobile is-hidden-desktop-only">Studio Septième Sens</p>
						</a>
						<span role="presentation" onClick={() => setMenuActive(!menuActive)} onKeyDown={() => setMenuActive(!menuActive)} className={`navTrigger ${menuActive ? 'active' : ""}`}>
							<i></i>
							<i></i>
							<i></i>
						</span>

					</div>
					<div className="navbar-end is-hidden-desktop">
						<div id="mainListDiv" className={`main_list ${menuActive ? '' : 'show_list'}`}>

							<a href="#accueil" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Accueil</a>
							<a href="#studio" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Le studio</a>
							<a href="#services" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Les services</a>
							<a href="#medias" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Médias</a>
							<a href="#avis" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Avis</a>
							<a href="#map" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Nous trouver</a>
							<a href="#contact" className="navbar-item is-size-5" onClick={() => setMenuActive(!menuActive)}>Contact</a>
						</div>
					</div>
					<div className="navbar-end is-hidden-touch">
							<a href="#accueil" className="navbar-item is-size-5">Accueil</a>
							<a href="#studio" className="navbar-item is-size-5">Le studio</a>
							<a href="#services" className="navbar-item is-size-5">Les services</a>
							<a href="#medias" className="navbar-item is-size-5">Médias</a>
							<a href="#avis" className="navbar-item is-size-5">Avis</a>
							<a href="#map" className="navbar-item is-size-5">Nous trouver</a>
							<a href="#contact" className="navbar-item menu is-size-5">Contact</a>
						</div>
				</nav>

				{/*test*/}
				{/* <nav class="nav  has background-grey-darker">
					<div class="container">
						<div class="logo">
						<a href="#accueil" className="navbar-item">
							<img src={Logo} className="image" alt="logo du studio" />
							<p className="stud is-size-5 is-hidden-mobile is-hidden-desktop-only">Studio Septième Sens</p>
						</a>
						</div>
						<div id="mainListDiv" className={`main_list ${menuActive ? '' : 'show_list'}`}>
							<ul class="navlinks">
								<li><a href="#accueil" onClick={() => setMenuActive(!menuActive)}>Accueil</a></li>
								<li><a href="#studio" onClick={() => setMenuActive(!menuActive)}>Le studio</a></li>
								<li><a href="#services" onClick={() => setMenuActive(!menuActive)}>Les services</a></li>
								<li><a href="#medias" onClick={() => setMenuActive(!menuActive)}>Médias</a></li>
								<li><a href="#avis" onClick={() => setMenuActive(!menuActive)}>Avis</a></li>
								<li><a href="#map" onClick={() => setMenuActive(!menuActive)}>Nous trouver</a></li>
								<li><a href="#contact" onClick={() => setMenuActive(!menuActive)}>Contact</a></li>
							</ul>
						</div>
						<span onClick={() => setMenuActive(!menuActive)} className={`navTrigger ${menuActive ? 'active' : ""}`}>
							<i></i>
							<i></i>
							<i></i>
						</span>
					</div>
				</nav> */}
			</div>
		</section>
	);
}

export default styled(Navbar)`
	.image {
		margin-left: 1rem
	}
	section {
		position: fixed;
	}
	/* #nav-toggle-state {
  	display: none;
	}

	#nav-toggle-state:checked ~ .navbar-menu {
		display: block;
		animation: 0.3s ease-out;
	} */

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

	.menu {
		margin-right: 1rem;
	}

	@media screen and (min-width:1024px) {
		.navbar-end {
		margin-top: 0.2rem !important;
		}
	}
`;
