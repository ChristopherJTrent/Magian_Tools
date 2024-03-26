import React from 'react'
import Nav from './components/Nav.tsx'
import { Outlet } from 'react-router'

const Layout:React.FC = () => {
	return (<>
		<Nav />
		<div id="pageContent">
			<Outlet />
		</div>
	</>)
}
export default Layout