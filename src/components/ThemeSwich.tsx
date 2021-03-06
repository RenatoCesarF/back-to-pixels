import { useEffect,useState } from 'react'
import {RiMoonClearFill, RiSunFill } from 'react-icons/ri'
// import {setCookie, parseCookies} from 'nookies'

const lightTheme = 'light'
const darkTheme = 'dark'
// const cookiesConfig = {path: '/', maxAge: 86400 * 30}
const buttonName = "theme switcher button"

const ThemeSwitch = () => {
    // const cookies = parseCookies();
    // const cookiesTheme = cookies.THEME === undefined? lightTheme : cookies.THEME;

    const [loaded, setLoaded] = useState(false);
    const [theme, setTheme] = useState(lightTheme);
    const switchTheme = () => {
        if(theme === darkTheme){
            setTheme(lightTheme);
            // setCookie(null, "THEME", lightTheme, cookiesConfig);
        }
        else{
            setTheme(darkTheme);
            // setCookie(null, "THEME", darkTheme, cookiesConfig);
        }
    }

    useEffect(() => {
        setLoaded(true);
        document.body.className = theme;
    }, [theme]);

    return(
        <button className="switch-theme-button" aria-label={buttonName} name={buttonName} >
        {
            loaded? 
                <div onClick={() => switchTheme()}>
                    {  
                        theme === darkTheme
                        ?
                        <RiSunFill className="switch-theme-icon"/>
                        : 
                        <RiMoonClearFill className="switch-theme-icon"/>
                    }
                </div>
            : <></>
        }
        </button>
    )
}

export default ThemeSwitch;