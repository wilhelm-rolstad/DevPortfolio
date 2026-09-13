export function startCrossfadeVideoLoop(
    videos: readonly [HTMLVideoElement, HTMLVideoElement],
    fadeSeconds = 1,
) {
    let activeIndex = 0
    let frame = 0
    let disposed = false
    let retryAfter = 0
    type Transition = {
        outgoing: HTMLVideoElement
        incoming: HTMLVideoElement
        fadeWindow: number
        duration: number
        startedAt: number | null
        playingAt: number | null
        firstFrameReady: boolean
        frameCallback: number | null
        lastOutgoingTime: number
    }
    let transition: Transition | null = null

    const fadeDuration = Number.isFinite(fadeSeconds) && fadeSeconds > 0 ? fadeSeconds : 1

    videos.forEach((video, index) => {
        video.pause()
        if (video.currentTime !== 0) video.currentTime = 0
        video.loop = true
        video.style.opacity = index === 0 ? '1' : '0'
        video.style.zIndex = index === 0 ? '0' : '1'
    })
    void videos[0].play().catch(() => {
        // Keep the first frame if the browser blocks background autoplay.
    })

    function cancelFrameCallback(next: Transition) {
        if (next.frameCallback !== null) {
            next.incoming.cancelVideoFrameCallback(next.frameCallback)
            next.frameCallback = null
        }
    }

    function retire(video: HTMLVideoElement) {
        video.style.opacity = '0'
        video.pause()
        // Seek while hidden, leaving the beginning ready for the next overlap.
        if (video.currentTime !== 0) video.currentTime = 0
        video.style.zIndex = '1'
    }

    function retry(next: Transition, now: number) {
        cancelFrameCallback(next)
        retire(next.incoming)
        transition = null
        retryAfter = now + Math.max(0.25, next.outgoing.duration - next.outgoing.currentTime) * 1000
    }

    function update(now: number) {
        if (disposed) return

        if (transition) {
            const next = transition
            const { outgoing, incoming } = next

            if (next.startedAt === null) {
                const remaining = outgoing.duration - outgoing.currentTime
                const safetyMargin = Math.min(0.04, next.fadeWindow / 10)
                const wrapped = outgoing.currentTime < next.lastOutgoingTime
                next.lastOutgoingTime = outgoing.currentTime

                // Some browsers throttle frame callbacks for an invisible video.
                const readinessFallback = next.playingAt !== null &&
                    now - next.playingAt >= 150 && incoming.readyState >= 2 &&
                    !incoming.seeking && incoming.currentTime > 0

                if (wrapped || remaining <= safetyMargin) {
                    // Let native looping carry playback if preparation is late.
                    retry(next, now)
                } else if (
                    next.playingAt !== null && (next.firstFrameReady || readinessFallback) &&
                    remaining <= next.fadeWindow
                ) {
                    cancelFrameCallback(next)
                    next.startedAt = now
                    next.duration = Math.min(next.fadeWindow, remaining - safetyMargin)
                }
            }

            if (transition === next && next.startedAt !== null) {
                const progress = Math.min((now - next.startedAt) / (next.duration * 1000), 1)

                // Only fade the upper layer; the opaque lower layer avoids a dark dip.
                incoming.style.opacity = String(progress)

                if (progress >= 1) {
                    retire(outgoing)
                    incoming.style.zIndex = '0'
                    activeIndex = 1 - activeIndex
                    transition = null
                }
            }
        } else if (!transition && now >= retryAfter) {
            const outgoing = videos[activeIndex]
            const incoming = videos[1 - activeIndex]
            const duration = outgoing.duration
            const fadeWindow = Math.min(fadeDuration, duration / 2)
            const preparationLead = Math.min(0.3, duration / 8)

            if (
                Number.isFinite(duration) && duration > 0 &&
                outgoing.currentTime >= duration - fadeWindow - preparationLead &&
                incoming.readyState >= 2 && !incoming.seeking && !incoming.error
            ) {
                const next: Transition = {
                    outgoing,
                    incoming,
                    fadeWindow,
                    duration: fadeWindow,
                    startedAt: null,
                    playingAt: null,
                    firstFrameReady: false,
                    frameCallback: null,
                    lastOutgoingTime: outgoing.currentTime,
                }
                transition = next
                incoming.style.opacity = '0'
                incoming.style.zIndex = '1'

                void incoming.play().then(() => {
                    if (disposed || transition !== next) return
                    next.playingAt = performance.now()
                    if (typeof incoming.requestVideoFrameCallback === 'function') {
                        next.frameCallback = incoming.requestVideoFrameCallback(() => {
                            next.frameCallback = null
                            if (!disposed && transition === next) next.firstFrameReady = true
                        })
                    }
                }).catch(() => {
                    if (disposed || transition !== next) return
                    retry(next, performance.now())
                })
            }
        }

        frame = requestAnimationFrame(update)
    }

    frame = requestAnimationFrame(update)

    return () => {
        disposed = true
        cancelAnimationFrame(frame)
        if (transition) cancelFrameCallback(transition)
        videos.forEach(video => video.pause())
    }
}
