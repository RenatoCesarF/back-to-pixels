import React from "react";
import { BiLeftArrowAlt,BiUpArrowAlt } from 'react-icons/bi';
import {FiInstagram,FiTwitter} from 'react-icons/fi'
import {MdEmail} from 'react-icons/md';
import { motion } from "framer-motion";

import globalStyles from './CustomButton.styles'

const buttonIconClass = "button-icon";
export enum ButtonIcon{
    arrowBack = 1,
    email = 2,
    instagram = 3,
    twitter = 4,
    arrowTop = 5,
}
interface ButtomProps{
    onClick: Function;
    icon: ButtonIcon;
    text?: string;
    description?: string;
    color?: string;
};

const CustomButton: React.FC<ButtomProps> = (props: ButtomProps)=>{
    return(
        <>
            <style jsx global>
                {globalStyles}
            </style>
            <motion.button 
                aria-label={props.description}
                name={props.description}
                className="button-div" 
                onClick={() => {props.onClick()}}
                whileHover={{scale: 1.05}}
                whileTap={{scale: 1}}
                style={{background: props.color}}
            >
                {geticon(props.icon)}
                <span className="button-text" style={{paddingLeft: props.text ? ".3rem" : ""}}>{props.text}</span>
            </motion.button>
        </>
    )
}

const geticon = (iconName: ButtonIcon) =>{
    switch (iconName) {
        case 1:
            return(<BiLeftArrowAlt className={buttonIconClass}/>);
        case 2:
            return(<MdEmail className={buttonIconClass}/>);
        case 3:
            return(<FiInstagram className={buttonIconClass}/>);
        case 4:
            return(<FiTwitter className={buttonIconClass}/>);
        case 5:
            return(<BiUpArrowAlt className={buttonIconClass}/>);
        default:
            return(<div></div>);
    }
}

export default CustomButton;