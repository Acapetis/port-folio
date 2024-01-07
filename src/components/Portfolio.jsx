import React from "react";
import App from "../App";
import { Link } from "react-router-dom";

function Portfolio() {
    return (
        <>
            <h3 class="text-2xl text-center p-10">Portfoilio</h3>
            <div class="px-4 sm:px-0">
                <h3 class="text-base font-semibold leading-7 text-gray-900 text-3xl">My Web App</h3>
                <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 text-2xl">All project and Source</p>
            </div>
            <div class="mt-6 border-t border-gray-100">
                <dl class="divide-y divide-gray-100">
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-2xl text-sm font-medium leading-6 text-gray-900"><Link to="https://acapetis.github.io/react-astro-web/">Astronomy Club</Link></dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Astro</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-2xl text-sm font-medium leading-6 text-gray-900"><Link to="https://acapetis.github.io/heat-map/">Heat Map Visualize</Link></dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><Link to="https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json">Temperature Data</Link></dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-2xl text-sm font-medium leading-6 text-gray-900"><Link to="https://acapetis.github.io/visualize-scatter-graph/">Cyclist Visualize</Link></dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><Link to="https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json">Scatter Data</Link></dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-2xl text-sm font-medium leading-6 text-gray-900"><Link to="https://acapetis.github.io/visualize-bar-chart/">Bar Chart</Link></dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><Link to="https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json">Bar Data</Link></dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-2xl text-sm font-medium leading-6 text-gray-900"><Link to="https://acapetis.github.io/twenty-five-clock/">25 Clock</Link></dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><Link to="#">Clock</Link></dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-2xl text-sm font-medium leading-6 text-gray-900"><Link to="https://acapetis.github.io/js-calculator/">Calculator</Link></dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><Link to="#">Calculator</Link></dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-2xl text-sm font-medium leading-6 text-gray-900"><Link to="https://acapetis.github.io/drum-machine/">Drum</Link></dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><Link to="#">Drum</Link></dd>
                    </div>
                    
                </dl>
            </div>
            
            <div class="px-4 sm:px-0">
                <h3 class="text-base font-semibold leading-7 text-gray-900 text-3xl">Github</h3>
                <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 text-2xl"></p>
            </div>
            <div class="mt-6 border-t border-gray-100">
                <dl class="divide-y divide-gray-100">
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-2xl text-sm font-medium leading-6 text-gray-900"><Link to="https://github.com/Acapetis?tab=overview&from=2023-12-01&to=2023-12-31">Github</Link></dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
                    </div>
                </dl>
            </div>


            <div class="px-4 sm:px-0">
                <h3 class="text-base font-semibold leading-7 text-gray-900 text-3xl">Linked In</h3>
                <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 text-2xl"></p>
            </div>
            <div class="mt-6 border-t border-gray-100">
                <dl class="divide-y divide-gray-100">
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-2xl text-sm font-medium leading-6 text-gray-900"><Link to="https://www.linkedin.com/in/pandin-lailert-37041b24a/">pandin laileart</Link></dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
                    </div>
                </dl>
            </div>



        </>

    )
}

export default Portfolio;