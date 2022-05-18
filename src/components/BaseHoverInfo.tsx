import { useEffect, useState } from "react";
import { ReactNode } from "react"

const tooltipLeftPosition: string = "0px";
const tooltipRightPosition: string = "-99px";
const tooltipArrowLeftPosition: string = "15%";
const tooltipArrowRightPosition: string = "85%";

interface BaseHoverInfoProps{
    children: ReactNode
    displayedText?: string
}

const BaseHoverInfo = (props: BaseHoverInfoProps) =>{
    const [isElementRight, setIsElementRight] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {setWindowWidth(window.innerWidth);}, [])

    return (
        <div className="tooltip-expand">
            <span
                ref={el => {
                    if(!el) return;
                    if(el.getBoundingClientRect().left >= (window.innerWidth/2) - 20){
                        setIsElementRight(true);
                        return;
                    } 
                    setIsElementRight(false);
                }}
            >
                {props.displayedText}
            </span>

            <div className="expanded-tooltip-div"
                style={{}} 
            
            >
                <div className="expanded-tooltip-content">
                    {props.children}
                </div>
            </div>
            <style jsx global>
                {`
                    .expanded-tooltip-div{
                        left: ${isElementRight ? tooltipRightPosition : tooltipLeftPosition };
                        clip-path: circle(0% at ${isElementRight ? "90%" : "10%"} 110%);
                    }
                    .expanded-tooltip-div::after{
                        left:${isElementRight ? tooltipArrowRightPosition :  tooltipArrowLeftPosition };
                    }
                `}
            </style>
        
        </div >
    )
}


export default BaseHoverInfo