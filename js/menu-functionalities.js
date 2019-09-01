$(document).ready(function () {


    // **************************** NAVIGATION FUNCTIONS ******************************/
    // NAVIGATION BREADCRUMBS
    // WHEN POSTED ONLINE EDIT BELOW BASED ON BROWSER URL
    var url_string = window.location.href;
    url_string = url_string.split("gorillasite/").pop();
    url_string = "page/sub-page";
    // url_string = url_string.split(".").shift();
    url_string = url_string.split("/");
    // SHOW BREADCRUMBS ON SIDE
    if (url_string.length === 1){
        sBreadcrumb = "<li class='mt-4'>" + url_string + "</li>";
        document.getElementById('breadcrumb-list').insertAdjacentHTML( 'beforeend', sBreadcrumb );
    }
    else if (url_string.length === 2) {
        sBreadcrumbOne = "<li class='mt-4'>" + url_string[0] + "</li>";
        sBreadcrumbTwo = "<li class='mt-4'>" + url_string[1] + "</li>";
        document.getElementById('breadcrumb-list').insertAdjacentHTML( 'beforeend', sBreadcrumbOne );
        document.getElementById('breadcrumb-list').insertAdjacentHTML( 'beforeend', sBreadcrumbTwo );
    }
    // MAKE A VERSION FOR SUB PAGES

    
    $('.nav-button').click(function () {
        $('body').toggleClass('nav-open');

        var menuVal = document.getElementById("txt-nav-menu").innerText;
        switch (menuVal) {
            case "menu":
                // document.getElementById("txt-nav-menu").innerText="X";
                $('#txt-nav-menu').delay(400)
                    .queue(function () {
                        $(this).addClass('txt-X');
                        document.getElementById("txt-nav-menu").innerText = "X";
                        $(this).dequeue();
                    })
                break;
            case "X":
                $('#txt-nav-menu').delay(400)
                    .queue(function () {
                        $('#txt-nav-menu').removeClass('txt-X')
                        document.getElementById("txt-nav-menu").innerText = "menu";
                        $(this).dequeue();
                    })
                break;
        }
    });

    $('.nav-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
        $('.menu-bar').toggleClass('react');
        $('#navbar-row').toggleClass('h1-invert');
    });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar-row").style.top = "0";
            document.getElementById("navbar-row").style.opacity = "1";

            document.getElementById("burger-menu").style.left= "0"
            document.getElementById("right-side-menu").style.right= "0"
            
            document.getElementById("SML1").style.right= "0"
            document.getElementById("SML1").style.opacity= "1"
            document.getElementById("SML2").style.right= "0"
            document.getElementById("SML2").style.opacity= "1"
            document.getElementById("SML3").style.right= "0"
            document.getElementById("SML3").style.opacity= "1"
            document.getElementById("SML4").style.right= "0"
            document.getElementById("SML4").style.opacity= "1"
            
        } else {
            document.getElementById("navbar-row").style.top = "-50px";
            document.getElementById("navbar-row").style.opacity = "0";
            
            document.getElementById("burger-menu").style.left = "-50px";
            document.getElementById("right-side-menu").style.right = "-50px";

            document.getElementById("SML1").style.right = "-40px";
            document.getElementById("SML1").style.opacity= "0"
            document.getElementById("SML2").style.right = "-30px";
            document.getElementById("SML2").style.opacity= "0"
            document.getElementById("SML3").style.right = "-20px";
            document.getElementById("SML3").style.opacity= "0"
            document.getElementById("SML4").style.right = "-10px";
            document.getElementById("SML4").style.opacity= "0"
            
        }
        prevScrollpos = currentScrollPos;
    }
});

// COLOR CHANGERS ON SCROLL
$(window).scroll(function () {
    // COLOR CHANGERS ON SCROLL
    // SECTION POSITIONS
    var white_section_1_pos = $('#white-section-1').offset().top;
    var white_section_1_height = $('#white-section-1').height();

    var white_section_3_pos = $('#white-section-3').offset().top;
    var white_section_3_height = $('#white-section-3').height();

    var white_section_5_pos = $('#white-section-5').offset().top;
    var white_section_5_height = $('#white-section-5').height();

    // COLOR CHANGING ITEMS POSITION
    var menu_pos = $('.nav-button').offset().top;


    var social_media_li_1_pos = $('.social-media-li-1').offset().top;
    var social_media_li_2_pos = $('.social-media-li-2').offset().top;
    var social_media_li_3_pos = $('.social-media-li-3').offset().top;
    var social_media_li_4_pos = $('.social-media-li-4').offset().top;


    if (menu_pos > white_section_1_pos && menu_pos < (white_section_1_pos + white_section_1_height) ||
        menu_pos > white_section_3_pos && menu_pos < (white_section_3_pos + white_section_3_height) ||
        menu_pos > white_section_5_pos && menu_pos < (white_section_5_pos + white_section_5_height)
    ) {
        $('.nav-button').addClass('menu_white');
        $('.breadcrumbs li').addClass('menu_white');
        $('.menu-bar').addClass('bar_white');
        $('.animated-icon1 span').addClass('bar_white');


        $('.nav-button').removeClass('menu_black');
        $('.breadcrumbs li').removeClass('menu_black');
        $('.menu-bar').removeClass('bar_black');
        $('.animated-icon1 span').removeClass('bar_black')
    }
    else {
        $('.nav-button').removeClass('menu_white');
        $('.breadcrumbs li').removeClass('menu_white');
        $('.menu-bar').removeClass('bar_white');
        $('.animated-icon1 span').removeClass('bar_white');

        $('.nav-button').addClass('menu_black');
        $('.breadcrumbs li').addClass('menu_black');
        $('.menu-bar').addClass('bar_black');
        $('.animated-icon1 span').addClass('bar_black');
    }

    if (social_media_li_1_pos > white_section_1_pos && social_media_li_1_pos < (white_section_1_pos + white_section_1_height) ||
        social_media_li_1_pos > white_section_3_pos && social_media_li_1_pos < (white_section_3_pos + white_section_3_height) ||
        social_media_li_1_pos > white_section_5_pos && social_media_li_1_pos < (white_section_5_pos + white_section_5_height)
    ) {
        $('.social-media-li-1').addClass('menu_white');
        $('.social-media-li-1').removeClass('menu_black');
    }
    else {
        $('.social-media-li-1').removeClass('menu_white');
        $('.social-media-li-1').addClass('menu_black');
    }
    if (social_media_li_2_pos > white_section_1_pos && social_media_li_2_pos < (white_section_1_pos + white_section_1_height) ||
        social_media_li_2_pos > white_section_3_pos && social_media_li_2_pos < (white_section_3_pos + white_section_3_height) ||
        social_media_li_2_pos > white_section_5_pos && social_media_li_2_pos < (white_section_5_pos + white_section_5_height)
    ) {
        $('.social-media-li-2').addClass('menu_white');
        $('.social-media-li-2').removeClass('menu_black');
    }
    else {
        $('.social-media-li-2').removeClass('menu_white');
        $('.social-media-li-2').addClass('menu_black');
    }
    if (social_media_li_3_pos > white_section_1_pos && social_media_li_3_pos < (white_section_1_pos + white_section_1_height) ||
        social_media_li_3_pos > white_section_3_pos && social_media_li_3_pos < (white_section_3_pos + white_section_3_height) ||
        social_media_li_3_pos > white_section_5_pos && social_media_li_3_pos < (white_section_5_pos + white_section_5_height)
    ) {
        $('.social-media-li-3').addClass('menu_white');
        $('.social-media-li-3').removeClass('menu_black');
    }
    else {
        $('.social-media-li-3').removeClass('menu_white');
        $('.social-media-li-3').addClass('menu_black');
    }
    if (social_media_li_4_pos > white_section_1_pos && social_media_li_4_pos < (white_section_1_pos + white_section_1_height) ||
        social_media_li_4_pos > white_section_3_pos && social_media_li_4_pos < (white_section_3_pos + white_section_3_height) ||
        social_media_li_4_pos > white_section_5_pos && social_media_li_4_pos < (white_section_5_pos + white_section_5_height)
    ) {
        $('.social-media-li-4').addClass('menu_white');
        $('.social-media-li-4').removeClass('menu_black');
    }
    else {
        $('.social-media-li-4').removeClass('menu_white');
        $('.social-media-li-4').addClass('menu_black');
    }
    // **************************** NAVIGATION FUNCTIONS ******************************/

})