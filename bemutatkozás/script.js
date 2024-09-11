document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");


    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(100px)";
        section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    });


    sections.forEach(section => {
        let sectionTop = section.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;


        if (sectionTop < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });


    window.removeEventListener("scroll", null);
});
