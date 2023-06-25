const Info = {
    apple: 700,
    orange: 800,
    lemon: 900
};

let TotalPrice = 0;

for (const ButtonToCart of document.getElementsByClassName('add-to-cart')) {
    ButtonToCart.addEventListener('click', () => {
        const ItemName = ButtonToCart.parentElement.parentElement.getAttribute('id')
        TotalPrice += Info[ItemName];
        document.getElementById('cost').innerText = TotalPrice;
    })
}