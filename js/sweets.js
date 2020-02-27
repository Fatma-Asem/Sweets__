$(document).ready(function() {

// add nice scroll to body
    $('body').niceScroll({
        cursorcolor:'#000',
        cursorwidth:'10px',
        cursorborder:'none'
    });


// navbar
if ($(window).scrollTop() >= $('header').height()/2) {
    $('header').css('backgroundColor','#000')} else {
        $('header').css('backgroundColor','transparent')
    } 
$(window).scroll(function() {
    if ($(window).scrollTop() >= $('header').height()/2) {
    $('header').css('backgroundColor','#000')} else {
        $('header').css('backgroundColor','transparent')
    } 
})


// header section
   $('#slider-carousel').carouFredSel({
       responsive: true,
       width: '100%',
       circular: true,
       scroll: {
           items: 1,
           duration: 1000,
           pauseOnHover: true,
       },
       auto: true,
       items: {
           visible: {
               min: 1,
               max: 1
           },
           height: 'variable'
       },
       pagination: {
           container: '.slider-pager',
           pageAnchorBuilder: false
       }
   });


// about section
$(window).scroll(function() {
    if ($(window).scrollTop() >= $('.header-section').height()/2) {
    $('.about-section .animate-section-one').css({
        opacity: '1',
        animation: 'slideInLeft',
        animationTimingFunction: 'ease-in-out',
        animationDuration: '1s',
        animationDelay: '0s',
        animationIterationCount: '1'
    }) }
})



   $('.about-section .service').hover(function() {
    $(this).css('background-color', '#b4b1ad')}, function() {
       $(this).css('background-color', '#F9F9F9')
    })

    $('.more-width-hr').hover(function() {
       $('.hr-one').css('width','40%')}, function() {
        $('.hr-one').css('width','10%')
    })


// services section
$(window).scroll(function() {
    if ($(window).scrollTop() >= $('.header-section').height() && $('.about-section').height()) {
    $('.services-section .animate-section-two').css({
        opacity: '1',
        animation: 'slideInLeft',
        animationTimingFunction: 'ease-in-out',
        animationDuration: '1s',
        animationDelay: '0s',
        animationIterationCount: '1'
    });

    $('.services-section .animate-section-three').css({
        opacity: '1',
        animation: 'slideInUp',
        animationTimingFunction: 'ease-in-out',
        animationDuration: '1s',
        animationDelay: '0s',
        animationIterationCount: '1'
    });

    $('.services-section .animate-section-four').css({
        opacity: '1',
        animation: 'slideInRight',
        animationTimingFunction: 'ease-in-out',
        animationDuration: '1s',
        animationDelay: '0s',
        animationIterationCount: '1'
    }); }

})


// work section
$(window).scroll(function() {
    if ($(window).scrollTop() >= $('.header-section').height() && $('.about-section').height() && $('.services-section').height()) {
        $('.work-section .animate-section-two').css({
            opacity: '1',
            animation: 'slideInRight',
            animationTimingFunction: 'ease-in-out',
            animationDuration: '1s',
            animationDelay: '0s',
            animationIterationCount: '1'
        });

    $('.work-section .animate-section-five').css({
        opacity: '1',
        animation: 'slideInLeft',
        animationTimingFunction: 'ease-in-out',
        animationDuration: '1s',
        animationDelay: '0s',
        animationIterationCount: '1'
    });

    $('.work-section .animate-section-six').css({
        opacity: '1',
        animation: 'slideInUp',
        animationTimingFunction: 'ease-in-out',
        animationDuration: '1s',
        animationDelay: '0s',
        animationIterationCount: '1'
    }) }

})

// clients section
$(window).scroll(function() {
    if ($(window).scrollTop() >= $('.header-section').height() && $('.about-section').height() && $('.services-section').height() && $('.work-section').height()) {
        $('.clients-section .animate-section-two').css({
            opacity: '1',
            animation: 'slideInLeft',
            animationTimingFunction: 'ease-in-out',
            animationDuration: '1s',
            animationDelay: '0s',
            animationIterationCount: '1'
        }); } });

// team section
$(window).scroll(function() {
    if ($(window).scrollTop() >= $('.header-section').height() && $('.about-section').height() && $('.services-section').height() && $('.work-section').height() && $('.clients-section').height()) {
        $('.team-section .animate-section-two').css({
            opacity: '1',
            animation: 'rollIn',
            animationTimingFunction: 'ease-in-out',
            animationDuration: '1s',
            animationDelay: '0s',
            animationIterationCount: '1'
        });

    } });

    





})