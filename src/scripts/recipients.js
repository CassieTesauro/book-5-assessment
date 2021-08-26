//MODULE RESPONSIBILITIES:
    //define a function that returns the html for the recipient dropdown


    import { getPenPals } from "./dataAccess.js"

    //CT function populates the author dropdown menu 
    export const recipientSelect = () => {
        const recipients = getPenPals()
        
        let html = ""
        html += "<select id='recipients'><option value='0'>Recipient</option>" 
        
        const recipientOptions = recipients.map(penPal => {
            //let authorNames = penPal.name
            return `<option value="${penPal.id}">${penPal.name}</option>`
            }).join("")
    
        html += recipientOptions
        html += "</select>"
        return html
    }
        