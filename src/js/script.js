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

    //Переключение селектов
    /* $('select.sponsors__select').on('click', 'option:not(.sponsors__option_active)', function() {
        $(this)
            .addClass('sponsors__option_active').siblings().removeClass('sponsors__option_active')
            .closest('div.container').find('div.sponsors__wrapper').removeClass('sponsors__wrapper_active').eq($(this).index()).addClass('sponsors__wrapper_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back'); */

    //Validation
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                surname: "required",
                orgphone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            /* messages: {
                name: "q",
                surname: "q",
                orgphone: "q",
                checkbox: "q",
                email: {
                    required: "q",
                    email: "w"
                }
            } */
        });
    };

    validateForms('#subscribeform');
    validateForms('#form-register');

    $('input[name=orgphone]').mask("+1 (999) 999-99-99");

    //Отправка форм
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #subscribe').fadeOut();
            $('form').trigger('reset');
        });
        return false;
    });

    // Pageup
    $(window).scroll(function() {
        if ($(this).scrollTop()> 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    // Smooth scroll
    $("a[href^='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});
          