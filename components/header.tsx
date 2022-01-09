import { useRouter } from 'next/router'
import Link from "next/link";
import React from "react";


enum HeaderOption{
    HOME,
    BLOG,
    TEAM
};

export default function Header() {
    const router = useRouter()
    var currentPage: HeaderOption = getCurrentPage(router.pathname);

    return(
        <div className="header">
            <Link href="/">
                <a className="logo">
                     CompanyLogo
                </a>
            </Link>
            <div className="header-right">
                <Link href="/">
                    <a 
                        onClick={()=>changeToOption(HeaderOption.HOME)}
                        className={`menu-option ${currentPage == HeaderOption.HOME ? " active" : ""}` }>Home 
                    </a>
                </Link>
                <Link href="/blog">
                    <a 
                        onClick={()=>changeToOption(HeaderOption.BLOG)} 
                        className={`menu-option ${currentPage == HeaderOption.BLOG ? " active" : ""}` } >Blog
                    </a>
                </Link>
                <Link href="/team">
                    <a 
                        onClick={()=>changeToOption(HeaderOption.TEAM)} 
                        className={`menu-option ${currentPage == HeaderOption.TEAM ? " active" : ""}` } >Team
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
    var currentPage: HeaderOption = HeaderOption.HOME;
    
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