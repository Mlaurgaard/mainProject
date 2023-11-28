let myPartners = [
    {
        name: "InnovateTech Solutions",
        image: "https://www.mrinmaya.io/images/teampic/na.jpg",
        description:"Tech Powerhouse, A Cutting-edge software and hardware solutions",
        email:"contact@innovatetechsolutions.com",
        phone:"+1 (555) 123-4567",
    },
    {
        name: "Celestial Marketing Agency",
        image: "https://www.mrinmaya.io/images/teampic/na.jpg",
        description:"Digital Marketing Experts, Strategic campaigns for a stellar online presence",
        email:"info@celestialmarketingagency.com",
        phone:"+1 (555) 987-6543",
    },
    {
        name: "Harmony Analytics Group",
        image: "https://www.mrinmaya.io/images/teampic/na.jpg",
        description:"Data Wizards, Insights and recommendations for optimal user experience",
        email:"contact@harmonyanalyticsgroup.com",
        phone:"+1 (555) 876-5432",
    },
    
];

//function to display the partner cards
function displayPartnerCards(){
    let partnerWindow = document.getElementById('partnerCards');
    myPartners.forEach(partner =>{
        partnerWindow.appendChild(createPartnerCard(partner));
    });
}


// Function that creates Cards in Page
function createPartnerCard(partner){
    let card = document.createElement("div");

    card.classList = "add-flex card-container flexDir-col ml-1r bgclr-7 cardBorder";
    card.onclick = function(){
        // displayPartnerCards(partner);
    };

    let partnerName = document.createElement("h2");
    partnerName.textContent = partner.name;
    partnerName. classList = "as-center bgclr-4 mt-auto";

    let partnerImage = document.createElement("img");
    partnerImage.src = partner.image;
    partnerImage.alt = partner.name;
    partnerImage.style = "height: 12rem; width: 13.7rem;";

    let partnerDescription = document.createElement("p");
    partnerDescription.textContent = partner.description;
    partnerDescription.classList = "cardDescription";

    let partnerEmail = document.createElement("p");
    partnerEmail.textContent = partner.email;
    partnerEmail.classList = "";

    let partnerPhone = document.createElement("p");
    partnerPhone.textContent = partner.phone;
    partnerPhone.classList = "";

    let infoButton = document.createElement("span");
    infoButton.textContent = ">>>";
    infoButton.classList = "cardButton bgclr-7 clr-3";
    infoButton.addEventListener('mouseover', function(){
        card.classList.add("shadow");
    });
    infoButton.addEventListener('mouseout', function(){
        card.classList.remove("shadow");
    });
    infoButton.onclick = function(){
        openPartnerModal(partner);
    };

    card.appendChild(partnerImage);
    card.appendChild(partnerName);
    // card.appendChild(partnerDescription);
    card.appendChild(infoButton);
    // card.appendChild(partnerEmail);
    // card.appendChild(partnerPhone);



    return card;
}


// function for picture in modal
function insideModalWindow(partnerImage){
    let biggerPicture = document.getElementById("partnerImage");
    biggerPicture.src = partnerImage;
    biggerPicture.classList = "imageModal";
}

// Function for opening modal and display partners
function openPartnerModal(partner){
    let modalWindow = document.getElementById("partnerModal");
    let modalBackground = document.getElementById("partnerModalBackground");
    modalWindow.style.display = "flex";
    modalBackground.classList.remove("hideModal");

    // call function for picture in modal
    insideModalWindow(partner.Image);

    document.getElementById("partnerName").textContent = partner.name;
    document.getElementById("partnerImage").src = partner.image;
    document.getElementById("partnerDescription").textContent = partner.description;
    document.getElementById("partnerPhone").textContent ="Number: " + partner.phone;
    document.getElementById("partnerEmail").textContent ="E-mail: " + partner.email;
}

// Close the modal
function closePartnerModal(){
    let modalWindow = document.getElementById("partnerModal");
    modalWindow.style.display = "none";
    let modalBackground = document.getElementById("partnerModalBackground");
    modalBackground.classList.add("hideModal");

}



displayPartnerCards();



