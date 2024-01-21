var $els = $('.menu a, .menu header');
var count = $els.length;
var grouplength = Math.ceil(count/3);
var groupNumber = 0;
var i = 1;
$('.menu').css('--count',count+'');
$els.each(function(j){
    if ( i > grouplength ) {
        groupNumber++;
        i=1;
    }
    $(this).attr('data-group',groupNumber);
    i++;
}); 

$('.menu footer button').on('click',function(e){
    e.preventDefault();
    $els.each(function(j){
        $(this).css('--top',$(this)[0].getBoundingClientRect().top + ($(this).attr('data-group') * -15) - 20);
        $(this).css('--delay-in',j*.1+'s');
        $(this).css('--delay-out',(count-j)*.1+'s');
    });
    $('.menu').toggleClass('closed');
    e.stopPropagation();
});

setTimeout(function(){
    $('.menu footer button').click();
}, 1000);


$(document).ready(function() {
    'use strict';

    var btn = $('#backToTop');
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    $(window).on("scroll", function () {
        var sc = $(window).scrollTop();
        if (sc > 490) {
            $(".nav").css({"background" : "black"});
        } else {
            $(".nav").css({"background" : "rgba(0, 0, 0, 0.3)"});
        };
        
    });

});


$(function(){
    $('.one').svgpopup({
        stepX: 12,
        stepY: 9,
        figure: 'rectangle',
        fill: 'black',
        opacity: 0.6,
        speed: 1.2
    });
  }());









