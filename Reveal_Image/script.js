let bgImage = document.querySelector("figure");
// Registreer de plugin
gsap.registerPlugin(ScrollTrigger);
// Animatie

gsap.fromTo(bgImage,{
    clipPath: "ellipse(0% 0% at 50% 50%)",
},{
    clipPath: "ellipse(70% 70% at 50% 50%)",
    ease:"none",
    // on scroll
    scrollTrigger: {
        trigger: bgImage,
        scrub:1,
        start:"top center",
        end:"top center-=200",
    },
}
);