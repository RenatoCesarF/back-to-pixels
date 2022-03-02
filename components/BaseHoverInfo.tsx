import { getDisplayName } from "next/dist/shared/lib/utils"
import { ReactNode } from "react"

interface BaseHoverInfoProps{
    children: ReactNode
    displayedText?: string
}
const BaseHoverInfo = (props: BaseHoverInfoProps) =>{
    return (
        <div className="tooltip-expand">
            <style jsx global>
                {`
                .tooltip-expand{
                    display: contents;
                    font-size: 1.0em;
                    text-decoration: none;
                    font-weight: bold;
                    color: var(--link-color);
                    cursor: pointer;
                }
                
                .relative-expand-div{
                    position: relative;
                    display: inline-block;
                }
                .expanded-tooltip-div{
                    clip-path: circle(0% at 7% 110%);
                    color: rgb(245, 244, 244);
                    display: -webkit-inline-box;
                    
                    background-color:var(--main-color);
                    border-radius: 0.5rem;
                    
                    position: absolute;
                    z-index: 2;
                    
                    height: fit-content;
                    width: fit-content;

                    min-width: 100px;
                    min-height: 100px;

                    top: -124px;
                    margin-left: -51px;
                    padding: 8px 5px;
                    
                    // transition: all .6s ease-in-out
                    transition: all 0.6s cubic-bezier(.65,-0.53,.24,1.12);
                }
                .expanded-tooltip-div::after {
                    content: "";
                    position: absolute;
                    top: 95%;
                    left: 16%;
                    margin-left: -9px;
                    border-width: 9px;
                    border-style: solid;
                    border-color:var(--main-color) transparent transparent transparent;
                }
                .tooltip-expand:hover .expanded-tooltip-div{
                    clip-path: circle(100%);
                }
                `}
            </style>
            <span>
                {props.displayedText}
            </span>
            <div className="relative-expand-div">
                <div className="expanded-tooltip-div">
                    <div className="expanded-tooltip-content">
                        {props.children}
                    </div>
                </div>
            </div>     
        </div >
    )
}

export default BaseHoverInfo


/*
  
 */