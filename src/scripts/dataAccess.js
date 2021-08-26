//MODULE RESPONSIBILITIES:
    //house an object to store the application state
    //instantiate variable to query select #container
    //instantiate variable to reference the API url
    //Define expotable function to fetch perm API state and store in app state
    //Define exportable getter to let other modules use the app state
    //Define exportable sender function (fetch using post method).  Should trigger a statechanged custom event to rerender.
    //Define exportable delete function (fetch using delete method).  Should trigger a statechanged custom event to rerender.


    const applicationState = {
        penPals: [],
        letters:[],
        topics: [],
        letterDraft: {}
    }

    const mainContainer = document.querySelector("#container")

    const API = "http://localhost:8088"  


    //fetches penpal state from API and stores it locally
    export const fetchPenPals = () => {
        return fetch(`${API}/penPals`)
        .then(response => response.json())
        .then(
            (fetchedAPIPenPals) => {
                applicationState.penPals = fetchedAPIPenPals
            }
        )    
    }

    //makes a copy of the penpal local state to be used in other modules
    export const getPenPals = () => {
        return applicationState.penPals.map(penPal => ({...penPal}))  
    }
    
