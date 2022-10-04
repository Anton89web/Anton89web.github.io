$('.center').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
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
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});