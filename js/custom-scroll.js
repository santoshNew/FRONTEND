$(document).ready(function () {

    // Menu li active function
    $('.pmNavbar li a').click(function(){
        $(this).addClass('active');
        $(this).parents('li').siblings().find('a').removeClass('active');
    });

    /* custom dropdown header menu for small screens */
    $('.customCollapse').click(function (){
        $('.pmNavMobile').toggle(500);
        $('.pmNavMobile li a').click(function(){
            $('.pmNavMobile').slideUp(500);
        });
    });

    // Page scrolling effect
    $('.topBg a, .home_bottom_info a').click(function () {
        var el = $(this).attr('href');
        var offset = $(el).offset();
        var top = offset.top;
        $('body,html').animate({scrollTop:offset.top - 76, scrollLeft:offset.left}, 1200);
        return false;
    });

    $('.geoButtonWrap li:first').click(function () {
        $(this).addClass('active');
        $(this).siblings('li').removeClass('active');
        $('.geoReferenceInfield').fadeIn("slow");
        $('.geoReferenceImage').fadeOut("slow");
        return false;

    });
    $('.geoButtonWrap li:last').click(function () {
        $(this).addClass('active');
        $(this).siblings('li').removeClass('active');
        $('.geoReferenceInfield').fadeOut("slow");
        $('.geoReferenceImage').fadeIn("slow");
        return false;
    });

/*    // fadeIn faceOut Animation on scorll window/page for Sign Up page and content
    var home = $('.homeContainer').position();
    var homeId = $('#home').position();
    $(window).scroll(function(){
        var windowPos = $(window).scrollTop();
        if (windowPos >= home.top) {
            $('.homeHeading').delay(300).animate({
                opacity:'0.0'
            }, 1000);
            $('.homeInfo').delay(600).animate({
                opacity:'0.0'
            }, 1000);
        }
    });
    $(window).scroll(function(e){
        var windowPos = $(window).scrollTop();
        if (windowPos >= homeId.top) {
            $('.homeHeading').delay(300).animate({
                opacity:'1.0'
            }, 1000);
            $('.homeInfo').delay(600).animate({
                opacity:'1.0'
            }, 1000);
            e.stopPropagation();
        }
    });*/

    // fadeIn faceOut Animation on scorll window/page for Big Data and their Boxes
    var bigDataPos = $('#big_data').position();
    $(window).scroll(function(){
        var windowPos = $(window).scrollTop() + 232;
        if (windowPos >= bigDataPos.top) {
            $('.dataStorage').delay(300).animate({
                opacity:'1'
            }, 1000);
            $('.sll').delay(600).animate({
                opacity:'1'
            }, 1000);
            $('.archiving').delay(900).animate({
                opacity:'1'
            }, 1000);
        }
    });

     //Circle faceIn fadeOut Animation on scroll window
    var autoMatePos = $('.automatedProContainer').position();
    $(window).scroll(function(){
        var windowPos = $(window).scrollTop() +375;
        console.log("automated "+windowPos);
        if (windowPos >= autoMatePos.top) {
            $('.spriteSensor_1').delay(600).animate({
                opacity:'1'
            }, 1000);
            $('.spriteSensor_2').delay(900).animate({
                opacity:'1'
            }, 1000);
            $('.spriteSensor_3').delay(1200).animate({
                opacity:'1'
            }, 1000);
            $('.spriteSensor_4').delay(1500).animate({
                opacity:'1'
            }, 1000);
            $('.spriteSensor_5').delay(1800).animate({
                opacity:'1'
            }, 1000);
        }
    });


    /* custom dropdown header menu for small screens */
  /*  var toggleVar = 0;
    $('a.customCollapse').click(function () {
        if (toggleVar == 0) {
            $('.phawkHeaderCollapse').slideDown('slow');
            $('.phawkNav a').live('click', function () {
                $('.phawkHeaderCollapse').slideUp('slow');
                toggleVar = 0;
            });
            if (toggleVar == 0) {
                toggleVar = 1;
            } else {
                toggleVar = 0;
            }

        } else {
            $('.phawkHeaderCollapse').slideUp('slow');
            toggleVar = 0;
        }
    });*/



});


