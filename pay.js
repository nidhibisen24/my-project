document.getElementById('checkout-button').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const pin = document.getElementById('pin').value;
    
    alert(Thank you for your purchase, ${name}! Your order will be shipped to ${address}, ${city}, ${pin}.);
});