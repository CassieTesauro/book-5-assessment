//MODULE RESPONSIBILITIES:
    //define a function that returns the html for the topic dropdown


    import { getTopics } from "./dataAccess.js"

    //CT function populates the author dropdown menu 
    export const topicSelect = () => {
        const topics = getTopics()
        
        let html = ""
        html += "<select id='topics'><option value='0'>Letter Topic</option>" 
        
        const topicOptions = topics.map(topic => {
            //let authorNames = penPal.name
            return `<option value="${topic.id}">${topic.topicName}</option>`
            }).join("")
    
        html += topicOptions
        html += "</select>"
        return html
    }
        