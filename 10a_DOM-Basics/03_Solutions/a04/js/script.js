//start at index 1
let index = 1;
let entrynumber = 0;
let totalPrice = 0.0;
const TOTAL_PRICE="totalprice";
//get html elements
let bild = document.getElementById("pic");
let label = document.getElementById("label");
let price = document.getElementById("price");
let size = document.getElementById('sizeSelection');
let color = document.getElementById('colorSelection');
let list = document.getElementById("productlist");
let totalCost = document.getElementById("totalcost");


/**
 * Init function for first product
 */
function init(){
    bild.src = "img/" + productList[index - 1].img;//??
    label.innerHTML = productList[index - 1].product;//??
    price.innerHTML = (parseFloat(productList[index - 1].price))
        .toLocaleString('de-CH', {style: 'currency', currency:'CHF'});//??
    productList[index - 1].sizes.forEach(opt => {//??
        size.innerHTML += '<option value="'+ opt +'">' + opt + '</option>';//??
    });//??
    productList[index - 1].colors.forEach(opt => {//??
        color.innerHTML += '<option value="'+ opt +'">' + opt + '</option>';//??
    });//??
    //get price
    totalPrice = Number(localStorage.getItem(TOTAL_PRICE));//??
    //check if it's not a number (NaN)
    if (isNaN(totalPrice)){//??
        totalPrice=0.0;//??
        localStorage.setItem(TOTAL_PRICE, totalPrice.toString());//??
    }//??
    console.log(`init: Total price: ${totalPrice}`);//??
    totalCost.innerHTML = (totalPrice).toLocaleString('de-CH',//??
        {style: 'currency', currency:'CHF'});//??
}

function checkOut(){
    let total = parseFloat(localStorage.getItem(TOTAL_PRICE));//??
    alert(`Total to pay: ${(parseFloat(total)).toLocaleString('de-CH',//??
        {style: 'currency', currency:'CHF'})}`);//??
    totalPrice=0.0;//??
    localStorage.setItem(TOTAL_PRICE, totalPrice.toString());//??
    location.reload();//??
}

function clearSelections(){
    size.innerHTML = "";//??
    color.innerHTML = "";//??
}


/**
 * move forward function
 */
function forward() {
    if (bild != null) {//??
        if (index < 5) {//??
            index++;//??
        } else if (index === 5) {//??
            index = 1;//??
        }//??
       clearSelections();//??
       init();//??
    }//??
}

/**
 * move backward function
 */
function backward() {
    if (bild != null) {//??
        if (1 < index) {//??
            index--;//??
        }  else if (index === 5) {//??
            index = 1;//??
        }//??
        clearSelections();
        init();
    }//??
}

/**
 * Zoom in function
 */
function zoomin() {
    let currWidth = bild.clientWidth;//??
    bild.style.width = (currWidth + 100) + "px";//??
}

/**
 * Zoom out function
 */
function zoomout() {
    let currWidth = bild.clientWidth;//??
    bild.style.width = (currWidth - 100) + "px";//??
}


function addCart(){
    entrynumber++;//??
    let Listentry = document.createElement("div");//??
    Listentry.id = "CartProduct" + entrynumber;//??
    Listentry.innerHTML = "<p id='modelentry'> Modell: " + (productList[index-1].product) + "</p>" +//??
        "<p id='outcomecolor'> Farbe: "+ color.value +"</p>" +//??
        "<p id='outcomesize'>Grösse: " + size.value + "</p>" +//??
        "<p id='costentry'>Kosten: " + (productList[index-1].price) + ".-</p>";//??
    list.appendChild(Listentry);//??
    let total = parseFloat(localStorage.getItem(TOTAL_PRICE));//??
    let price = parseFloat(productList[index-1].price);//??
    console.log(`addCart: ${total}+${price}`);//??
    total += price;//??
    localStorage.setItem(TOTAL_PRICE,total.toString())//??
    console.log(`addCart: Total ${total}`);//??
    totalCost.innerHTML =//??
        (total).toLocaleString('de-CH', {style: 'currency', currency:'CHF'});//??
}
