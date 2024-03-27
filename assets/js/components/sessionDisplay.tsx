import React from 'react'
import { useAppSelector } from '../store/hooks.ts'
import { NavLink } from 'react-router-dom'

export const SessionDisplay: React.FC = () => {
	const session:string | undefined = useAppSelector(state => state.session.sessionToken)
	console.log(session)
	if (session == null) {
		return (
			<>
				<NavLink to={'/register'}>Register</NavLink>
				<NavLink to={'/login'}>Log In</NavLink>
			</>
		)
	} else {
		return (
			<>
				<p>logged in</p>
			</>
		)
	}
}