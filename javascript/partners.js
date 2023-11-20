let myPartners = [
    {
        name: "InnovateTech Solutions",
        image: "",
        description:"Tech Powerhouse, Cutting-edge software and hardware solutions",
        email:"contact@innovatetechsolutions.com",
        phone:"+1 (555) 123-4567",
    },
    {
        name: "Celestial Marketing Agency",
        image: "",
        description:"Digital Marketing Experts, Strategic campaigns for a stellar online presence",
        email:"info@celestialmarketingagency.com",
        phone:"+1 (555) 987-6543",
    },
    {
        name: "Harmony Analytics Group",
        image: "",
        description:"Data Wizards, Insights and recommendations for optimal user experience",
        email:"contact@harmonyanalyticsgroup.com",
        phone:"+1 (555) 876-5432",
    },
];

// Open modal function
function displayPartnerCards(){
    let partnerWindow = document.getElementById('');
    myPartners.forEach(partner =>{
        partnerWindow.appendChild(createPartnerCard(partner));
    });
}


// Function that creates Cards in Page

function createPartnerCard(partner){
    let card = document.createElement("div");

    card.classList = "add-flex card-container flexDir-col ml-1r bgclr-3";
    card.onclick = function(){
        displayPartnerCards(partner);
    };

    let partnerName = document.createElement("h2");
    partnerName.textContent = partner.name;
    partnerName. classList = "";

    let partnerImage = document.createElement("img");
    partnerImage.src = partner.image;
    partnerImage.alt = partner.name;
    partnerImage.style = "";

    let partnerDescription = document.createElement("p");
    partnerDescription.textContent = partner.description;
    partnerDescription.classList = "";

    let partnerEmail = document.createElement("p");
    partnerEmail.textContent = partner.email;
    partnerEmail.classList = "";

    let partnerPhone = document.createElement("p");
    partnerPhone.textContent = partner.phone;
    partnerPhone.classList = "";

    card.appendChild(partnerImage);
    card.appendChild(partnerName);
    card.appendChild(partnerDescription);
    card.appendChild(partnerEmail);
    card.appendChild(partnerPhone);

    return card;

};

// // myPartnerCards()
    // Connect to HTMl div, to push cards
        // Iterate through the objects
            //



// Function for opening modal

// Opening modal shows object name, desc, email and phone

// 



