import React from 'react'
import DarkModeToggle from './darkmodeToggle.tsx'
import { NavLink } from 'react-router-dom'

export const Nav:React.FC = () =>{
	return (
		<div className='navbar'>
			<NavLink to={'/'}>
				<img src='/assets/icon.webp' id='brandingIcon' />
				Magian Tools
			</NavLink>
			<NavLink to={'/browse'}>
				Browse
			</NavLink>
			<DarkModeToggle />
		</div>
	)
}
export default Nav