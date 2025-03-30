import { ImgHTMLAttributes } from "react";
import "./Picture.scss";

type Source = {
    media: string;
    srcSet: string;
};

type PictureProps = ImgHTMLAttributes<HTMLPictureElement>&{
    src: string;
    alt: string;
    sources?: Source[];
    className?: string;
    loading?: "lazy"|"eager";
}

export default function Picture({src, alt, sources = [], className, loading = "lazy", ...rest}: PictureProps) {

    return (
        <picture className={`picture ${className ? className : ""}`} {...rest}>
            {sources.map((source, index) => (
                <source key={index} media={source.media} srcSet={source.srcSet}/>
            ))}

            <img className="picture__image" src={src} alt={alt} loading={loading} {...rest}/>
        </picture>
    );
}