const Nav = () => {
        return (
            <header className="absolute inset-x-0 top-0 z-50 py-6">
                <div className="w-full px-5 sm:px-10 md:px-12 lg:px-5 mx-auto max-w-7xl">
                    <nav className="w-full flex justify-between gap-6 relative">
                        <div className="min-w-max inline-flex relative">
                            <a aria-current="page" href="/" className="router-link-active router-link-exact-active relative flex items-center gap-3">
                                <span className="flex">
                                    <span className="w-3 h-6 rounded-l-full flex bg-emerald-600"></span>
                                    <span className="w-3 h-6 rounded-r-full flex bg-teal-400 mt-1.5"></span>
                                </span>
                                <div className="inline-flex text-lg text-neutral-800 dark:text-white font-semibold">Estavis</div>
                            </a>
                        </div>
                        <div aria-hidden="true" className="fixed bg-border-neutral-700/50 inset-0 backdrop-filter backdrop-blur-xl hidden lg:!hidden bg-neutral-800/40"></div>
                        <div className="absolute lg:relative w-full flex overflow-hidden duration-300 ease-linear lg:w-full lg:h-auto top-full lg:top-0 border-neutral-200 dark:border-neutral-700 lg:border-0 flex-col lg:flex-row gap-y-6 gap-x-4 lg:justify-between lg:items-center bg-white dark:bg-neutral-950 lg:!bg-transparent translate-y-10 invisible opacity-0 lg:opacity-100 lg:visible lg:translate-y-0">
                            <ul className="px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-neutral-700 dark:text-neutral-300 w-full lg:justify-center lg:items-center">
                                <li><a aria-current="page" href="/#" className="router-link-active router-link-exact-active duration-300 font-medium ease-linear hover:text-emerald-600 py-3">Home</a></li>
                                <li><a aria-current="page" href="/#" className="router-link-active router-link-exact-active duration-300 font-medium ease-linear hover:text-emerald-600 py-3">Services</a></li>
                                <li><a aria-current="page" href="/#" className="router-link-active router-link-exact-active duration-300 font-medium ease-linear hover:text-emerald-600 py-3">About us</a></li>
                                <li><a aria-current="page" href="/#" className="router-link-active router-link-exact-active duration-300 font-medium ease-linear hover:text-emerald-600 py-3">Features</a></li>
                            </ul>
                            <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 px-6 lg:px-0">
                                <a aria-current="page" href="/#" className="router-link-active router-link-exact-active flex justify-center items-center w-full sm:w-max px-6 h-12 bg-emerald-600 rounded-full relative overflow-hidden border-transparent hover:border-emerald-700 duration-300 ease-linear after:absolute after:content-[''] after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-emerald-700">
                                    <span className="relative z-10 text-white">Get Started</span>
                                </a>
                            </div>
                        </div>
                        <div className="min-w-max flex items-center gap-x-3">
                            <button aria-label="switch theme" className="border-gray-100 dark:border-gray-800 outline-none flex relative text-gray-700 dark:text-gray-300 rounded-full p-2 lg:p-3 bg-transparent">
                                <span className="i-carbon-moon text-xl bg-gray-700 dark:bg-gray-300 hidden dark:flex"></span>
                                <span className="i-carbon-sun text-xl bg-gray-700 dark:bg-gray-300 flex dark:hidden"></span>
                            </button>
                            <button aria-label="toggle navbar" className="lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative bg-transparent">
                                <span className="bg-neutral-700 dark:bg-neutral-300 w-6 h-0.5 rounded-full transition-all duration-300 ease-linear"></span>
                                <span className="bg-neutral-700 dark:bg-neutral-300 w-6 origin-center mt-1 h-0.5 rounded-full transition-all duration-300 ease-linear"></span>
                                <span className="bg-neutral-700 dark:bg-neutral-300 w-6 mt-1 h-0.5 rounded-full transition-all duration-300 ease-linear"></span>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        )
}