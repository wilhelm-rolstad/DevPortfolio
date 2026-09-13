import { useState } from 'react'
import myPdf from '../assets/CV.pdf'

export default function CvBoks() {
    const [expanded, setExpanded] = useState(false)

    return (
        <section id="cv" tabIndex={-1} aria-labelledby="cv-title" className="w-full scroll-mt-32 rounded-2xl border border-gray-200 bg-white p-6 focus:outline-none">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 id="cv-title" className="text-2xl">CV</h2>
                    <p className="mt-2 text-sm text-gray-600">Se utdanning og erfaring, eller last ned CV-en min.</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                    <button type="button" aria-expanded={expanded} aria-controls="cv-preview"
                        onClick={() => setExpanded(open => !open)}
                        className="cursor-pointer rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-4">
                        {expanded ? 'Skjul CV' : 'Vis CV'}
                    </button>
                    <a href={myPdf} download className="rounded-lg border border-gray-200 px-4 py-2 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-4">
                        Last ned CV
                    </a>
                </div>
            </div>
            {expanded && (
                <iframe id="cv-preview" src={myPdf} title="CV Wilhelm Rolstad" className="mt-6 h-[70vh] w-full rounded-lg border border-gray-200" />
            )}
        </section>
    )
}
