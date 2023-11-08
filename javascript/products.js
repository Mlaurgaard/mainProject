/* Products simulated from a database */
let myProducts = [
    {
        name: "Potet",
        image: "https://www.medicalmedium.com/blog-images-optimised/grapes-queen-of-fruits.jpg",
        description: "Er en potet",
        price: 999,
    },
    {
        name: "Gulrot",
        image: "https://www.medicalmedium.com/blog-images-optimised/grapes-queen-of-fruits.jpg",
        description: "Snart jul",
        price: 888,
    },
    {
        name: "Spinat",
        image: "https://www.medicalmedium.com/blog-images-optimised/grapes-queen-of-fruits.jpg",
        description: "Skippern spiser dette",
        price: 30,
    },
    {
        name: "Rødbette",
        image: "https://www.medicalmedium.com/blog-images-optimised/grapes-queen-of-fruits.jpg",
        description: "Er ræd",
        price: 20,
    },
    {
        name: "Kål",
        image: "https://www.medicalmedium.com/blog-images-optimised/grapes-queen-of-fruits.jpg",
        description: "Er ikke en potet",
        price: 10,
    },
    {
        name: "mordi",
        image: "https://www.medicalmedium.com/blog-images-optimised/grapes-queen-of-fruits.jpg",
        description: "Er ikke en potet",
        price: 200,
    },
];

function displayMyProducts(){
    // Connect to the HTML div, to push the cards
    let productWindow = document.getElementById('veggieCards');

    
    // Iterate through the products
    for(let index = 0; index < myProducts.length; index++){

        // Values of the Product into Variables
        let product = myProducts[index];
        console.log("productet er", product);
        let productName = myProducts[index].name;
        let productImage = myProducts[index].image;
        let productDescription = myProducts[index].description;
        let productPrice = myProducts[index].price;
        
        // Create the card itself and its elements
        let productCardElement = document.createElement("div");
        let productImageElement = document.createElement("img");
        let productTextContentElement = document.createElement("div");
        let productImageTitleElement = document.createElement("h1");
        let productDescriptionElement = document.createElement("p");
        let productPriceElement = document.createElement("p")

        // Add the classes to the product card
        productCardElement.className = "card-container flexDir-col ml-1r shadow cardBorder bgclr-3";
        // productCardElement.setAttribute("onclick", `toggleProductModal(${product})`);
        // productCardElement.setAttribute("onclick", `toggleProductModal(${product})`);
        productCardElement.onclick (`toggleProductModal(${product})`);
        

        // Setting up the Product Image
        productImageElement.setAttribute("src", productImage);
        productImageElement.setAttribute("alt", productName);
        productImageElement.style.width = "18rem";
        productImageElement.style.height = "12rem";
        productImageElement.className = "jc-center"
        
        // Setting up the Div for the Text
        productTextContentElement.classList = "add-flex flexDir-col cardText m-2 bgclr-3"

        // Setting up the title
        productImageTitleElement.innerHTML = productName;
        productImageTitleElement.className = "as-center bgclr-3 clr-4"
        
        // Setting up the Description
        productDescriptionElement.innerHTML = productDescription;
        productDescriptionElement.className = "as-center mt-05r bgclr-3 clr-4";

        // Setting up the Price
        productPriceElement.innerHTML = productPrice;
        // Push the Elements into the Card
        productCardElement.appendChild(productImageElement)

        productTextContentElement.appendChild(productImageTitleElement)
        productTextContentElement.appendChild(productDescriptionElement);
        // productTextContentElement.appendChild(productPriceElement)

        productCardElement.appendChild(productTextContentElement);
        
        

        // Push into the HTML PAGE ELEMENT
        productWindow.appendChild(productCardElement);
    }

    // Create the HTML to put in

    // Populate it with correct data
}

displayMyProducts();


/* ToggleProductModal
  - css
    hideTheModal
    displayTheModal
*/
let modalStatus = false;
function toggleProductModal(product){
    
    // Connect to HTML element that displays the modal
    let modalWindow = document.getElementById("productModal");
    let modalWindowBackground = document.getElementById("productModalBackground");
    
    // Toggle modal on and off
    if(modalStatus == false){
        // Check if modal is false, Open it
        console.log("What do i get", product);
        modalStatus = true;
        modalWindow.classList.remove("hideTheModal");
        modalWindowBackground.classList.remove("hideTheModal");
    } else {
        // Check if modal is True, Close it
        modalStatus = false;
        modalWindow.classList.add("hideTheModal");
        modalWindowBackground.classList.add("hideTheModal");
    }
    

    // Store the data about the card in a variable, to pass down

    // Trigger the function to populate the modal div
    // displayProduct(epicproducts);
    
    
    
    
}



/* displayProduct

  // Trigger once the modal is opened

  // Displays the card that were clicked by populating the modal div

*/
function displayProduct(epicproducts) {
    console.log(epicproducts);
}
