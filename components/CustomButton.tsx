import React from "react";
import { getStaticProps } from "../pages/blog";
import globalStyles from '../styles/CustomButton.styles.js'
import { BiLeftArrowAlt } from 'react-icons/bi';

interface ButtomProps{
    text: string;
    onClick: Function;
    icon: ButtonIcon;
};
export enum ButtonIcon{
    arrowBack = 1,
}

const geticon = (iconName: ButtonIcon) =>{
    switch (iconName) {
        case 1:
            return(<BiLeftArrowAlt className="button-icon"/>)
        default:
            return(<div></div>)
    }
}

const CustomButton: React.FC<ButtomProps> = (prop: ButtomProps)=>{
    return(
        <>
            <style jsx global>
                {globalStyles}
            </style>
            <div className="button-div" onClick={() => {prop.onClick()}}>
                {geticon(prop.icon)}
                <h1 className="button-text">{prop.text}</h1>
            </div>
        </>
    )
}

export default CustomButton;