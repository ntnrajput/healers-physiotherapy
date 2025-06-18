$('.home-slider').owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  nav: false,
  dots: true,
  // Add these:
  autoplay: true,
  autoplayTimeout: 5000, // 5 seconds delay between slides
  autoplayHoverPause: true // pause on mouse hover
});