import dynamic  from "next/dynamic";
// This will be a image with lazy loading that starts blurry (or dark color) and then load

interface LazyImageProps{
    src: string,
    alt: string,
}
export default function LazyImage({src, alt}: LazyImageProps){
    return (
        <img src={src} alt={alt} loading="lazy"/>
    )
    
};