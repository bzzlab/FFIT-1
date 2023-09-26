/*
Task: Generate parallel classes (a,b,c,..) by using the base class by profession.

Sample output on web:
These are the IMS-Classes
Klasse: IM21a
Klasse: IM21b
Klasse: IM21c
Klasse: IM21d
Klasse: IM22a
Klasse: IM22b
Klasse: IM22c
Klasse: IM22d
....
Klasse: ME22a
Klasse: ME22b
Klasse: ME22c
Klasse: ME22d
 */

//Run function only if DOM is loaded
document.addEventListener("DOMContentLoaded", function (event) {//??
    //base classes per year
    let baseClasses = ['IM21', 'IM22', 'IM23', 'AP21', 'AP22', 'ME22', 'ME23'];
    //Generate parallel classes with UTF-codes
    let designator;//??
    let numOfClasses = baseClasses.length-1;//??
    let numOfParallelClasses = 4;//??
    let _class;//??
    let htmlOutput = '<ul>\n';//??
    for (let i = 0; i < numOfClasses ; i++) {//??
        //https://asecuritysite.com/coding/asc2
        designator = 0x61;//??
        _class = baseClasses[i];//??
        for (let i = 0; i < numOfParallelClasses; i++) {//??
            htmlOutput += `\t<li>Klasse: ${_class}${String.fromCharCode(designator++)}</li>\n`;//??
        }//??
    }//??
    htmlOutput += '</ul>';//??
    document.getElementById('classes').innerHTML = htmlOutput;//??
});//??
