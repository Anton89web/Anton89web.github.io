$('.center').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  // slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: false,
        slidesToShow: 1,
        autoplay: false,
      }
    }
  ]
});