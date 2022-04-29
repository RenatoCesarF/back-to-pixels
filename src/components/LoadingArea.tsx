import { getRandomInteger } from "@helpers/randomNumber"


interface LoadingAreaProps{
    height?: string
    width?: string
    borderRadius?: string
    margin?: string
}
interface RandomLoadingAreaProps{
    amount:number
}
const LoadingArea = ({height = "100%", width = "100%", borderRadius = "0", margin = "0.5rem"}: LoadingAreaProps)=>{
    const extraStyle = {
        height: `${height}`, 
        width: `${width}`, 
        borderRadius: `${borderRadius}`,
        margin: margin
    }
    return(
        <div 
            className="loading-area" 
            style={extraStyle}>

        </div>
    )
}

export const RandomLoadingAreas = ({amount}: RandomLoadingAreaProps) => {
    const randomHeights:number[] = [];
    for(let i = 0; i < amount; i ++){
        randomHeights.push(getRandomInteger(4,15));
    }

    return (
        <>
            {   
                randomHeights.map((height:number, index:number)=>{
                    return <LoadingArea  key={index} height={`${height}rem`} width="100%" borderRadius="0.4rem"/>
                })
            }
        </>
    );
    
}


export default LoadingArea;