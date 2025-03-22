// function handleHomeButtonClick() {
//     alert("Welcome to My Online Store!");
// }

function handleProductButtonClick(event) {
    const productName = event.target.dataset.name || "Product";
    alert(`${productName} has been added to your cart!`);
}

function handleContactButtonClick() {
    alert("Thank you for contacting us! We will get back to you soon.");
}

document.addEventListener("DOMContentLoaded", function() {
    // const homeButton = document.getElementById("home-button");
    const productButtons = document.querySelectorAll("#product-button");
    const contactButton = document.getElementById("contact-button");

    // if (homeButton) {
    //     homeButton.addEventListener("click", handleHomeButtonClick);
    // }

    if (productButtons) {
        productButtons.forEach(button => {
            button.addEventListener("click", handleProductButtonClick);
        });
    }

    if (contactButton) {
        contactButton.addEventListener("click", handleContactButtonClick);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", handleProductButtonClick);
    });
});

let currentIndex = 0;

function slideLeft() {
    const sliderContainer = document.querySelector('.slider-container');
    const items = document.querySelectorAll('.slider-item');
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function slideRight() {
    const sliderContainer = document.querySelector('.slider-container');
    const items = document.querySelectorAll('.slider-item');
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

