import { getValueTransition } from "framer-motion/types/animation/utils/transitions";
import { useEffect, useState } from "react";

interface ParalaxImage {
    source: string,
    layerLevel: number
}

function getImages(mousePosition: any){
    const images: ParalaxImage[] = [
        {'source': '/images/paralax/arrows.png', 'layerLevel': 2},
        {'source': '/images/paralax/logo_shadow.png', 'layerLevel': 7},
        {'source': '/images/paralax/logo.png', 'layerLevel': 5},

    ]
    return (
        <>
            {
                images.map((value: ParalaxImage, index: number) =>{
                    const yPosition = 2 + (((mousePosition.y / 10) * value.layerLevel)/60);
                    const xPosition = -4 + (((mousePosition.x / 10) * value.layerLevel)/60);
                    return(
                        <img src={value.source} key={index} className="paralax-image" 
                            style={{transform: `translate(${xPosition}%,${yPosition}%)`}}
                        />
                    ) 
                })
            }
           
            <div className="radiend-shadow"/>
        </>
    )
}
const ParalaxElement = () =>{
    const [mousePosition, setMousePosition] = useState({"x":300, "y": 300});

    useEffect(
        () => {
            const update = (e:any) => {
                setMousePosition({"x": e.x, "y": e.y})
            }

            window.addEventListener('mousemove', update)
            window.addEventListener('touchmove', update)
        },
        [setMousePosition]
    );
    return (
        <div className="paralax-container">
            { getImages(mousePosition) }
        </div>
    )
}


export default ParalaxElement;