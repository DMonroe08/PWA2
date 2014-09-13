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
		
		

	
})(jQuery); // end private scope


/* jQuery for tabs */

$('#tabs_info p').hide().ep(0);
$('#tabs_info p:not(first)').hide();
$('#tabs_nav li').click(function(e){
    e.preventDefault();
    $('#tabs p').hide();
    $('#tabs_nav .current').removeClass("current");
    $(this).addClass('current');
    var clicked = $(this).find('a:first').attr('href');
    $('#tabes ' + clicked).fadeIn('medium');

})..eq(0).addClass('current');


/* jQuery for Projects form */

$('.modal').on('click', function(event){
    event.preventDefault();
    $('#overlay')
        .fadeIn(485)
        .find('#projectForm')
        .fadeIn();

});


/* jQuery for add and status buttons */

$('.status').hover(function(){
    $(this).fadeTo(300, 3);
});


$('.add').hover(function(){
    $(this).fadeOut(300);
    $(this).fadeIn(300);
});



/* jQuery for Tool Tips */

$('.mastTooltip').hover(function(){
    var title = $(this).attr('title');
    $(this).data('tipText',title).removeAttr('title');
    $('<p class="toolTip"></p>).text(title).appendTo('body').fadeIn('slow);
}, function(){
    $(this).attr('title', $(this).data('tipText'));
    $('.tooltip').remove();
}).mousemove(function(e){
        var mousex = e.pageX + 15;
        var mousey = e.pageY + 25;
        $('.tooldtip')
            .css({top: mousey, left: mousex})

});