import { Link, NavLink, useLocation } from 'react-router'
import { useState } from 'react'
import { Languages } from 'lucide-react'
import LOGO from '../assets/LOGOwilhelmrolstad.svg?react'

const sections = [
    { id: 'hjem', label: 'Hjem' },
    { id: 'prosjekter', label: 'Prosjekter' },
    { id: 'cv', label: 'CV' },
]

export default function Navbar() {
    const [languageOpen, setLanguageOpen] = useState(false)
    const { pathname, hash } = useLocation()
    const linkClass = 'rounded-sm py-1 underline-offset-4 transition-colors hover:text-black hover:underline focus-visible:outline-2 focus-visible:outline-offset-4'

    return (
        <nav aria-label="Hovedmeny" className="sticky top-0 z-100 w-full border-b border-gray-200 bg-white text-gray-600">
            <div className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-3 px-5 py-4 sm:px-10">
                <Link to="/#hjem" aria-label="Til toppen av forsiden" className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4">
                    <LOGO className="h-6 w-23 fill-black" />
                </Link>
                <div className="order-last flex w-full justify-center gap-5 text-sm sm:order-none sm:w-auto sm:gap-7">
                    {sections.map(({ id, label }) => {
                        const active = pathname === '/' && (hash || '#hjem') === '#' + id
                        return (
                            <Link key={id} to={'/#' + id} aria-current={active ? 'location' : undefined}
                                className={linkClass + (active ? ' text-black underline' : '')}>
                                {label}
                            </Link>
                        )
                    })}
                    <NavLink to="/contact" className={({ isActive }) => linkClass + (isActive ? ' text-black underline' : '')}>
                        Kontakt
                    </NavLink>
                </div>
                <div className="relative">
                    <button type="button" aria-label="Vis språkvalg" aria-expanded={languageOpen}
                        aria-controls="language-options" onClick={() => setLanguageOpen(open => !open)}
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2">
                        <Languages size={19} />
                    </button>
                    <div id="language-options" hidden={!languageOpen} className="absolute right-0 top-full mt-2 rounded-lg border border-gray-200 bg-white p-3 text-sm shadow-sm">
                        <p lang="no">No</p>
                        <p lang="en" className="mt-2">En</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
