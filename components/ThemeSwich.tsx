import { useEffect,useState } from 'react'
import {RiMoonClearFill, RiSunFill } from 'react-icons/ri'


const lightTheme = 'light'
const darkTheme = 'dark'

const ThemeSwitch = () => {
    const [theme,setTheme] = useState('light');

    const switchTheme = () => {
        if(theme === darkTheme){
            setTheme(lightTheme);
            localStorage.setItem("theme", lightTheme);
            return;
        }
        setTheme(darkTheme);
        localStorage.setItem("theme", darkTheme);
    }

    useEffect(() => {
        document.body.className = theme;
    });
    return(
        <div onClick={() => switchTheme()}>
            {
                theme === 'light'
                ?
                <RiMoonClearFill  className='switch-theme-icon'/>
                : 
                <RiSunFill className='switch-theme-icon'/>
            }
        </div>
    )
}


export default ThemeSwitch;