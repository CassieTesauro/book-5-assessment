//MODULE RESPONSIBILITIES: connect js to html using query selector on container id; define and call a render function (renders by calling PenPalSociety(), which is the function that returns the basic html for the site)

import { fetchPenPals } from "./dataAccess.js"
import { PenPalSociety } from "./PenPalSociety.js"


const mainContainer = document.querySelector("#container")



const render = () => {
    fetchPenPals()
    //other fetch calls
    .then(
        () => {
            mainContainer.innerHTML = PenPalSociety()
        }
    )

    
}

render()

