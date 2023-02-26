import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'Prediction-1',
		label: 'Prediction 1',
		path: 'predict-1',
		icon: <HiOutlineCube />
	},
	
	{
		key: 'prediction-2',	
		label: 'Prediction 2',
		path: 'predict-2',
		icon: <HiOutlineUsers />
	},
	
	{
		key: 'email',
		label: 'Email',
		path: 'email',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]