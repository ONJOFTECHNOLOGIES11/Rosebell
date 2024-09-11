//  Navigation bar effects on scroll

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

});

// Services Section - Modal

const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}
learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtns) => {
    modalCloseBtns.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

// Portfolio Section Model
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick){
    portfolioModals[modalClick].classList.add("active");
}


imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active")
        });
    });
});


//Website dark/ light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun")
}

// Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// Naigation  menu items active on page scroll
window.addEventListener("scroll", () => {
    const  sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetHeight - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});


// Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items");


menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});


navItems.forEach((navItem) => {
    navItems.addEventListener("click", () => {
        navigation.classList.remove("active");
    })
})





// Scroll reveal animations

// Common reveal options to create reveal animations
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});
// Tartget elements, and specifed options to reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', {delay:500, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', {delay:600, origin: 'right'});
ScrollReveal().reveal('.home .info .btn', {delay:700, origin: 'bottom'});

ScrollReveal().reveal('.media-icons i, .contact-left li', {delay: 500, origin: 'left', inteval:200});
ScrollReveal().reveal('.home-img, .about-img', {delay:500, origin: 'bottom'});
ScrollReveal().reveal('.about, .description, .contact-right', {delay:600, origin: 'right'});
ScrollReveal().reveal('.about .professional-list li', {delay: 500, origin: 'right', interval: 200});
ScrollReveal().reveal('.skills-description, .service-desciption, .contact-card, .client-swiper, .contact-left h2', {delay:700, origin: 'right'});
ScrollReveal().reveal('.experience-card, service-card, .education, .portfolio .img-card', {delay: 800, origin:'bottom', interval: 200});
ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval : 200});





function downloadCV() {
    // Replace 'path/to/your-cv-file.pdf' with the actual path to your CV file on your server
    var cvUrl = "documents/EMMANUEL ONJORO - CV.pdf";
    var link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'EMMANUEL ONJORO - CV.pdf'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


//  contact form actions

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Simulate sending email
    setTimeout(function() {
        document.getElementById("successMessage").style.display = "block";
        clearForm();
    }, 2000);
});

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}




var userName = document.getElementById('name').value;
var subject = document.getElementById('subject').value;
var emailEl = document.getElementById('email').value;
var messageEl = document.getElementById('message')

var messageBody = "Name " + userName + "phone " + Phone + "Email " + emailEl;

function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "emmanuelonjoro@gmail.com",
        Password : "ABC7B1474CBAD52BED82B3D76183FBC35DF8",
        To : 'eonjoro36@gmail.com',
        From : "emmanuelonjoro@gmail.com",
        Subject : subject,
        Body : messageBody
    }).then(
      message => alert(message)
    );
}