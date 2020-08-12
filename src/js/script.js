$(document).ready(function() {
    $('.conf__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><div class="chevron chevron_left chevron_white"></div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="chevron chevron_right chevron_white"></div></button>'
    });

    $('.reviews__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><div class="chevron chevron_left"></div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="chevron chevron_right"></div></button>',
        slidesToShow: 2
    });

    $('.clients__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><div class="chevron chevron_left"></div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="chevron chevron_right"></div></button>',
        autoplay: true,
        slidesToShow: 6
    });
});
          