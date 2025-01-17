import NextImage from "next/image";
import { rgbDataURL } from "@utils/rgbDataURL";

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    layout?: "fixed" | "fill" | "intrinsic" | "responsive" | "raw" | undefined;
    width?: string;
    height?: string;
}

const LazyImage = ({ src, alt, className, layout, width, height }: LazyImageProps) => {
    className = className || "next-image";
    const isFillLayout = layout === "fill";

    return (
        <NextImage
            src={src}
            alt={alt}
            className={className}
            placeholder="blur"
            loading="lazy"
            blurDataURL={rgbDataURL(72, 81, 136)}
            quality={100}
            unoptimized={true}
            width={isFillLayout ? undefined : parseInt(width ? width.toString() : "0")}
            height={isFillLayout ? undefined : parseInt(height ? height.toString() : "0")}
            fill={isFillLayout}
            style={{
                maxWidth: "100%",
                height: "auto",
            }}
        />
    );
};

export default LazyImage;
