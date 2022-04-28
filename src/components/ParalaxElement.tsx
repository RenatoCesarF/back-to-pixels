import { useEffect, useState } from "react";

interface ParalaxImage {
    source: string,
    layerLevel: number,
    customClass?: string,
}
interface Position{
    y: number
    x: number
}

const ParalaxElement = () =>{
    const [mousePosition, setMousePosition] = useState({"x":500, "y": 500});

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
            { getParalaxElements(mousePosition) }
            <div className="radiend-shadow"/>
        </div>
    )
}

const getParalaxElements = (mousePosition: Position): JSX.Element =>{
    return(
        <>
            {
                getParalaxImagesElements(mousePosition)
            }
        </>
    )
}

const getParalaxImagesElements = (mousePosition: Position): JSX.Element =>{
    const images: ParalaxImage[] = [
        {source: '/images/paralax/arrows.png', layerLevel: 2},
        {source: '/images/paralax/logo_shadow.png', layerLevel:6,  customClass: "logo-paralax"},
        {source: '/images/paralax/logo.png', layerLevel: 5, customClass: "logo-paralax"},

    ]
    return (
        <>
            {
                images.map((value: ParalaxImage, index: number) =>{
                    const position = getOffsetPosition(mousePosition, value.layerLevel);

                    return(
                        <img src={value.source} key={index} className={`paralax-image ${value.customClass}`} alt="paralax-image" 
                            style={{transform: `translate(${position.x}%,${position.y}%)`}}
                        />
                    ) 
                })
            }
           
        </>
    )
}

const getOffsetPosition = (mousePosition:Position, layerLevel: number): Position => {
    const yPosition = (((mousePosition.y / 10) * layerLevel)/60) 
    const xPosition = -4 + (((mousePosition.x / 10) * layerLevel)/60)
    const position: Position = {"x": xPosition ,"y": yPosition }
    return position
}

export default ParalaxElement;