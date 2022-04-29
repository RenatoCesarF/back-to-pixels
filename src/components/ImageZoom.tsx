

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';

import LazyImage from '@components/LazyImage'


interface ImageZoomProps{
    src: string
    alt: string
    className?: string
}


const ImageZoom: React.FC<ImageZoomProps> = (props: ImageZoomProps)=>{
    return (
        <Zoom 
            wrapStyle={{display:"flex", alignContent:"center", justifyContent:"center"}}
            overlayBgColorEnd='rgb(0 0 0 / 81%)'
            scrollableEl={undefined}>
            <div className="image-container">
                <LazyImage src={props.src} alt={props.alt} className={props.className}/>
            </div>
        </Zoom> 
    )
}
export default ImageZoom