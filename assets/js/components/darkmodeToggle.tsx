import React, { useEffect, useState } from 'react'
const DarkModeToggle:React.FC = () => {
	const [checked, setChecked] = useState(true)

	useEffect(() => {
		const root = document.getElementById('root')
		if (root) {
			root.classList.remove('theme--default', 'theme--dark')
			root.classList.add(checked? 'theme--default' : 'theme--dark')
		}
	}, [checked])

	return (<div className='darkModeToggle'>
		<input
			type="checkbox"
			className="sr-only"
			id='darkmode-toggle'
			checked={checked}
			onChange={() => setChecked(!checked)}/>
		<label htmlFor="darkmode-toggle" className="toggle">
			<span>Toggle dark mode</span>
		</label>
	</div>)
}
export default DarkModeToggle