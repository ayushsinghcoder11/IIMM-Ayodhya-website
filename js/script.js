document.addEventListener('DOMContentLoaded', function () {
  // Select all Splide elements
  var splides = document.querySelectorAll('.splide');

  // Loop through each and mount individually
  splides.forEach(function (slider) {
    new Splide(slider, {
      type: 'loop',
      perPage: 4,
      perMove: 1,
      gap: '1rem',
      autoplay: true,
      interval: 2000,  
      arrows: true,
      pagination: false,
    }).mount();
  });
});

// var splide = new Splide('.splide', {
//             type: 'loop',
//             perPage: 4,
//             perMove: 1,
//             gap: '1rem',
//             autoplay: true,
//             pagination: false,
//             arrows: true,
//         });

//         splide.mount();