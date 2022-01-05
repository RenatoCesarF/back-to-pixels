import { Component } from "react";
import Link from  'next/link'

export default function Header() {
    return(
        <header>
            <div className="headerDiv">
                <Link href="/" passHref>
                    <h3>CompanyName</h3>
                </Link>
            </div>
        </header>
    )
}