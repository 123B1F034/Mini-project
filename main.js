const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};
  
ScrollReveal().reveal(".header__container h1", scrollRevealOption);

ScrollReveal().reveal(".header__container h4", {
    ...scrollRevealOption,
    delay: 200,
});
  
  ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__container .section__subheader", {
  ...scrollRevealOption,
  delay: 200,
});

ScrollReveal().reveal(".about__container", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__container .btn", {
  ...scrollRevealOption,
  delay: 750,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card__content", {
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});
