$(function() {

  
  // Gradient JS (Granim)
  var granimInstance = new Granim({
    element: '#site-header-canvas',
    isPausedWhenNotInView: false,
    scrollDebounceThreshold: 300,
    stateTransitionSpeed: 6000,
    elToSetClassOn: 'body',
    // image : {
    //     source: '../wp-content/themes/hai/assets/images/granim-example.jpg',
    //     position: ['center', 'bottom'],
    //     blendingMode: 'multiply',
    // },
    states : {
      "default-state": {
        gradients: [
          ['#ff9966', '#ff5e62'],
          ['#00F260', '#0575E6'],
          ['#e1eec3', '#f05053']
        ]
      }
    }
  });

  // Do things on mobile
  var mobile = window.matchMedia('(max-width: 767px)')
  checkDevice(mobile);
  mobile.addListener( checkDevice );
  
  function checkDevice(mobile) {
    if (mobile.matches) { // If media query matches
      granimInstance.changeDirection('radial');
    } else {
      granimInstance.changeDirection('diagonal');
    }
  }

  // Carousel function (Swiper)
  const swiper = new Swiper('[data-swiper]', {
    // speed: 400,
    // spaceBetween: 100,     
     slidesPerView: 1,
    // spaceBetween: 30, 
     loop: true,
    autoplay: {
      delay: 2500,
    },
    // grid: {
    //   rows: 2,
    //   fill: 'column' // 'row' | 'column'
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

  // Parallax effect (jarallax)
  $('[data-jarallax]').jarallax();

});




// Sticky header (but not too sticky)
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
$(window).on('scroll', function(){
  const currentScroll = $(window).scrollTop();
  if (currentScroll <= 0) {
    $('body').classList.removeClass(scrollUp);
    return;
  }
  if (currentScroll > lastScroll && !$('body').hasClass(scrollDown)) {
    // Scroll up
    $('body').removeClass(scrollUp);
    $('body').addClass(scrollDown);    
  } else if ( currentScroll < lastScroll && $('body').hasClass(scrollDown) ) {
    // Scroll up
    $('body').removeClass(scrollDown);
    $('body').addClass(scrollUp);
  }
  lastScroll = currentScroll;
});