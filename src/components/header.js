import React, { useRef } from 'react';

import Home from './home';
import Navbar from './navbar';

import useOutsideClick from '../theme/useOutsideClick';

import './style.scss';

const Header = () => {
	const ref = useRef();
	useOutsideClick(ref, () => {
		alert('ok');
	});
	return (
		<section className="hero gradientBg is-fullheight-with-navbar">
			<Navbar  forwardRef={ref} />
			<Home />
			<span id="studio"></span>
		</section>
	);
}
export default Header;
