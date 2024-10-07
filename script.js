const cards = document.querySelectorAll('.card1, .card2, .card3, .card4, .card5, .card6, .card7');

cards.forEach(card => {
    gsap.to(card, {
        scale: 0.7,
        opacity: 0,
        scrollTrigger: {
            trigger: card,
            start: "top 20%",
            end: "bottom 5%",
            scrub: true
        }
    });
});
