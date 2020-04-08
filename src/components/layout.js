import React, { Fragment } from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Footer from './footer';
import Services from './services';
import Studio from './studio';

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Helmet />
			<Header />
			<Studio />
			<Services />
			<Footer />
		</Fragment>
	);
}

export default Layout;
