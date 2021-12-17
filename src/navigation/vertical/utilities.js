import { Users, ThumbsUp, Mail, HelpCircle } from 'react-feather'

export default [
	{
		header: 'App Utilities',
	},
	{
		id: 'utilities',
		title: 'Utilities',
		icon: <HelpCircle size={20} />,
		badge: 'light-warning',
		badgeText: '3',
		children: [
			{
				id: 'categories',
				title: 'Product Categories',
				icon: <Mail size={20} />,
				navLink: '/categories/list',
			},
			{
				id: 'types',
				title: 'Types',
				icon: <ThumbsUp size={20} />,
				navLink: '/types/list',
			},
			{
				id: 'units',
				title: 'Units',
				icon: <Users size={20} />,
				navLink: '/units/list',
			},
		],
	},
]
