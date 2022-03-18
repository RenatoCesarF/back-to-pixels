import React, { useState } from "react";

// This will be a image with lazy loading that starts blurry (or dark color) and then load

interface LazyImageProps{
    src: string,
    alt: string,
    width?: string,
    height?: string,
    className?: string,
}
export default function LazyLoadingImage({src, alt, className, width, height}: LazyImageProps){
    const [imageLoaded, setImageLoaded] = useState(false);

    // src image and trace image url
    // const { source, trace } = require(`./${src}`);
    // const { source, trace } = require(`./renato.png`);
    return (
        <div className="imageLoader">
            <img 
                src={`./renato.png`} alt={alt} 
                loading="lazy" className={"real-img " + className} 
                width={width} height={height}
                style={{
                    opacity: imageLoaded ? "1" : "0",
                }}
                onLoad={() => setImageLoaded(true)}
            />
            
            <img
                style={{
                    opacity: imageLoaded ? "0" : "1",
                }}
                src={`./renato.png`}
                alt={alt}
            />
        </div>
    )
    
};
