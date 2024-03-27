import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { acceptUser } from '../store/reducers/users.ts'

export const SignupForm:React.FC = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const dispatch = useDispatch()

	const handleSubmit = () => async (e:FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const response = await fetch('/api/users', {
			method: 'POST',
			body: JSON.stringify({
				email: email,
				username: username,
				password: password,
			}),
			headers: {
				'content-type': 'application/json'
			}
		})
		if (response.ok) {
			dispatch(acceptUser(await response.json()))
		}
	}

	return (<form className={'materialCard flex vertical center'} onSubmit={handleSubmit()}>
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
		<button type="submit">Register</button>
	</form>)
}