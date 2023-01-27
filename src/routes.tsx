import { useRoutes } from 'react-router-dom'
import Crew from './pages/Crew'
import Destination from './pages/Destination'

import { Home } from './pages/Home'
import Technology from './pages/Technology'

export const Routes = () => {
	return useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/destination', element: <Destination /> },
		{ path: '/crew', element: <Crew /> },
		{ path: '/technology', element: <Technology /> },
	])
}
