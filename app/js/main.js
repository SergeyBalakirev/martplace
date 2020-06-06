$(function () {

  $(".featured-product__descr-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    ratedFill: "#ffc000",
    readOnly: true,
    spacing: "3px",

  });

  $(".product-card__star").rateYo({
    rating: 4.5,
    starWidth: "11px",
    ratedFill: "#ffc000",
    readOnly: true,
    spacing: "3px",

  });


  $('.featured-product__slider-inner').slick({
    prevArrow: '<button class="slick-arrow slick-prev icon-lnr-chevron-left"></button>',
    nextArrow: '<button class="slick-arrow slick-next icon-lnr-chevron-right"></button>',
    appendArrows: '.section-title__arrow'
  });


  $(".new-items__filter").on('click', function () {
    $(".filter__box").slideToggle();
  });







  var mixer = mixitup('.new-items__product-box');
});