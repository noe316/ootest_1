

$(function(){
    var winW = $(window).width();


    if(winW > 640) {
        $(function(){
            $('.ham').removeClass('on')
        })
    }

    else if(winW <= 640) {
        $(function(){
            $('.ham').removeClass('on')
            $('.ham').addClass('on')
            $('.navi_menu').removeClass('visible')
        });
        $('.ham').on("click", function(){
            $(this).toggleClass('show');
            $('.navi_menu').toggleClass('visible')
            $('.header_bg').toggleClass('visible')
        })
    }
})








$(window).resize(function(){
    var rewinW = $(window).width();


    if(rewinW > 640) {
        $(function(){
            $('.ham').removeClass('on')
        })
    }

    else if(rewinW <= 640) {
        $(function(){
            $('.ham').removeClass('on')
            $('.ham').addClass('on')
            $('.navi_menu').removeClass('visible')
        });
        // $('.ham').on("click", function(){
        //     $(this).toggleClass('show');
        //     $('.navi_menu').toggleClass('visible')
        //     $('.header_bg').toggleClass('visible')
        // })
    }
})








