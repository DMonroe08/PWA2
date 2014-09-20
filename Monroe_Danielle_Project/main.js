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

    $('#tabs p').hide().eq(0).show();   //////You put a p instead of q
    $('#tabs p:not(:first)').hide();
    $('#tabs-nav li').click(function(e){
        e.preventDefault();
        $('#tabs p').hide();
        $('#tabs-nav .current').removeClass("current");
        $(this).addClass('current');
        var clicked = $(this).find('a:first').attr('href');
        $('#tabs ' + clicked).fadeIn('fast');

    }).eq(0).addClass('current');


//    /* jQuery for Projects form */

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

  //  $('.status').mouseover(function(){
//        $(this).fadeTo(100, .3);
//    });
//
//
//    $('.status').mouseover(function(){
//        $(this).fadeTo(100, 1);
//
//    });



    /* jQuery for Tool Tips */

    $('.masterTooltip').hover(function(){      //spelled master wrong
        var title = $(this).attr('title');
        $(this).data('tipText',title).removeAttr('title');
        $('<p class="toolTip"></p>')
		.text(title)
		.appendTo('body')
		.fadeIn('slow');
    }, function(){
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(e){
            var mousex = e.pageX + 15;
            var mousey = e.pageY + 25;
            $('.tooltip')
                .css({top: mousey, left: mousex})

        });

    /* Sign In */

    $('#signInButton').click(function(){
        var memberID = $('#memberID').val();
        var password = $('#password').val();
        $.ajax({
            url:'xhr/login.php',
            type: 'post',
            dataType: 'json',
            data:{
               member : memberID,
               password : password
            },
            success: function(response){
                console.log("test user");
                if (response.error){
                    alert(response.error);
            }else{
                window.location.assign('dashboard.html')
                  };
            }
        });
    });


    $('#signInButton').on('click', function(e){
        e.preventDefault();
        window.location.assign('dashboard.html');

});


    /* Sign Out */

    $('#signOut').click(function(e){
        e.preventDefault;
        $.get('xhr/logout.php', function(){
            window.location.assign('index.html')
        })
    });

    $('.so').on('click', function(e){
        e.preventDefault();
        window.location.assign('index.html');

    });


    /* Register Page */
    $('.sub').on('click', function(){
        var firstname = $('#fName').val(),
            lastname = $('#lName').val(),
            email = $('#email').val(),
            password = $('#pass').val(),
            confirm = $('#cpass').val();
            console.log(firstname+ ' '+lastname+ ' '+email+' '+password);

        $.ajax({
            url:'xhr/register.php',
            type: 'post',
            data: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            },
            success: funtcion(response){
            if (response.error){
                alert(response.error);
            }else{
                window.location.assign('index.html');
            }

        });


    });


/* Adding new projects */
    $('.add').on('click', function(){
        var pjName = $('#pjName').val();
        var pjDes = $('#pjDes').val();
        var pjDD = $('#pjDD').val();
        status = $('input[name = "status"]:checked').prop("id");

        $.ajax({
            url: "xhr/new_project.php",
            type: "post",
            dataType: "json",
            data: {
                projectName: pjName,
                projectDescription: pjDes,
                projectDueDate: pjDD,
                status: status
            },
            successs: function(response){
                console.log('Successful!');

                if(response.error){
                    alert(response.error);
                }else{
                    window.location.assign("projects.html");
            };
            }
        });

});


/* Projects Display */
    var projects = function(){
        $.ajax({
        url: 'xhr/get_projects.php',
        type: 'get',
        dataType: 'json',
        success: function(response){
        if(response.error){
            console.log(response.error);
        }else{
            for(var i= 0, j=response.projects.length; 1 < j; i++){
            var result = response.project[i];

            $(".projects").append(
                '<div style="border: 3px dotted black">' +
                    "<input clas="projects" type='hidden' value='" + result.id +"'>"+
                    "Project Name: " + result.projectName + "<br>" +
            "Project Description: " + result.projectDescription + "<br>" +
                   "Project Status: " +results.status + "<br>"
                +'<button class="deleteButton">Delete</button>'
                +'<buton class="editButton">Edit</buton>'
                +'</div> <br>'
            );

        };
            $('.deleteButton').on('click', function(e){
            console.log('test delete');
                $.ajax({
                    url:'xhr/delete_project.php',
                    data:{
                        projectID:results.id
                    },
                    type: 'post',
                    dataType: 'json',
                    success: function(response){
                        console.log('Testing');
                    if(response.error){
                        alert(response.error);

                    }else{
                        window.location.assign("projects.html");
                    };

                )}

        }
        });
    });


})(jQuery); // end private scope