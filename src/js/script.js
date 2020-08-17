$(document).ready(function() {
    $('.conf__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><div class="chevron chevron_left"></div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="chevron chevron_right"></div></button>'
    });

    $('.reviews__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><div class="chevron chevron_left chevron_left_gold"></div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="chevron chevron_right chevron_right_gold"></div></button>',
        slidesToShow: 2
    });

    $('.clients__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><div class="chevron chevron_left chevron_left_gold"></div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="chevron chevron_right chevron_right_gold"></div></button>',
        autoplay: true,
        slidesToShow: 6
    });

    $('[data-modal=subscribe]').on('click', function() {
        $('.overlay, #subscribe').fadeIn('slow')
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #subscribe').fadeOut('slow');
    });
});
          