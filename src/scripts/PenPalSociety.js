//MODULE RESPONSIBILITIES:
    //Define ProjectName() function to return basic site HTML.  This HTML will inclide function calls for differenct sections of the site. 
    //Import those function calls from the pages they are defined on.
import { authorSelect } from "./author.js"
import { recipientSelect } from "./recipients.js"
import { topicSelect } from "./topic.js"


    export const PenPalSociety = () => {  
        return `
            <h2>Pen Pal Society</h2>
    
            <section class="authorNames">
               <h3>Authors</h3>
               ${authorSelect()}
               
            </section>  
    
            <section class="letterText">
                <h3>Letter</h3>
               
            </section>

            <section class="topics">
                <h3>Topics</h3>
                ${topicSelect()}
            </section>

            <section class="recipientNames">
                <h3>Recipient</h3>
                ${recipientSelect()}
               
            </section>

            <button class="button" id="sendLetter">Send Letter</button>

            <section class="savedLetters">
            <h3>Saved Letters</h3>
           
            </section>


             `
    }   

    //line 11 function call- drop down menu to choose author
    //line 21 function call- radio list with topicName options
    //line 26 function call- drop down menu to choose recipient
    //line 30 button?  where should code for the click event go? button to post new letter state object to API
    //line 33 function call- fetch letter state from API and display

