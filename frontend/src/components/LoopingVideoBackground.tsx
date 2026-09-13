import { useEffect, useRef } from 'react'
import { startCrossfadeVideoLoop } from '../utils/crossfadeVideo'

type LoopingVideoBackgroundProps = {
    src: string
    fadeSeconds?: number
}

export default function LoopingVideoBackground({ src, fadeSeconds = 1 }: LoopingVideoBackgroundProps) {
    const firstVideo = useRef<HTMLVideoElement>(null)
    const secondVideo = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (!firstVideo.current || !secondVideo.current) return
        return startCrossfadeVideoLoop([firstVideo.current, secondVideo.current], fadeSeconds)
    }, [src, fadeSeconds])

    return (
        <>
            <video
                ref={firstVideo}
                src={src}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                style={{ opacity: 1, zIndex: 0 }}
            />
            <video
                ref={secondVideo}
                src={src}
                loop
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                style={{ opacity: 0, zIndex: 1 }}
            />
        </>
    )
}
