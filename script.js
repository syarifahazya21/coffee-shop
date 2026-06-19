// ===========================
// TOMBOL ORDER NOW
// ===========================

const orderButtons = document.querySelectorAll(".btn-dark");

orderButtons.forEach(button => {
    button.addEventListener("click", function() {
        alert("Terima kasih! Pesanan Anda berhasil ditambahkan.");
    });
});


// ===========================
// SUBSCRIBE EMAIL
// ===========================

const subscribeBtn = document.querySelector(".input-group .btn");

if(subscribeBtn){

    subscribeBtn.addEventListener("click", function(){

        const email =
        document.querySelector(".form-control").value;

        if(email === ""){
            alert("Silakan masukkan email terlebih dahulu!");
        }
        else{
            alert("Terima kasih telah berlangganan!");
        }

    });

}


// ===========================
// ACTIVE MENU NAVBAR
// ===========================

const currentPage =
window.location.pathname.split("/").pop();

const navLinks =
document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    const linkPage =
    link.getAttribute("href");

    if(linkPage === currentPage){
        link.classList.add("active");
    }

});


// ===========================
// SCROLL KE ATAS
// ===========================

const scrollBtn =
document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.border = "none";
scrollBtn.style.backgroundColor = "#6f4e37";
scrollBtn.style.color = "white";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 200){
        scrollBtn.style.display = "block";
    }
    else{
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});