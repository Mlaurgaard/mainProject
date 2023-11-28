
// Contact modal that goes on all pages
    // OPEN
function openContactModal(){
    let contactModal = document.getElementById("contactModal");
    contactModal.style.display = "flex";
    let contactBackground = document.getElementById("hideContactModal");
    contactBackground.classList.remove("hideModal");
}

    //CLOSE
function closeContactModal(){
    let contactModal = document.getElementById("contactModal");
    contactModal.style.display = "none";
    let contactBackground = document.getElementById("hideContactModal");
    contactBackground.classList.add("hideModal");
}

//