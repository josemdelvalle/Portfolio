var copyText;
function copyFunction(text){
copyText=text

document.addEventListener('copy',myFunction)
document.execCommand("copy");
document.removeEventListener("copy", myFunction);


}

function myFunction(e){
  // e.clipboardData is initially empty, but we can set it to the
    // data that we want copied onto the clipboard.
    e.clipboardData.setData('text/plain', copyText);
  
    console.log('asd')
    // This is necessary to prevent the current document selection from
    // being written to the clipboard.
    e.preventDefault();

     /* Alert the copied text */
  alert("Copied the text: " + copyText+ " to clipboard");
}

