import React, { useEffect, useRef, useState } from 'react';

import Home from './home';
import Navbar from './navbar';

import './style.scss';

const Header = () => {
	useEffect(() => {
		return () => {
			window.removeEventListener("scroll", () => handleScroll)
		}
	}, []);

	const [isSticky, setSticky] = useState(false);

	const stickyRef = useRef(null);
	const handleScroll = () => {
		window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
			? setSticky(true)
			: setSticky(false)
	}

	// const debounce = (func, wait = 20, immediate = true) => {
  //   let timeOut
  //   return () => {
  //     let context = this,
  //       args = arguments
  //     const later = () => {
  //       timeOut = null
  //       if (!immediate) func.apply(context, args)
  //     }
  //     const callNow = immediate && !timeOut
  //     clearTimeout(timeOut)
  //     timeOut = setTimeout(later, wait)
  //     if (callNow) func.apply(context, args)
  //   }
  // }

	window.addEventListener("scroll", handleScroll);

	return (
		<section className="hero gradientBg is-fullheight-with-navbar">
			<Navbar sticky={isSticky} />
			<Home stickyRef={stickyRef} />
		</section>
	);
}
export default Header;
