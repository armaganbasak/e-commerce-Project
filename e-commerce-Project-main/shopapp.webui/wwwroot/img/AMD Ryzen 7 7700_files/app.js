var rtime, timeout = !1, delta = 200; function resizeend() { new Date - rtime < delta ? setTimeout(resizeend, delta) : (timeout = !1, resized()) } $(window).resize(function () { rtime = new Date, !1 === timeout && (timeout = !0, setTimeout(resizeend, delta)) });

/* Page Ready */
$(function () {

    /* Footer Year */
    var thisYear = new Date();
    $('#thisYear').html(thisYear.getFullYear());


    $("#mainSlider").owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        lazyLoad: true,
        navText: ['<i><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/></svg></i>', '<i><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/></svg></i>'],
        responsive: {
            0: {
                nav: false,
            },
            767: {
                nav: true,
            },
        },
        onInitialized: mainSliderInit
    });

    function mainSliderInit(e) {
        $("#mmSlider").css("min-height", "");

        if (e.relatedTarget.items().length < 2) {
            $(e.relatedTarget.$element[0]).find(".owl-dots").hide();
            $(e.relatedTarget.$element[0]).find(".owl-nav").hide();
        }
      
    }

    $('#gamerSlider').owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        lazyLoad: true,
        onInitialized: subSliderInit,
        navText: ['<i><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/></svg></i>', '<i><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/></svg></i>'],
        //autoplay: true,
        //autoplayTimeout: 3000,
        //autoplayHoverPause: true
    });

    /* Home Special Offers */
    if ($('#specialOffers').length > 0) {
        $('#specialOffers .owl-carousel').owlCarousel({
            items: 1,
            loop: true
            
        });
    }

    /* Home Today's Products */
    if ($('#todaysProducts').length > 0) {
        $('#todaysProducts .owl-carousel').owlCarousel({
            items: 1,
            loop: true
           
        });
    }


    function subSliderInit(e) {
      
        if (e.relatedTarget.items().length < 2) {
            $(e.relatedTarget.$element[0]).find(".owl-dots").hide();
            $(e.relatedTarget.$element[0]).find(".owl-nav").hide();
        }

    }

    /* Rating */
    //$(".rating").rateYo({
    //	starWidth: "16px",
    //	halfStar: true
    //});
    /* END: Rating */

    var pageWidth = window.innerWidth;
    if (pageWidth < 576) {
        mobileReady();
    }
    if (pageWidth < 768) {
        tabletSmallReady();
    }

    if (pageWidth < 1023) {
        tabletReady();
    }

    if ($('#countdown').length > 0) {
        var itemDataCom = $('#countdown').data('date');

        itemDataCom = itemDataCom.replaceAll('-', '/');

        itemDataSec = itemDataCom.match(/(\d+)\/(\d+)\/(\d+)\s*(\d+):(\d+)/);

        itemData = new Date(itemDataSec[3], itemDataSec[2] - 1, itemDataSec[1], itemDataSec[4], itemDataSec[5], 0, 0);
      /*  console.log(itemData);*/
        $("#countdown").countdown(itemData, function (event) {
            var Difference_In_Time = itemData.getTime() - new Date();

            // To calculate the no. of days between two dates
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

            if (Difference_In_Days >= 1) {
                $(this).html(
                    event.strftime(
                        //<div class="timer-wrapper"><div class="time">%D</div><span class="text">days</span></div>
                        '<div class="timer-wrapper"><div class="time">%D</div><span class="text">G&uuml;n</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">Saat</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">Dakika</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">Saniye</span></div>'
                        //'<div class="timer-wrapper"><div class="time">%H</div><span class="text">Saat</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">Dakika</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">Saniye</span></div>'
                    )
                );
            } else {

                $(this).html(
                    event.strftime(
                        //<div class="timer-wrapper"><div class="time">%D</div><span class="text">days</span></div>
                        //'<div class="timer-wrapper"><div class="time">%D</div><span class="text">G&uuml;n</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">Saat</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">Dakika</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">Saniye</span></div>'
                        '<div class="timer-wrapper"><div class="time">%H</div><span class="text">Saat</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">Dakika</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">Saniye</span></div>'
                    )
                );
            }

        });
    }

    if ($("#img_01").length > 0) {
        $("#img_01").elevateZoom({ gallery: 'gallery_01', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true });
        //$("#img_01").bind("click", function (e) {
        //    var ez = $('#img_01').data('elevateZoom');
        //    $.fancybox(ez.getGalleryList());
        //    return false;
        //});
    }

    $('[data-toggle="tooltip"]').tooltip();

    var $memu_nav = $('#hamburgerMenu');
    var $toggleMenu = $('.mobileMenu');

    var defaultOptionsMenuNav = {
        disableAt: false,
        customToggle: $toggleMenu,
        levelSpacing: 40,
        levelTitles: true,
        levelTitleAsBack: true,
        pushContent: '#container',
        insertClose: true,
        closeOnClick: false,
        labelClose: "Kapat",
        labelBack: "Geri",
        width: 400
    };
    $memu_nav.hcOffcanvasNav(defaultOptionsMenuNav);

});

/* Page Resized */
function resized() {

    var pageWidth = window.innerWidth;
    if (pageWidth < 576) {
        mobileReady();
    }
    if (pageWidth < 768) {
        tabletSmallReady();
    }

    if (pageWidth < 1023) {
        tabletReady();
    }

    if (pageWidth > 767) {

        $(".product-list, .company-logos").owlCarousel('destroy').removeClass('owl-carousel');
    }

    if (pageWidth > 1023) {

        $("body").removeClass().addClass("desktop");

        $(".prepared-systems .products").owlCarousel('destroy').removeClass('owl-carousel');
    }

}

function mobileReady() {

    $("body").removeClass().addClass("mobile");

    $(".company-logos").addClass("owl-carousel").owlCarousel({
        items:5,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true
    });

  

    $(".memocan").addClass("owl-carousel").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        loop: true,
    });


}

function tabletSmallReady() {

    $("body").removeClass().addClass("tabletSmall");

    $(".product-list:not(.no-slide)").addClass("owl-carousel").owlCarousel({
        items: 2,
        nav: true,
        loop: true,
        /*autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,*/
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            }
        }
    });

    $(".company-logos").addClass("owl-carousel").owlCarousel({
        items: 3,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true
    });

}

function tabletReady() {

    $("body").removeClass().addClass("tablet");

    $(".prepared-systems .products").addClass("owl-carousel").owlCarousel({
        items: 2,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });

}

$(document).on('click', '.subNavMenu', function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.sub-nav .nav').slideUp();
    } else {
        $(this).addClass('active');
        $('.sub-nav .nav').removeClass('d-none').hide().slideDown();
    }
});

$(document).on('click', '.counter a', function () {
    //console.log($(this).closest(".counter"));
    maxValue = $(this).closest(".counter").data("max");
    minValue = $(this).closest(".counter").data("min");
    topla = $(this).closest(".counter").data("topla");
    //console.log(maxValue, minValue);
    var input = $(this).siblings("input[type='text']");
    var count = input.val();
    count == "" ? count = "0" : count;
    count = parseInt(count);
    if ($(this).hasClass('icon-plus')) {
        if (maxValue != undefined && maxValue > count) {
            count++;
            input.val(count);
        }
        if (maxValue == undefined) {
            count++;
            input.val(count);
        }

    } else {
        if (minValue != undefined && minValue < count) {
            count--;
            input.val(count);
        }
        if (minValue == undefined) {
            count--;
            input.val(count);
        }

    }

    //console.log(topla);
    if (topla == undefined) {
        ToplamFiyatHesapla();
        SistemConfigYaz();
    } else {
        var urunId = $(this).closest(".counter").data("urun-id");
        KendinToplaConfig(urunId, input.val());
    }

});

/* Left Menu */
$(document).on('click', '#leftMenu li > a', function () {
    $(this).siblings()[0].style.top = "0px";
    //console.log($(this).parents('ul'));
    $(this).addClass('active');
    $(this).next('.submenu').find('> .back span').html($(this).find('.text').html());
    $(this).parents('ul').height()
    //document.getElementById("myBtn").style.top = "100px";
    $(this).parents('ul').css({ overflow: "hidden" });

    
        $(this).parents('ul').height($($(this).siblings()[0]).children()[1].clientHeight + $(this).parents('ul').length * 40);
   
    //console.log($(this).parents('ul'));
    //console.log($($(this).siblings()[0]).children()[1].clientHeight);
   
});


//$(document).on('click', '#leftMenu li > a', function () {
//    $(this).siblings()[0].style.top = "0px";
//    //console.log($(this).parents('ul'));
//    $(this).addClass('active');
//    $(this).next('.submenu').find('> .back span').html($(this).find('.text').html());
//    $(this).parents('ul').height()
//    //document.getElementById("myBtn").style.top = "100px";
//    $(this).parents('ul').css({ overflow: "hidden" });
//    $(this).parents('ul').height($($(this).siblings()[0]).children()[1].clientHeight + 40);
//    console.log($(this));
//    console.log($($(this).siblings()[0]).children()[1].clientHeight);

//});
$(document).on('click', '#leftMenu .back', function () {
    $(this).parents('ul').css({ overflow: "unset", height: "auto" });
    $(this).closest('li').find('a').removeClass('active');
    setTimeout(() => {
        $(this).parents()[0].style.top = "-3000px";
    }, 400)
    
    //console.log($(this).parents('ul'));
});











