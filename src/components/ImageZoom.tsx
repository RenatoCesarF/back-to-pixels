
import { rgbDataURL } from '@utils/rgbDataURL'
import React from 'react'
import NextImage from 'next/image'
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
        <Zoom 
            wrapStyle={{display:"flex", alignContent:"center", justifyContent:"center"}}
            overlayBgColorEnd='rgb(0 0 0 / 81%)'
            scrollableEl={undefined}>
            <div className="image-container">
                <NextImage 
                    src={props.src} 
                    alt={props.alt}
                    className='next-image'
                    layout="fill"
                    placeholder='blur'
                    loading='lazy'
                    lazyBoundary='20px'
                    blurDataURL={rgbDataURL(72, 81, 136)} 
                    quality={100}  
                    unoptimized={true}
                />
            </div>
        </Zoom> 
    )
}
export default ImageZoom