//MODULE RESPONSIBILITIES:
    //define a function that returnsd the html for the letter text input field

export const letterText = () => {
    let html = `
        <div>
            <input name="letterText" class="letter__text" type="text" placeholder="Type your letter here.">
        </div>
    `
    return html
}