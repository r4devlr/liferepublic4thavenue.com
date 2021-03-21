consoleMessage();

function consoleMessage() {
    console.log("%cStop!", "color: #E67819; font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif; font-size:80px;");
    console.log("%cThis is a browser feature intended for developers. Please do not use this feature to look something you are not allowed to. It will not work. If someone has told you, it will work, its a scam and might give them access to your personal data!", "color: #269DB3; font-size:20px; font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif");
    console.log("%c(C) Copyright 2015-Current, Golden Care | Hospital and Diagnostic. All rights reserved.", "color: #E67819; font-size:20px; font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif");
    console.log("%cFor more information, visit : http://www.goldencare.in/", "color: #269DB3; font-size:20px; font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif");
}

var clickEvent;

$(document).ready(function () {

    clickEvent = getClickEvent();

    function getClickEvent() {
        if ('ontouchstart' in document.documentElement === true)
            return 'touchstart';
        else
            return 'click';
    }

    //Initialize embed 
    $('.ui.embed').embed();

    //Initialize the tab menu 
    $('.menu .item').tab();

    //Initialize accordion
    $('.ui.accordion').accordion();

    // create sidebar and attach to menu open
    $('.ui.sidebar').sidebar('attach events', '.toc.item');

    $('.ui.sidebar')
        .sidebar('setting', {
            transition: 'overlay',
            mobileTransition: 'overlay',
            scrollLock: true,
        })
        ;

    // Put the class sidbarLink on every a item to close the siderbar on click
    $('body').on(clickEvent, '.sidebarLink', function () {
        $('.ui.sidebar').sidebar('toggle');
    });

    $('#pagination_previous').children('a').addClass('ui primary basic button');
    $('#pagination_next').children('a').addClass('ui primary basic button');

    $('.ui.radio.checkbox').checkbox();

    //Show dimmer of video card 
    $('.card .dimmer').dimmer({
        on: 'hover'
    });

    $('.special.cards .image').dimmer({
        on: 'hover'
    });

    /******************************************************************
       Drop Down
     *******************************************************************/

    // Initialize dropdown
    $('.ui.dropdown').dropdown({
        on: 'click',
    });

    /******************************************************************
        Cookie function
    *******************************************************************/
    //Set Cookie function
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    //Get Cookie function
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // Do following on scroll
    // 1) Show send message box (Hide text box if it was hidden before - Cookie)

    window.onscroll = () => {
        const sendMessage = $('.send-message-container');
        var scroll = $(window).scrollTop();
        if (scroll <= 40) {
            sendMessage.removeClass('visible-container');
        }
        else {            
            var pathname = window.location.pathname;
            if (pathname.includes("/contact-us")) {
                sendMessage.removeClass('visible-container');
            } else {
                sendMessage.addClass('visible-container');
            }
            //If text content was hidden, hide it
            if (getCookie('send-message-text-box-status') == "hide") {
                $('.send-message-content').hide();
            }
        }
    };

    // Do following on page load below top
    // 1) Show send message box (Hide text box if it was hidden before - Cookie)

    function checkScroll() {
        const sendMessage = $('.send-message-container');
        var scroll = $(window).scrollTop();
        if (scroll <= 40) {
            sendMessage.removeClass('visible-container');
        }
        else {
            var pathname = window.location.pathname;
            if (pathname.includes("/contact-us")) {
                sendMessage.removeClass('visible-container');
            } else {
                sendMessage.addClass('visible-container');
            }
            //If text content was hidden, hide it
            if (getCookie('send-message-text-box-status') == "hide") {
                $('.send-message-content').hide();
            }
        }        
    }

    checkScroll();
    $(window).scroll(checkScroll);

    // Hide send message box on close button click
    // Set message box status Cookie to hide
    $('.send-message-content .text-content-container .text-content .close-button').on('click', function () {
        $('.send-message-content').hide();
        setCookie("send-message-text-box-status", "hide", 10);
    });

    // Toggle display of send message box on main button click
    // Set message box status Cookie to show/hide accordingly
    $('.send-message-manager .send-message-button').on('click', function () {
        $('.send-message-content').toggle();
        if ($('.send-message-content').is(":visible")) {
            // Set message box status Cookie to show
            setCookie("send-message-text-box-status", "show", 10);
        }
        else {
            // Set message box status Cookie to hide
            setCookie("send-message-text-box-status", "hide", 10);
        }
    });

    // Hide send message text content on tablet and mobile
    var $window = $(window);
    function resize() {
        if ($(this).width() < 991) {
            $('.send-message-content').hide();
        } else {
            //If text content was hidden, hide it
            if (getCookie('send-message-text-box-status') == "show") {
                $('.send-message-content').show();
            }
        }
    }

    $window
        .resize(resize)
        .trigger('resize');

    /******************************************************************
        Query string actions
    *******************************************************************/
    function getQueryStr(key) {
        key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&");
        let match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
        return match && decodeURIComponent(match[1].replace(/\+/g, "+"));
    }

    /******************************************************************
        Pop up functions
    *******************************************************************/
    window.alert = function (message) {
        ShowAlertPopupMessage(message);
    }

    // Close the message box
    $('.message .close').on('click', function () {
        $(this)
            .closest('.message')
            .transition('fade')
            ;
    });

    //Alert message popup
    ShowAlertPopupMessage = function (message) {
        $('#msg').html(message);
        $('#alert-modal').modal('show');
    };

    // Close modal pop up
    $(document).on(clickEvent, '.close-modal', function () {
        $('.ui.modal').modal('hide');
    });

    /******************************************************************
        Video Pop ups
    *******************************************************************/
    onVideoClick = function (Name, YoutubeVideoID) {
        $('#VideoName').text(Name);
        var YoutubeLink = "https://www.youtube.com/embed/[_YOUTUBE_LINK_]?rel=0&amp;autoplay=1&amp;loop=0&amp;wmode=opaque&amp;controls=1&amp;showinfo=0&amp;theme=light";
        var YoutubeLink = YoutubeLink.replace("[_YOUTUBE_LINK_]", YoutubeVideoID);
        $("#VideoLink").attr("src", YoutubeLink);

        $('#showvideo').modal({
            allowMultiple: false,
            closable: true,
            onShow: function () {
                $('#showVideo').css({
                    'position': 'relative'
                });
            },
            onHidden: function () {
                var YoutubeLink = "https://www.youtube.com/embed/[_YOUTUBE_LINK_]?rel=0&amp;autoplay=1&amp;loop=0&amp;wmode=opaque&amp;controls=1&amp;showinfo=0&amp;theme=light";
                $("#VideoLink").attr("src", YoutubeLink);
                $(this).hide();
            }
        }).modal('setting', 'transition', 'scale').modal('show');
    }

    // Video popup without iframe
    $('body').on(clickEvent, '.cvp-feature-video', function () {
        let bgVideoContainer = document.getElementById("cvp-feature-bg-video");
        let videoYouTubeLink = 'https://www.youtube.com/embed/Z2BCh_TnViw?rel=0&autoplay=1&mute=0&loop=0&wmode=opaque&controls=1&modestbranding=1&theme=light';
        let videoPopup = document.getElementById("popup-video-no-frame");
        let videoLinkContainer = $(videoPopup).find('#VideoLinkNoFrame');

        $('#popup-video-no-frame').modal({
            onShow: function () {
                $(videoLinkContainer).attr("src", videoYouTubeLink);
                $(bgVideoContainer).get(0).pause();
            },
            onHidden: function () {
                $(videoLinkContainer).attr("src", '');
                $(bgVideoContainer).get(0).play();
            },
            closable: true
        }).modal('show');
    });

    /******************************************************************
        Set auto complete off on all the forms
    *******************************************************************/
    let allForms = document.querySelectorAll("form");
    allForms.forEach(function (form, index) {
        form.setAttribute("autocomplete", "ftaNoAutofill");
        let allInputs = form.querySelectorAll("input");
        allInputs.forEach(function (input, index) {
            input.setAttribute("autocomplete", "ftaNoAutofill");
        });
        let allTextArea = form.querySelectorAll("textarea");
        allTextArea.forEach(function (textArea, index) {
            textArea.setAttribute("autocomplete", "ftaNoAutofill");
        });
    });
});