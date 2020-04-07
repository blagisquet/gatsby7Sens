import React from 'react';
import styled from 'styled-components';

import Home from './home';
import Navbar from './navbar';

import './style.scss';

const Header = ({ className }) => (
	<section className="hero gradientBg is-fullheight-with-navbar">
		<Navbar />
		<Home />
	</section>
);

export default styled(Header)`

`;
