import { useEffect,useState } from 'react'
import {RiMoonClearFill, RiSunFill } from 'react-icons/ri'
import { IconContext } from "react-icons";
import {setCookie, parseCookies} from 'nookies'
const lightTheme = 'light'
const darkTheme = 'dark'
const cookiesConfig = {path: '/', maxAge: 86400 * 30}


const ThemeSwitch = () => {
    const cookies = parseCookies() 
    const [loaded, setLoaded] = useState(false);
    const [theme, setTheme] = useState(cookies.THEME);
    const switchTheme = () => {
        if(theme === darkTheme){
            setTheme(lightTheme);
            setCookie(null, "THEME", lightTheme, cookiesConfig);
        }
        else{
            setTheme(darkTheme);
            setCookie(null, "THEME", darkTheme, cookiesConfig);
        }
    }

    useEffect(() => {
        setLoaded(true);
        document.body.className = theme;
    });

    // in the JSX
        <IconContext.Provider value={{className: "switch-theme-icon" }}>
        <div onClick={() => switchTheme()}>
            {   process.browser ?
                theme === darkTheme
                ?
                <RiSunFill />
                : 
                <RiMoonClearFill />
                :
                <RiMoonClearFill />
            }
        </div>
        </IconContext.Provider>
    
    return(
        <div>
        {
            loaded? 
                <IconContext.Provider value={{className: "switch-theme-icon" }}>
                <div onClick={() => switchTheme()}>
                    {  
                        theme === darkTheme
                        ?
                        <RiSunFill />
                        : 
                        <RiMoonClearFill />
                    }
                </div>
                </IconContext.Provider>
            : <></>
        }
        </div>
    )
}

export default ThemeSwitch;