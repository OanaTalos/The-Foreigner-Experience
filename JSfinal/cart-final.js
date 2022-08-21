
//ADD to CART Functionality - opens in Modal

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    let removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    let addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('card-title')[0].innerText
    console.log(title)
    let price = shopItem.getElementsByClassName('price')[0].innerText
    let imageSrc = shopItem.getElementsByClassName('img-fluid')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    let cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerText.replace(String.fromCodePoint('128522'), ''))
        let quantity = parseInt(quantityElement.value)
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = String.fromCodePoint('128522') + total
}

/*Some funky error code*/
/*function clickShop() {
    let shopButton = document.getElementsByClassName('shop-item-button');
    for (let i = 0; i < shopButton.length; i++) {
        let shopButton = shopButton[i];

    }
    shopButton.addEventListener('click', addItemInLocalStorage());
}

clickShop ();



function addItemInLocalStorage () {
    let shopData = document.getElementsByClassName('shop-item-button').value;
    console.log(shopData)
    if(localStorage.getItem('data') == null) {
        localStorage.setItem ('data', '[]');
    }

    let oldShopData = JSON.parse(localStorage.getItem('data'));
    oldShopData.push(shopData);

    localStorage.setItem('data', JSON.stringify(oldShopData));
    
}

function viewItemInLocalStorage () {
    if(localStorage.getItem('data') != null) {
        JSON.parse(localStorage.getItem('data', addItemToCart()));
    }
}*/


//CART in Modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Experience Description in Modal

var modal2 = document.querySelector(".modal2");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal2.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal2) {
            toggleModal();
    }
 }

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


/* Our Team modals

// Get the modal
var modals = document.getElementsByClassName('modals');

// Get the button that opens the modal
var btns = document.getElementsByClassName("myBtns");


// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("closed");

// When the user clicks the button, open the modal 
btns[0].onclick = function() {
    modals[0].style.display = "block";
}

btns[1].onclick = function() {
    modals[1].style.display = "block";
}

btns[2].onclick = function() {
    modals[2].style.display = "block";
}

btns[3].onclick = function() {
    modals[3].style.display = "block";
}

btns[4].onclick = function() {
    modals[4].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans[0].onclick = function() {
    modals[0].style.display = "none";
}

spans[1].onclick = function() {
    modals[1].style.display = "none";
}

spans[1].onclick = function() {
    modals[1].style.display = "none";
}

spans[1].onclick = function() {
    modals[1].style.display = "none";
}

spans[1].onclick = function() {
    modals[1].style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/