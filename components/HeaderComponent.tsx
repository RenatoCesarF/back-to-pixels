import { useRouter } from 'next/router'
import Link from "next/link";
import React, { useState } from "react";

import ThemeSwitch from './ThemeSwich';

import MenuIcon from './MenuIcon';
import { parseCookies } from 'nookies';

enum HeaderOption{
    HOME,
    BLOG,
    TEAM,
    NONE
};

export default function Header() {
    const router = useRouter();
    const [isMenuOpened, setMenuState] = useState(false);
    var currentPage: HeaderOption = getCurrentPage(router.pathname);

    const toggleMenuIcon = () => {
        if(isMenuOpened){
            setMenuState(false);
            return;
        }
        setMenuState(true);
    }

    const isMenuActive =(checkedOption: HeaderOption) => {
        return currentPage === checkedOption ? "active" : ""
    }
    const checkMenuState =() => {
        return isMenuOpened? "" : "closed"
    }
    
    return(
        <div className="header">
            <div className='logo-menu-line'>
                <Link passHref href="/">
                    <img src='/images/logo-little.png' height="56px" width="129px" className='logo' alt='Logo Image'/>
                </Link>
                
                <div className='menu-icon-div'>
                    {/* <ThemeSwitch/> */}
                    <div onClick={(toggleMenuIcon)}>
                        <MenuIcon/>
                    </div>
                </div>
            </div>
    
            <nav className={`header-right ${checkMenuState()}`} >
                <Link href="/">
                    <a 
                        onClick={()=>changeToOption(HeaderOption.HOME)}
                        id='home-option'
                        className={`menu-option ${isMenuActive(HeaderOption.HOME)}`}>Home 
                    </a>
                </Link>
                <Link href="/blog">
                    <a 
                        onClick={()=>changeToOption(HeaderOption.BLOG)} 
                        className={`menu-option ${isMenuActive(HeaderOption.BLOG)}` } >Blog
                    </a>
                </Link>
                <Link href="/team">
                    <a 
                        onClick={()=>changeToOption(HeaderOption.TEAM)} 
                        className={`menu-option ${isMenuActive(HeaderOption.TEAM)}` } >Team
                    </a>
                </Link>
                <div className='theme-switcher'>  
                    <ThemeSwitch/>
                </div>
            </nav>
        </div>
    )
}


const changeToOption = (selectedOption: HeaderOption) => {
    var options = document.getElementsByClassName("menu-option");
    for (var i:number = 0; i < options.length; i++) {
        options[i].className = options[i].className.replace(" active", "");
    }

    options[selectedOption].className += " active";
}

const getCurrentPage = (pathName: string) =>{
    var currentPage: HeaderOption = HeaderOption.NONE;
    
    if(pathName === '/'){
        currentPage = HeaderOption.HOME;
        return currentPage;
    }
    if(pathName.includes('/blog')){
        currentPage = HeaderOption.BLOG;
        return currentPage;
    }
    if(pathName.includes('/team')){
        currentPage = HeaderOption.TEAM;
        return currentPage;
    }

    return currentPage;
}
