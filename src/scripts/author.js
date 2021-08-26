//MODULE RESPONSIBILITIES:
    //define a function that returnsd the html for the author dropdown


import { getPenPals } from "./dataAccess.js"

//CT function populates the author dropdown menu 
export const authorSelect = () => {
    const authors = getPenPals()
    
    let html = ""
    html += "<select id='authors'><option value='0'>Author</option>" 
    
    const authorOptions = authors.map(penPal => {
        //let authorNames = penPal.name
        return `<option value="${penPal.id}">${penPal.name}</option>`
        }).join("")

    html += authorOptions
    html += "</select>"
    return html
}
    
    