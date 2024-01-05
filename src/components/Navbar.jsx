import React from "react";
import App from "../App";
import { Link } from "react-router-dom";

function Navbar() {
    return (

        
        <div>
            <div className="title">
                <h1>Pandin Laileart</h1>    
            </div>
            <nav class="bg-white border-gray-800 dark:bg-brown">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
                <div class="hidden w-full md:block" id="navbar-default">
                    <ul class="font-medium flex justify-around flex-col space-x-4 p-9 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-brown dark:border-gray-700">
                        <li>
                            <Link 
                                to="/" 
                                class="block text-2xl py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-black md:dark:text-orange-500 md:dark:hover:text-blue-500" aria-current="page"
                                >Home
                            </Link>
                        </li>
                        <li>

                            <Link 
                                to="/portfolio" 
                                class="block text-2xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-orange-500 dark:hover:bg-red-700 dark:hover:text-black md:dark:hover:bg-transparent"
                                >Portfolio
                            </Link>
                        </li>
                        <li>
                            <a href="#" class="block text-2xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Podcast</a>
                        </li>
                        <li>
                            <a href="#" class="block text-2xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            </nav>
        </div>

    )
}

export default Navbar;