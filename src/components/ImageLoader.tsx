import { useState } from "react";
import { motion } from "motion/react";

interface ImageLoaderProps {
    src: string;
    alt: string;
    className?: string;
}

export default function ImageLoader({
    src,
    alt,
    className = "",
}: ImageLoaderProps) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative overflow-hidden rounded-xl">

            {/* Skeleton */}
            {!loaded && (
                <div className="absolute inset-0 animate-pulse rounded-xl bg-gray-200" />
            )}

            {/* Image */}
            <motion.img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: loaded ? 1 : 0,
                }}
                transition={{
                    duration: .4,
                    ease: "easeOut",
                }}
                className={className}
            />
        </div>
    );
}