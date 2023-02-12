/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

export const siteTitle = 'Peritia'
export const siteDescription = 'Pericias Judiciais em Propriedade Intelectual'
export const siteURL = 'https://peritia.eng.br'
export const siteLink = 'https://github.com/rgrcnh/peritia'
export const siteAuthor = 'Rogério Ferreira da Cunha'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Currículo',
		route: '/curriculum' 
	},
	{
		title: 'Artigos',
		route: '/blog'
	}, {
		title: 'Sobre',
		route: '/about'
	}, {
		title: 'Contato',
		route: '/contact' 
	}
]