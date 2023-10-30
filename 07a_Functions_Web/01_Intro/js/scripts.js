/***
 * function without parameter
 */
function hello1() {
    let msg = "Hallo liebe Lernende";
    alert(msg);
    document.getElementById("out").innerText = msg;
}

/***
 * function with parameter
 */
function hello2(klasse) {
    let msg = "Hallo lieber Lernende der Klasse " + klasse;
    alert(msg);
    console.log("Log: " + msg);
    document.getElementById("out").innerText = msg;
}

/***
 * function with parameter and return
 */
function hello3() {
    let eingabe = document.getElementById('eingabe').value;
    let msg = wellcome(eingabe);
    console.log("Log: " + msg);
}

function wellcome(klasse) {
    let msg = "Hallo lieber Lernende der Klasse " + klasse;
    document.getElementById("out").innerText = msg;
    return msg;
}

