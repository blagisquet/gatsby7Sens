import React, { Fragment } from 'react';

import './style.scss';

import Avis from './avis';
import Contact from './contact';
import Helmet from './helmet';
import Header from './header';
import FindUs from './findUs';
import Footer from './footer';
import Materiel from './materiel';
import Medias from './medias';
import Services from './services';
import Studio from './studio';

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Helmet />
			<Header />
			<Studio />
			<Services />
			<Materiel />
			<Medias />
			<Avis />
			<FindUs />
			<Contact />
			<Footer />
		</Fragment>
	);
}

export default Layout;
