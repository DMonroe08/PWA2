/*  
 Your Project Title
 Author: You
 */

(function($){


    /*
     ===============================================
     ========================= APPLICATION FUNCTIONS
     */


    var checkLoginState = function(){
        $.ajax({
            url: 'xhr/check_login.php',
            type: 'get',
            dataType: 'json',
            success: function(response){
                // if user, loadApp()
                // if error, loadLanding()
            }
        });
    };



    // 	============================================
    //	SETUP FOR INIT

    var init = function(){

        checkLoginState();
    };


    init();


    /*
     ===============================================
     ======================================== EVENTS
     */


    /*
     ==================================== END EVENTS
     ===============================================
     */







    /* jQuery for tabs */

    $('#tabs p').hide().ep(0).show();
    $('#tabs p:not(:first)').hide();
    $('#tabs-nav li').click(function(e){
        e.preventDefault();
        $('#tabs p').hide();
        $('#tabs-nav .current').removeClass("current");
        $(this).addClass('current');
        var clicked = $(this).find('a:first').attr('href');
        $('#tabs ' + clicked).fadeIn('fast');

    }).eq(0).addClass('current');


    /* jQuery for Projects form */

    $('.modalClick').on('click', function(event){
        event.preventDefault();
        $('#overlay')
            .fadeIn()
            .find('#modal')
            .fadeIn();

    });

    $('.close').on('click', function(event){
        event.preventDefault();
        $('#overlay')
            .fadeOut()
            .find('#modal')
            .fadeOut();
    });


    /* jQuery for add and status buttons */

    $('.status').mouseover(function(){
        $(this).fadeTo(100, .3);
    });


    $('.status').mouseover(function(){
        $(this).fadeTo(100, 1);

    });



    /* jQuery for Tool Tips */

    $('.mastTooltip').hover(function(){
        var title = $(this).attr('title');
        $(this).data('tipText',title).removeAttr('title');
        $('<p class="toolTip"></p>').text(title).appendTo('body').fadeIn('slow');
    }, function(){
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(e){
            var mousex = e.pageX + 15;
            var mousey = e.pageY + 25;
            $('.tooltip')
                .css({top: mousey, left: mousex})

        });


    /* jQuery for Tool Tips */

    $('.masterTooltip').hover(function(){
        var title = $(this).attr('title');
        $(this).data('tipText',title).removeAttr('title');
        $('<p class="toolTip"></p>').text(title).appendTo('body').fadeIn('slow');
    }, function(){
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(e){
            var mousex = e.pageX + 15;
            var mousey = e.pageY + 25;
            $('.tooltip')
                .css({top: mousey, left: mousex })

        });


})(jQuery); // end private scope