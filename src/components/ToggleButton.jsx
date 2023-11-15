/* eslint-disable react/prop-types */
import { useState } from 'react';
import './ToggleButton.css'

export default function ToggleButton({handleHiddenOnClick}) {
    const [darkMode, setDarkMode] = useState(false)

    function handleClick(e) {
        e.target.style.left = window.getComputedStyle(e.target).getPropertyValue("left") == "3px" ? '55%' : '3px';
        setDarkMode(!darkMode)
        handleHiddenOnClick();
    }


    return <div className={darkMode == true ? 'bg-accent toggle-btn' : 'toggle-btn'}>
        <div className="toggle-circle" onClick={handleClick}></div>
    </div>
}