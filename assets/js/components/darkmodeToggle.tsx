import React from 'react'
import './darkmodeToggle.css'
const DarkModeToggle:React.FC = () => {
	return (<>
		<input
			type="checkbox"
			className="sr-only"
			id='darkmode-toggle'/>
		<label htmlFor="darkmode-toggle" className="toggle">
			<span>Toggle dark mode</span>
		</label>
	</>)
}
export default DarkModeToggle