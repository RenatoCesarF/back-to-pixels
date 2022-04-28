

interface LoadingAreaProps{
    height?: string
    width?: string
    borderRadius?: string
}
const LoadingArea = ({height = "100%", width = "100%", borderRadius = "0"}: LoadingAreaProps)=>{
    return(
        <div className="loading-area" style={{height: `${height}`, width: `${width}`, borderRadius: `${borderRadius}`}}>

        </div>
    )
}

export default LoadingArea