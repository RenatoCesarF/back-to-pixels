import NextImage from 'next/image'
import { rgbDataURL } from "@utils/rgbDataURL"


interface LazyImageProps {
    src: string,
    alt: string,
    className?: string
    layout?: "fixed" | "fill" | "intrinsic" | "responsive" | "raw" | undefined
    width?: string
    height?: string

}

const LazyImage = ({ src, alt, className, layout, width, height }: LazyImageProps) => {
    className = className || "next-image";
    layout = layout || "fill";
    return (
        <NextImage
            src={src}
            alt={alt}
            className={className}
            layout={layout}
            placeholder='blur'
            loading='lazy'
            lazyBoundary='20px'
            blurDataURL={rgbDataURL(72, 81, 136)}
            quality={100}
            unoptimized={true}
            width={parseInt(width ? width.toString() : "0")}
            height={parseInt(height ? height.toString() : "0")}
        />
    )
}

export default LazyImage