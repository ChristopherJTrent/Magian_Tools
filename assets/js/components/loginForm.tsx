import React, { useState } from 'react'

export const LoginForm:React.FC = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (<form>
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
		<button type="submit">Sign Up</button>
	</form>)
}