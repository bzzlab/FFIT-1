//set variables or constant EUR,CHF & USD
const EUR = "eur";//??
const CHF = "chf";//??
const USD = "usd";//??

//Set conversion i.e. from https://www1.oanda.com/currency/converter/
let CHF_EUR = 0.92901;//??
let CHF_USD = 1.07378;//??
let EUR_CHF = 1.07619;//??
let USD_CHF = 0.93109;//??

//get values from form
let locAm = document.getElementById("localAmount");//??
let locEx = document.getElementById("localExchange");//??
let forAm = document.getElementById("foreignAmount");//??
let forEx = document.getElementById("foreignExchange");//??


/**
 * function convert amount by exchange rate
 * @param amount
 * @param exchange_rate
 * @returns {string}
 */
function convert(amount, exchange_rate) {//??
    return Math.fround(amount * exchange_rate).toFixed(4);//??
}//??

/**
 *  from CHF to foreign exchange
 */
function localToForeign() {
    /* Ist Ausgangswährung CHF dann ... */
    if (locEx.value === CHF) {//??
        /* ... und die Zielwährung EUR dann ... */
        if (forEx.value === EUR) {//??
            /* ... rufe die Funktion auf zur Berechnung des EUR-Kurses  */
            forAm.value = convert(locAm.value, CHF_EUR);//??
        }//??
        if (forEx.value === USD) {//??
            /* ... rufe die Funktion auf zur Berechnung des USD-Kurses  */
            forAm.value = convert(locAm.value, CHF_USD);//??
        }//??
    }//??
}

/**
 *  from foreign exchange to CHF
 */
function foreignToLocal() {
    /* Ist Ausgangswährung CHF dann ... */
    if (locEx.value === CHF) {//??
        /* ... und die Zielwährung EUR dann ... */
        if (forEx.value === EUR) {//??
            /* ... rufe die Funktion auf zur Berechnung des EUR-Kurses  */
            locAm.value = convert(forAm.value, EUR_CHF);//??
        }//??
        if (forEx.value === USD) {//??
            /* ... rufe die Funktion auf zur Berechnung des USD-Kurses  */
            locAm.value = convert(forAm.value, USD_CHF);//??
        }//??
    }//??
}
