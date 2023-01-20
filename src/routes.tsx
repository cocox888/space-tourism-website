import { useRoutes } from 'react-router-dom'
import Destination from './pages/Destination'

import { Home } from './pages/Home'

export const Routes = () => {
	return useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/destination', element: <Destination /> },
	])
}
