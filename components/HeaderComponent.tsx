import { useRouter } from 'next/router'
import Link from "next/link";
import React, { useState } from "react";
import {BiMenu, BiX} from 'react-icons/Bi'


enum HeaderOption{
    HOME,
    BLOG,
    TEAM,
    NONE
};




export default function Header() {
    const router = useRouter()
    const [isMenuOpened, setMenuState] = useState(false);
    var currentPage: HeaderOption = getCurrentPage(router.pathname);

    const toggleMenuIcon = () => {
        if(isMenuOpened){
            setMenuState(false);
            return;
        }
        setMenuState(true);
    }
    const isActive =(checkedOption: HeaderOption) => {
        return currentPage === checkedOption ? "active" : ""
    }
    const checkMenuState =() => {
        return isMenuOpened? "" : "closed"
    }
    
    return(
        <div className="header">
            <div className='logo-menu-line'>
                <Link href="/">
                    <a className="logo">
                        CompanyLogo
                    </a>
                </Link>
                <div className='menu-icon-div' onClick={(toggleMenuIcon)}>
                    {
                        isMenuOpened?
                        (<BiX className='menu-icon' size={33}/>)
                        :
                        (<BiMenu className='menu-icon' size={33}/>)    
                    }
                </div>
            </div>

            <div className={`header-right ${checkMenuState()}`} >
                <Link href="/">
                    <a 
                        onClick={()=>changeToOption(HeaderOption.HOME)}
                        id='home-option'
                        className={`menu-option ${isActive(HeaderOption.HOME)}`}>Home 
                    </a>
                </Link>
                <Link href="/blog">
                    <a 
                        onClick={()=>changeToOption(HeaderOption.BLOG)} 
                        className={`menu-option ${isActive(HeaderOption.BLOG)}` } >Blog
                    </a>
                </Link>
                <Link href="/team">
                    <a 
                        onClick={()=>changeToOption(HeaderOption.TEAM)} 
                        className={`menu-option ${isActive(HeaderOption.TEAM)}` } >Team
                    </a>
                </Link>
            </div>
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
