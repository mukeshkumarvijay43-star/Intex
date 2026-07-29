// Theme Toggle

const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Scroll to Projects

function scrollProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

// Contact Form

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("success").innerHTML =
"Message Sent Successfully!";

this.reset();

});

// Scroll Animation

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", ()=>{

cards.forEach(card=>{

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight-100){

card.style.opacity=1;

card.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity=0;

card.style.transform="translateY(50px)";
card.style.transition=".8s";

});