const Footer = () => {
    const linkClassName = "w-fit rounded-sm underline-offset-4 transition-colors hover:text-gray-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-500"

    return (
        <footer className="mt-auto w-full border-t border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-gray-600 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
                <p className="shrink-0">© {new Date().getFullYear()} Wilhelm Rolstad</p>

                <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                    <a className={`${linkClassName} break-all`} href="mailto:wilhelmsrolstad@gmail.com">
                        wilhelmsrolstad@gmail.com
                    </a>
                    <a className={linkClassName} href="tel:+4790612335">
                        +47 90 61 23 35
                    </a>
                </div>

                <nav aria-label="Sosiale medier" className="flex flex-wrap items-center gap-5">
                    <a className={linkClassName} href="https://github.com/wilhelm-rolstad">
                        GitHub
                    </a>
                    <a className={linkClassName} href="https://www.linkedin.com/in/wilhelm-rolstad-590a29361/">
                        LinkedIn
                    </a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
