
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
        // <div className='image-zoom'>
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
                        blurDataURL={rgbDataURL(56, 47, 96)} 
                        quality={100}  
                        unoptimized={true}
                    />
                </div>
            </Zoom> 
        // </div>
    )
}
export default ImageZoom