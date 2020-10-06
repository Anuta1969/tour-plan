$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters

    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  var reviewSlider = new Swiper('.reviews-slider', {
    // Optional parameters

    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  // $('.newsletter').parallax({
  //   imageSrc: './img/newsletter-bg.jpeg',
  //   speed: 0.2


  // });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener('click', function () {
    console.log('клик по кнопке')
    document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');

  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close')
  modalButton.on("click", openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {

    var targetModal = $(this).attr("data-href");


    $(targetModal).find('.modal__overlay').addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");


  }

  function closeModal(event) {

    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  //обработка форм
  $('.form').each(function () {
    $(this).validate({

      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name is not less than 2 letters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Enter your phone number"
        }
      },
    });

    $('.newsletter__form').validate({

      errorClass: "invalid",
      messages: {

        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },

      },
    });




    AOS.init();


  })

});