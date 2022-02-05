
import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

interface ImageZoomProps{
    src: string
    alt: string
    width?: string
    height?: string
    className?: string
}


const ImageZoom: React.FC<ImageZoomProps> = (props: ImageZoomProps)=>{
    return (
        <div className='image-zoom'>

            <Zoom overlayBgColorEnd='rgb(0 0 0 / 81%)' scrollableEl={undefined}>
                <img
                    className={props.className}
                    alt={props.alt}
                    src={props.src}
                    height={props.height}
                    width={props.width}
                    />
            </Zoom>
        </div>
    )
}
export default ImageZoom