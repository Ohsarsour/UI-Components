import { SiLinkedin, SiGithub } from "react-icons/si"

import { useTheme } from "./useTheme"
import { HiMiniMoon, HiMiniSun } from "react-icons/hi2"
import { Link } from "react-router-dom"
export const Navbar = () => {

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-zinc-700 dark:bg-zinc-900 ">
            <div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
                <div className="mx-auto w-full max-w-3xl space-y-20">

                    <div className="flex justify-between">
                        <div className="flex flex-1 items-center justify-start">
                            <Link className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800 dark:text-white"
                                to="/">
                                Ohsarsou
                            </Link>
                        </div>
                        <div className="flex flex-1 items-center justify-end">

                            <nav className="flex items-center space-x-1">
                                <ThemeToggler />
                                <a href="/" className="h-10 w-10 p-2 text-gray-800  hover:text-[#4078c0]  dark:text-white dark:hover:text-[#4078c0]">
                                    <SiLinkedin className="h-full w-full" />
                                </a>
                                <a href="/" className="h-10 w-10 p-2 text-gray-800 hover:text-[#4078c0]  dark:text-white dark:hover:text-[#4078c0]">
                                    <SiGithub className="h-full w-full" />
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}



const ThemeToggler = () => {
    const { isDarkMode, toggleDarkMode } = useTheme()
    return (
        <button onClick={() => toggleDarkMode()} className="h-10 w-10 p-2 text-gray-800 hover:text-amber-500 dark:text-white dark:hover:text-amber-400">
            {isDarkMode ? <HiMiniMoon /> : <HiMiniSun className="h-full w-full" />}
        </button>
    )
}
