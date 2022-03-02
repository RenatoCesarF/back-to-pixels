import React, { useState } from "react";
import { ReactNode } from "react"
import useWindowDimensions from "./getWindowDimentions";

const tooltipLeftPosition: string = "-61px"
const tooltipRightPosition: string = "-2px"
const tooltipArrowLeftPosition: string = "81px"
const tooltipArrowRightPosition: string = "16px;"

interface BaseHoverInfoProps{
    children: ReactNode
    displayedText?: string
}

const BaseHoverInfo = (props: BaseHoverInfoProps) =>{
    const [isElementRight, setIsElementRight] = useState(false);
    const { width } = useWindowDimensions();


    return (
        <div className="tooltip-expand">
    
            <span>
                {props.displayedText}
            </span>
            <div className="expanded-tooltip-div" 
                ref={el => {
                    if(!el) return;
                    const left = el.getBoundingClientRect().left;
                    if(left >= width/2){
                        setIsElementRight(true);
                        return;
                    } 
                    setIsElementRight(false);
                }}
            >
                <div className="expanded-tooltip-content">
                    {props.children}
                </div>
            </div>
            <style jsx global>
                {`
               .tooltip-expand{
                font-size: 1.0em;
                text-decoration: none;
                font-weight: bold;
                color: var(--link-color);
                cursor: pointer;
                user-select: none;
                position: relative;
                display: inline-block;
              }
              
              .expanded-tooltip-div{
                clip-path: circle(0% at 7% 110%);
                color: rgb(245, 244, 244);
                white-space: nowrap;
                
                background-color:var(--secondary-color);
                border-radius: 0.5rem;
                
                position: absolute;
                z-index: 2;
                
                height: fit-content;
                width: fit-content;
              
                min-width: 100px;
                min-height: 100px;
              
                top: -104px;
                left: ${isElementRight ?  tooltipLeftPosition : tooltipRightPosition};
                padding: 8px 5px;
                
                transition: all 0.6s cubic-bezier(.65,-0.53,.24,1.12);
              }
              .expanded-tooltip-div::after {
                content: "";
                position: absolute;
                top: 98%;
                left:${isElementRight ?  tooltipArrowLeftPosition : tooltipArrowRightPosition};
                margin-left: -9px;
                border-width: 9px;
                border-style: solid;
                border-color:var(--secondary-color) transparent transparent transparent;
                transition: all 0.6s cubic-bezier(.65,-0.53,.24,1.12);
              }
              .tooltip-expand:hover .expanded-tooltip-div{
                clip-path: circle(100%);
              }
                `}
            </style>
        </div >
    )
}


export default BaseHoverInfo


/*
  
 */