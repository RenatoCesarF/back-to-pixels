import Next from 'next'
import { useEffect,useState } from 'react'
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
        <div>

            <button onClick={() => switchTheme()}>
                Togle theme
            </button>
        </div>
    )
}


export default ThemeSwitch;