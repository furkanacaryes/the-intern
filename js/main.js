
var centical = function() {
        $('[centical]').each(function() {
            var parent_h = $(this).parent().height(),
                elem_h = $(this).height(),
                mtop = (parent_h - elem_h)/2 + "px";

            if($(window).width() < 512) {
                $(this).css("margin", "0");
            }
            else {
                $(this).css("margin-top", mtop);
            }
        });
    },

    cental = function() {
        $('[cental]').each(function() {
            var parent_w = $(this).parent().width(),
                elem_w = $(this).width(),
                mleft = (parent_w - elem_w)/2 + "px";

            $(this).css("margin-left", mleft);
        });
    };


$(window).load(function() {
    centical();
    cental();


    $('.mini-launcher').click(function() {
        $('.menu').toggleClass('fiyuu');
    });

    $('body').on('click','.fiyuu a',function() {
        $('.menu').removeClass('fiyuu');
    });


    $(window).resize(function() {
        centical();
        cental();

        var new_h = $('.gallery .columns').width();
        $('.gallery .columns').css('height', new_h);
        
    });
});
