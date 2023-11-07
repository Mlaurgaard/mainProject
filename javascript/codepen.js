        // Products simulated from a database
        let myProducts = [
            {
                name: "Potato",
                image: "https://www.medicalmedium.com/blog-images-optimised/grapes-queen-of-fruits.jpg",
                description: "A starchy vegetable",
                price: 999,
            },
            {
                name: "Carrot",
                image: "https://www.medicalmedium.com/blog-images-optimised/grapes-queen-of-fruits.jpg",
                description: "Orange and crunchy",
                price: 888,
            },
            {
                name: "Spinach",
                image: "https://www.medicalmedium.com/blog-images-optimised/grapes-queen-of-fruits.jpg",
                description: "Leafy green",
                price: 30,
            },
            {
                name: "Beet",
                image: "https://www.medicalmedium.com/blog-images-optimised/grapes-queen-of-fruits.jpg",
                description: "Red and sweet",
                price: 20,
            },
            {
                name: "Cabbage",
                image: "https://www.medicalmedium.com/blog-images-optimised/grapes-queen-of-fruits.jpg",
                description: "Leafy and crisp",
                price: 10,
            },
        ];

        // Function to create a card for each product
        function createProductCard(product) {
            let card = document.createElement("div");
            card.className = "card";
            card.classList = "add-flex card-container flexDir-col ml-1r shadow cardBorder bgclr-3";
            card.onclick = function () {
                openProductModal(product);
            };

            let productName = document.createElement("h2");
            productName.textContent = product.name;
            productName.classList = "as-center bgclr-3 clr-4"

            let productDescription = document.createElement("p");
            productDescription.textContent = product.description;
            productDescription.classList = "as-center mt-05r bgclr-3 clr-4"

            let productPrice = document.createElement("p");
            productPrice.textContent = product.price;
            productPrice.classList = "as-center mt-05r bgclr-3 clr-4"

            let productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.name;
            productImage.style = "height: 12rem; width: 18rem;"

            card.appendChild(productImage);
            card.appendChild(productName);
            card.appendChild(productDescription);

            return card;
        }

        // Function to display the product cards
        function displayMyProducts() {
            let productWindow = document.getElementById('veggieCards');
            myProducts.forEach(product => {
                productWindow.appendChild(createProductCard(product));
            });
        }

        // Function to open the modal and display product details
        function openProductModal(product) {
            let modalWindow = document.getElementById("productModal");
            modalWindow.style.display = "block";

            document.getElementById("productName").textContent = product.name;
            document.getElementById("productImage").src = product.image;
            document.getElementById("productDescription").textContent = product.description;
            document.getElementById("productPrice").textContent = "Price: $" + product.price;
        }

        // Function to close the modal
        function toggleProductModal() {
            let modalWindow = document.getElementById("productModal");
            modalWindow.style.display = "none";
        }

        displayMyProducts();