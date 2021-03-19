$('.nav ul li').on('click', function(){
    $(this).addClass('on')
    .siblings().removeClass('on')
})



var aboutNear = $('#article2').offset().top
var skillNear = $('#article3').offset().top
var contactNear = $('#article4').offset().top
var lastNear = $('body').height() - $(window).height()
$('.nav .depth1 > li').on('click', function(e){
    e.preventDefault()
    var num = $(this).index()
    if (num===0) {
        $('html').animate({ scrollTop:0}, 500)
    } else if (num===1) {
        $('html').animate({ scrollTop:aboutNear}, 500)
    } else if (num===2) {
        $('html').animate({ scrollTop:skillNear}, 500)
    } else {
        $('html').animate({ scrollTop:lastNear}, 500)
    }
})




$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if (sct < aboutNear) {
        $('.nav > ul > li').eq(0).addClass('on')
        .siblings().removeClass('on')
    } else if ( sct>=aboutNear && sct<skillNear){
        $('.nav > ul > li').eq(1).addClass('on')
        .siblings().removeClass('on')
    } else if (sct>=skillNear && sct<lastNear) {
        $('.nav > ul > li').eq(2).addClass('on')
        .siblings().removeClass('on')
    } else {
        $('.nav > ul > li').eq(3).addClass('on')
        .siblings().removeClass('on')
    }
})



$('.section').on('mousewheel', function(e, delta){
    // 0보다 크면 위로, 0보다 작으면 아래로
    if(delta>0) {
        var prev = $(this).prev().offset().top
        $('html').stop().animate({
            scrollTop:prev
        }, 500, 'linear')
    } else if (delta<0) {
        var next = $(this).next().offset().top
        $('html').stop().animate({
            scrollTop:next
        }, 500, 'linear')
    }
})