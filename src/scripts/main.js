//MODULE RESPONSIBILITIES: connect js to html using query selector on container id; define and call a render function (renders by calling PenPalSociety(), which is the function that returns the basic html for the site)

import { fetchPenPals, fetchTopics } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"


const mainContainer = document.querySelector("#container")


//HOW DO I STOP THE PYRAMID OF DOOM?
const render = () => {
    fetchPenPals()
        .then(fetchTopics()
            .then(
                () => {
                    mainContainer.innerHTML = PenPalSociety()
                }
            )
        )


}

render()

