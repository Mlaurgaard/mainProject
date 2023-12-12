/* ------- Contact modal that goes on all pages -------  */

// OPEN
function openContactModal(){
    let contactModal = document.getElementById("contactModal");
    contactModal.style.display = "flex";
    let contactBackground = document.getElementById("hideContactModal");
    contactBackground.classList.remove("hideModal");
}

// CLOSE
function closeContactModal(){
    let contactModal = document.getElementById("contactModal");
    contactModal.style.display = "none";
    let contactBackground = document.getElementById("hideContactModal");
    contactBackground.classList.add("hideModal");

    document.getElementById("myContactForm").reset();
}

/* ------- Submit form  ------- */
const submitMyContactForm = document.getElementById("myContactForm");

submitMyContactForm.addEventListener('submit', function(event){
    event.preventDefault();

    alert("Form submitted successfully");

    closeContactModal();    
});

/* ------- Clear form ------- */
function clearMyform(){
    document.getElementById("myContactForm").reset();
}
