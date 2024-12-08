// Initialize an empty cart array
let cart = [];

// Function to add an item to the cart
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };

    cart.push(product);
    displayCart();
}

// Function to display the cart items
function displayCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; // Clear the current cart items

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerText = ${item.name} - $${item.price};
        
        // Add a button to remove the item from the cart
        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click", () => removeFromCart(item));
        
        listItem.appendChild(removeButton);
        cartItems.appendChild(listItem);
    });
}

// Function to remove an item from the cart
function removeFromCart(item) {
    const itemIndex = cart.indexOf(item);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        displayCart();
    }
}

// Attach click event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productDiv = button.parentElement;
        const productName = productDiv.querySelector("h2").innerText;
        const productPrice = parseFloat(productDiv.querySelector("p").innerText.split('$')[1]);
        addToCart(productName, productPrice);
    });
});