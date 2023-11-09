        // Products simulated from a database
        let myProducts = [
            {
                name: "Potato",
                image: "https://media.istockphoto.com/id/176012507/photo/single-potato.jpg?s=612x612&w=0&k=20&c=9YsTiEiiAKFvBnCYUy-Z3BnnbgX8MdgtLTDP36Y0JzI=",
                description: "A starchy vegetable",
                price: 999,
            },
            {
                name: "Carrot",
                image: "https://mountain-fresh-growers.myshopify.com/cdn/shop/products/image_6b1e167a-4538-4fa5-b797-21cec7af8ab7_640x.jpg?v=1585819030",
                description: "Orange and crunchy",
                price: 888,
            },
            {
                name: "Spinach",
                image: "https://lettuceinfo.org/wp-content/uploads/2020/09/Spinach.jpg",
                description: "Leafy green",
                price: 30,
            },
            {
                name: "Beet",
                image: "https://www.znaturalfoods.com/cdn/shop/files/Beet-Root-Powder-Organic-Herb-Root-Powders-Z-Natural-Foods-5_900x.jpg?v=1689971007",
                description: "Red and sweet",
                price: 20,
            },
            {
                name: "Cabbage",
                image: "https://green-connect.com.au/wp-content/uploads/2022/05/Cabbage2-scaled.jpg",
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
            productName.classList = "as-center bgclr-3 clr-4 mt-1r"
            
            let productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.name;
            productImage.style = "height: 12rem; width: 18rem;"

            let productDescription = document.createElement("p");
            productDescription.textContent = product.description;
            productDescription.classList = "as-center mt-05r bgclr-3 clr-4"

            let productPrice = document.createElement("p");
            productPrice.textContent = product.price;
            productPrice.classList = "as-center mt-05r bgclr-3 clr-4"


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
        
        // Function to display Image IN modal
        function insideModalWindow(productImageSrc){
            let biggerPicture = document.getElementById("biggerPicture")
            biggerPicture.src = productImageSrc;
            biggerPicture.classList= "ImageModal";
        }

        // Function to open the modal and display product details
        function openProductModal(product) {
            let modalWindow = document.getElementById("productModal");
            modalWindow.style.display = "flex";
            
            
            insideModalWindow(product.image)
            // document.getElementById("productImage").src = product.image;
            document.getElementById("productName").textContent = product.name;
            document.getElementById("productDescription").textContent = product.description;
            document.getElementById("productPrice").textContent = "Price: $" + product.price;
            
        }



        // Function to close the modal
        function toggleProductModal() {
            let modalWindow = document.getElementById("productModal");
            modalWindow.style.display = "none";
        }

        displayMyProducts();