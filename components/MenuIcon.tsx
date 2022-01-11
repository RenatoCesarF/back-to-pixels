import { useState } from "react";


const MenuIcon = ( ) =>{
    const [menuIcon, setIconState] = useState(false);

    const toggleMenuButton = () => {
        if(menuIcon){
            setIconState(false);
            return;
        }
        setIconState(true);
    };

    return(
            <button aria-label="Open Menu Button" name="Open Menu Button" onClick={toggleMenuButton} className={`menu-toggle ${menuIcon? "toggled" : ""}`} aria-controls="primary-menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
    )
}

export default MenuIcon;