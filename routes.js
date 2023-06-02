const routes = [
	{
		method: '*',
		path: '/',
		handler: (request, h) => {
			return 'Halaman tidak dapat diakses dengan method tersebut';
		},
	},
	{
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return 'Home Page';
		},
	},
	{
		method: 'GET',
		path: '/about',
		handler: (request, h) => {
			return 'About Page';
		},
	},
	{
		method: 'GET',
		path: '/contact',
		handler: (request, h) => {
			return 'Contact Page';
		},
	},
];

module.exports = routes;
