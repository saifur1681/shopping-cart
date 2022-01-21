// mobile section function........
function allProduct(pro, isTrue, price) {
    const productInput = document.getElementById(pro + "-input-field");
    const productInputText = productInput.value;
    let productInputField = parseInt(productInputText);
    if (isTrue == true) {
        productInputField = productInputField + 1;
        // mobileInput.value = mobileInputField;
    }
    else if (isTrue == false && productInputText > 0) {
        productInputField = productInputField - 1;

    }
    productInput.value = productInputField;

    const productPrice = document.getElementById(pro + "-price");
    // var productPriceText = parseInt(productPrice.innerText);
    productPrice.innerText = parseInt(price * productInputField);
    calculateTotal();
};

// get product price.....
function getProductPrice(price) {
    const productPrice = document.getElementById(price + "-price");
    const productPriceValue = parseInt(productPrice.innerText);
    return productPriceValue;
};

function calculateTotal() {
    // sub-total price....
    const mobilePrice = getProductPrice('mobile');
    const cashingPrice = getProductPrice('cashing');
    const subTotal = parseInt(mobilePrice + cashingPrice);

    // tax.....
    const tax = parseFloat(subTotal / 10);

    // final total.....
    const total = parseFloat(subTotal + tax);

    document.getElementById("sub-total-price").innerText = subTotal;
    document.getElementById("tax-total").innerText = tax;
    document.getElementById("Total").innerText = total;
};




// mobile section plus ................
document.getElementById("mobile-plus").addEventListener("click", function () {
    allProduct('mobile', true, 1219);
});

// mobile section minus ................
document.getElementById("mobile-minus").addEventListener("click", function () {
    allProduct('mobile', false, 1219);
});

//  cashing section plus.....
document.getElementById("cashing-plus").addEventListener("click", function () {
    allProduct('cashing', true, 59);
});

//  cashing section minus.....
document.getElementById("cashing-minus").addEventListener("click", function () {
    allProduct('cashing', false, 59);
});