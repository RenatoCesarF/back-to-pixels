import React from "react";
import { BiLeftArrowAlt,BiUpArrowAlt } from 'react-icons/bi';
import {FiInstagram,FiTwitter} from 'react-icons/fi'
import {MdEmail} from 'react-icons/md';
import { motion } from "framer-motion";

import globalStyles from './CustomButton.styles'

const buttonIconClass = "button-icon";
// export enum ButtonIcon{ // change this enum to a type with specific values
//     arrowBack = 1,
//     email = 2,
//     instagram = 3,
//     twitter = 4,
//     arrowTop = 5,
// }
type ButtonIcon = "arrowBack" | "email" | "instagram" | "twitter" | "arrowTop"
interface ButtomProps{
    onClick: Function;
    icon: ButtonIcon;
    text?: string;
    description?: string;
    color?: string;
};

const CustomButton: React.FC<ButtomProps> = ({description ,onClick, color, icon, text}: ButtomProps)=>{
    return(
        <>
            <style jsx global>
                {globalStyles}
            </style>
            <motion.button 
                aria-label={description}
                name={description}
                className="button-div" 
                onClick={() => {onClick()}}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 1}}
                style={{background: color}}
            >
                {geticon(icon)}
                <span className="button-text" style={{paddingLeft: text ? ".3rem" : ""}}>{text}</span>
            </motion.button>
        </>
    )
}

const geticon = (iconName: ButtonIcon) =>{
    switch (iconName) {
        case "arrowBack":
            return(<BiLeftArrowAlt className={buttonIconClass}/>);
        case "email":
            return(<MdEmail className={buttonIconClass}/>);
        case "instagram":
            return(<FiInstagram className={buttonIconClass}/>);
        case "twitter":
            return(<FiTwitter className={buttonIconClass}/>);
        case "arrowTop":
            return(<BiUpArrowAlt className={buttonIconClass}/>);
        default:
            return(<div></div>);
    }
}

export default CustomButton;