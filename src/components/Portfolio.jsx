import React from "react";
import App from "../App";
import { Link } from "react-router-dom";

function Portfolio() {
    return (
        <>
            <h3 class="text-2xl text-center p-10">Portfoilio</h3>
            <div>
                <ul class="pl-5 list-disc text-3xl">My Web App
                    <li class="text-2xl"><Link to="https://acapetis.github.io/react-astro-web/">Astronomy Club</Link></li>
                    <li class="text-2xl"><Link to="ycs">YCS</Link></li>

                </ul>
            </div>
            <div>
                <ul class=" text-3xl">Github
                    <li class="text-2xl"><Link to="#">Github</Link></li>

                </ul>
            </div>
            <div>
                <ul class="text-3xl">Linked In
                    <li class="text-2xl"><Link to="#">Pandin</Link></li>

                </ul>
            </div>


        </>

    )
}

export default Portfolio;