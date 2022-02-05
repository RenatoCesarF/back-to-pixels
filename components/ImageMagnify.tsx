
import React, { useEffect, useState } from 'react'
import ReactImageMagnify from 'react-image-magnify'
import ReactDOM from "react-dom";

interface ImageZoomProps{
    src: string
    alt: string
    width?: string
    height?: string
    className?: string
}

const setImageSize = (setImageDimensions: any, imageUrl: string) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageDimensions({
        height: img.height,
        width: img.width
      });
    };
  };

const loadImage = (setImageDimensions: any, imageUrl: string) => {
    const img = new Image();
    img.src = imageUrl;
  
    img.onload = () => {
      setImageDimensions({
        height: img.height,
        width: img.width
      });
    };
    img.onerror = (err) => {
      console.log("img error");
      console.error(err);
    };
};


const imgStyle = {    
    "object-fit": "cover",
    "max-width": "100%",
    "display": "flex",
    "margin-left": "auto",
    "margin-right": "auto"
 }
const ImageMagnify: React.FC<ImageZoomProps> = (props: ImageZoomProps)=>{
    const [imageDimensions, setImageDimensions] = useState({});
    const imageUrl = props.src;
  
    useEffect(() => {
      setImageSize(setImageDimensions, imageUrl);
    }, []);
    
    return (
        <div>
            {Object.keys(imageDimensions).length === 0 ? (
            <></>
            ) : (
                <div >
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: props.alt,
                            src: props.src,
                            isFluidWidth: true,
                        },
                        largeImage: {
                            src: props.src,
                            width: imageDimensions.width * 1.4,
                            height: imageDimensions.height *1.4
                        }
                        
                        }} 
                        enlargedImagePosition='over'
                        imageStyle={imgStyle}
                    />
                </div>
            )}
        </div>

    )
}
export default ImageMagnify