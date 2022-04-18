import { getValueTransition } from "framer-motion/types/animation/utils/transitions";
import { useEffect, useState } from "react";

interface ParalaxImage {
    source: string,
    layerLevel: number
}

function getImages(mousePosition: any){
    const images: ParalaxImage[] = [
        {'source': '/images/test/1.png', 'layerLevel': 1},
        {'source': '/images/test/2.png', 'layerLevel': 1},
        {'source': '/images/test/3.png', 'layerLevel': 1},
        {'source': '/images/test/4.png', 'layerLevel': 3},
        {'source': '/images/test/5.png', 'layerLevel': 6},
        {'source': '/images/test/6.png', 'layerLevel': 6},
        {'source': '/images/test/7.png', 'layerLevel': 6},
        {'source': '/images/test/8.png', 'layerLevel': 10},
        {'source': '/images/test/9.png', 'layerLevel': 10},
        {'source': '/images/test/10.png', 'layerLevel': 10},
        {'source': '/images/test/11.png', 'layerLevel': 10},
        {'source': '/images/test/11.png', 'layerLevel':10}
    ]
    return (
        <>
            {
                images.map((value: ParalaxImage, index: number) =>{
                    const yPosition = -50 + ((mousePosition.y / 4) * value.layerLevel)/15;
                    const xPosition = -200 + ((mousePosition.x / 4) * value.layerLevel)/15;
                    return(
                        <img src={value.source} key={index} className="paralax-image" 
                            style={{transform: `translate(${xPosition}px,${yPosition}px)`}}
                        />
                    ) 
                })
            }
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