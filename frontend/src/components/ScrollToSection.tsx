import { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function ScrollToSection() {
    const location = useLocation()

    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            if (location.pathname === '/' && location.hash) {
                const target = document.getElementById(location.hash.slice(1))
                if (!target) return

                const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
                target.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' })
                target.focus({ preventScroll: true })
            } else {
                window.scrollTo({ top: 0, behavior: 'instant' })
            }
        })

        return () => cancelAnimationFrame(frame)
    }, [location])

    return null
}
