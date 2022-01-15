import React from 'react';

const Header = ({ darkMode, handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
                className="save"
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}>{darkMode ? 'Normal Mode' : 'Dark Mode'}</button>
		</div>
	);
};

export default Header;