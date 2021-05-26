module.exports = {
	siteMetadata: {
		title: 'Studio Septième Sens',
		author: 'Baptiste Lagisquet',
		imageUrl: 'src/images/logo.png',
		description: 'Site du studio Septième Sens à Châteauroux',
		keywords: `Studio, Septieme, Sens, Lagrillère, Lagisquet, Musique, Enregistrement, Mixage, Mastering, Chateauroux`,
		instagram: 'https://www.instagram.com/studioseptiemesens/',
		twitter: 'https://twitter.com/studio7esens',
		github: `https://github.com/blagisquet`,
		gatsby: 'https://www.gatsbyjs.org/',
		bulma: 'https://bulma.io/',
		siteUrl: `http://www.studioseptiemesens.fr`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Studio Septième Sens',
				short_name: '7Sens',
				description: 'Application du studio Septième Sens à Châteauroux',
				lang: 'fr',
				start_url: '/',
				background_color: '#FFFFFF',
				theme_color: '#c80036',
				display: 'standalone',
				icon: 'src/images/favicon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
