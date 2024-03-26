import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../store/hooks.ts'
import { useDispatch } from 'react-redux'
import { toggleDarkMode } from '../store/reducers/ui.ts'
const DarkModeToggle:React.FC = () => {
	const dark = window?.matchMedia('prefers-color-scheme: dark')?.matches
	const lsDark = localStorage.getItem('mt_darkmode') === 'true'
	const darkMode = useAppSelector((state) => state.ui.darkMode)
	const [checked, setChecked] = useState(darkMode ?? lsDark ?? dark ?? true)

	const dispatch = useDispatch()

	useEffect(() => {
		const root = document.getElementById('root')
		if (root) {
			root.classList.remove('theme--default', 'theme--dark')
			root.classList.add(checked? 'theme--default' : 'theme--dark')
		}
		dispatch(toggleDarkMode())
	}, [checked])

	useEffect(() => {
	}, [])

	const handleCheck = () => {
		localStorage.setItem('mt_darkmode', checked ? 'true' : 'false')
		setChecked(!checked)
	}

	return (<div className='darkModeToggle'>
		<input
			type="checkbox"
			className="sr-only"
			id='darkmode-toggle'
			checked={checked}
			onChange={handleCheck}/>
		<label htmlFor="darkmode-toggle" className="toggle">
			<span>Toggle dark mode</span>
		</label>
	</div>)
}
export default DarkModeToggle