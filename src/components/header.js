import React from 'react';

import Home from './home';
import Navbar from './navbar';

import './style.scss';

const Header = () => {
	return (
		<section className="hero gradientBg is-fullheight-with-navbar">
			<Navbar />
			<Home />
			<span id="studio"></span>
		</section>
	);
}
export default Header;
