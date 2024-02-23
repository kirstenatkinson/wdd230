//a function to display when the document was last modified
function displayLastModified() {
    document.getElementById("lastModified").innerHTML = `Last Modified: ${new Date(document.lastModified)}`;
    console.log('It worked')
}

displayLastModified();