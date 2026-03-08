"use client";

import { useEffect, useRef, useState } from "react";

interface YouTubeEmbedProps {
    videoId: string;
    className?: string;
    autoPlay?: boolean;
    loop?: boolean;
    interactive?: boolean;
}

export default function YouTubeEmbed({ videoId, className = "", autoPlay = true, loop = true, interactive = false }: YouTubeEmbedProps) {
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);

    // Timeout fallback for loading state
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsIframeLoaded(true);
        }, 3000); // Fail gracefully after 3 seconds
        return () => clearTimeout(timer);
    }, [videoId]);

    // We use the youtube nocookie domain, disable controls, mute, and loop.
    const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${autoPlay ? 1 : 0}&mute=1&controls=${interactive ? 1 : 0}&showinfo=0&rel=0&modestbranding=1&loop=${loop ? 1 : 0}&playlist=${videoId}&playsinline=1`;

    return (
        <div className={`relative w-full h-full overflow-hidden bg-black ${className}`}>
            <iframe
                className={`absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${isIframeLoaded ? "opacity-100" : "opacity-0"} ${interactive ? "" : "pointer-events-none"}`}
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                onLoad={() => setIsIframeLoaded(true)}
            />
            {/* Fallback loading state */}
            {!isIframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <div className="w-6 h-6 border-2 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
}
