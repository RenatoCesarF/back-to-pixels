import Link from "next/link";
import React from "react";

enum HeaderOption{
    HOME,
    BLOG,
    TEAM
};

const activateOption = (selectedOption: HeaderOption) => {
    var options = document.getElementsByClassName("menu-option");
    for (var i:number = 0; i < options.length; i++) {
        options[i].className = options[i].className.replace(" active", "");
    }

    options[selectedOption].className += " active";
}

export default function Header() {
    return(
        <div className="header">
            <a href="#default" className="logo">CompanyLogo</a>
            <div className="header-right">
                <Link href="/">
                    <a onClick={()=>activateOption(HeaderOption.HOME)} className="menu-option active">Home</a>
                </Link>
                <Link href="/blog">
                    <a onClick={()=>activateOption(HeaderOption.BLOG)} className="menu-option">Blog</a>
                </Link>
                <Link href="/team">
                    <a onClick={()=>activateOption(HeaderOption.TEAM)} className="menu-option">Team</a>
                </Link>
            </div>
        </div>
    )
}
