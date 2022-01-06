import { Component } from "react";
import Link from  'next/link'
import MenuOption from "./MenuOption";

export default function Header() {
    return(
        <header>
            <div className="headerDiv">
                <Link href="/" passHref>
                    <h3>CompanyName</h3>
                </Link>
                {/* <div className="heade-menu">
                    <h4>Option 1</h4>
                    <h4>Option 2</h4>
                    <h4>Option 3</h4>
                </div> */}
            </div>
        </header>
    )
}