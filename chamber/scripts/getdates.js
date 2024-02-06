

//a function to display the current copyright year and information in my HTML footer
function displayYear() {
    document.getElementById("copyrightName").innerHTML = `&copy ${new Date().getFullYear()} Kirsten Atkinson - WDD 230`;
}

//a function to display when the document was last modified
function displayLastModified() {
    document.getElementById("lastModified").innerHTML = `Last Modified: ${new Date(document.lastModified)}`
}

displayYear();
displayLastModified();