import React from 'react'
import DarkModeToggle from './darkmodeToggle.tsx'
import { NavLink } from 'react-router-dom'

export const Nav:React.FC = () =>{
	return (
		<div className='navbar'>
			<NavLink to={'/home'}>
				<img src='/assets/icon.webp' id='brandingIcon' />
				Magian Tools
			</NavLink>
			<DarkModeToggle />
		</div>
	)
}
export default Nav