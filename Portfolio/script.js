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

// Scroll animation for cards and other content boxes

const boxes = document.querySelectorAll(
    ".hero-panel, .hero-stats div, .mini-card, .card, .contact-note"
);

boxes.forEach((box) => box.classList.add("reveal-box"));

const boxObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

boxes.forEach((box) => boxObserver.observe(box));

// Moving cursor

if (window.matchMedia("(pointer: fine)").matches) {
    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    document.body.append(dot, ring);

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    });

    const moveRing = () => {
        ringX += (mouseX - ringX) * 0.16;
        ringY += (mouseY - ringY) * 0.16;
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
        requestAnimationFrame(moveRing);
    };
    moveRing();

    document.querySelectorAll("a, button, input, textarea").forEach((element) => {
        element.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
        element.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
}
const text="Python Full Stack Developer";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();
window.addEventListener("scroll",()=>{

const height=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

const progress=

(window.scrollY/height)*100;

document.getElementById("progressBar").style.width=

progress+"%";

});
emailjs.init({
    publicKey: "dmf3bARwvWJZ2r0F4"
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send("service_n775faf", "template_le4n27s", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    })
    .then(() => {
        document.getElementById("success").textContent = "Message sent successfully!";
        this.reset();
    })
    .catch((error) => {
        document.getElementById("success").textContent = "Failed to send message.";
        console.error(error);
    });
});