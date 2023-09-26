/*
Topic: Loops (Schleifen) with arrays
 */

document.addEventListener("DOMContentLoaded", function (event) {
//declare an array with classes
    let classes = ['IM21a', 'IM22a', 'IM22b', 'IM23a', 'IM23b'];

//generate HTML-Code with a for-loop
    let htmlOutput = '<ol>\n';
    for (let i = 0; i < classes.length; i++) {
        htmlOutput = htmlOutput + `\t<li>Klasse ${classes[i]}</li>\n`;
        //htmlOutput += `\t<li>Klasse ${classes[i]}</li>\n`;
    }
    htmlOutput += '</ol>';
    document.getElementById('classes').innerHTML = htmlOutput;
});
