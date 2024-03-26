import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { acceptCSRFToken } from '../store/reducers/session.ts'

export const SignupForm:React.FC = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const dispatch = useDispatch()

	const handleSubmit = () => async () => {
		const token = await fetch ('/api/getCSRF')
		if (token.ok && token.body) {
			const response = await fetch('/api/users', {
				method: 'POST',
				body: JSON.stringify({
					email: email,
					username: username,
					password: password,
				}),
				headers: {
					'x-csrf-token': (await token.json())['csrf-token']
				}
			})
			if (response.ok) {
				const data = await response.json()
				dispatch(acceptCSRFToken(data.csrf_token))
			}
		}
	} 

	return (<form>
		<input type="text" 
			name="username" 
			id="username" 
			value={username}
			onChange={(e) => setUsername(e.target.value)} />
		<input type="email" 
			name="email" 
			id="email"
			value={email}
			onChange={(e) => setEmail(e.target.value)} />
		<input type="password" 
			name="password" 
			id="password"
			value={password}
			onChange={(e) => setPassword(e.target.value)} />
	</form>)
}