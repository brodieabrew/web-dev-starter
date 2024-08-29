window.onload = loaded;

let helloButton = document.getElementById("sayHelloButton"); 
/**
 * Simple Function that will be run when the browser is finished loading.
 */
export function loaded() {
    if(helloButton != null) {
        helloButton.addEventListener("click", sayHello, false);
    }
}

/**
 * This function returns the string 'hello' and 
 * runs alert if the hello button is found.
 * @return {string} the string hello
 */
export function sayHello() {
    if(helloButton != null) {
        alert("Hello!");
    }
    
    return 'hello';
}
