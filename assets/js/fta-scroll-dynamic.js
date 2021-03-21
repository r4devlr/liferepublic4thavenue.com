var clickEvent;

$(document).ready(function () {

    clickEvent = getClickEvent();

    function getClickEvent() {
        if ('ontouchstart' in document.documentElement === true)
            return 'touchstart';
        else
            return 'click';
    }

    /******************************************************************
        Bookmark transition
     *******************************************************************/

    //Bookmark link transition on pages different than parent page
    var h = window.location.hash;
    if (h.length > 1) {
        var target = $(h);
        if (target.length) {
            $('html,body').animate({ scrollTop: target.offset().top - 70 }, 500);
        }
    }

    //Bookmark link transition on pages different than parent page
    var h = window.location.hash;
    if (h.length > 1) {
        var target = $(h);
        if (target.length) {
            $('html,body').animate({ scrollTop: target.offset().top - 70 }, 500);
        }
    }

    //Top navbar bookmark link
    $(".top-navbar-bookmark").click(function (e) {
        $('body').popup('hide all');
        var h = e.currentTarget.hash;
        if (h && h.length > 1) {
            var target = $(h);
            if (target.length) {
                $('html,body').animate({ scrollTop: target.offset().top - 70 }, 1000);
            }
        }
    });

    //Footer bookmark link
    $(".footer-bookmark").click(function (e) {
        var h = e.currentTarget.hash;
        if (h && h.length > 1) {
            var target = $(h);
            if (target.length) {
                $('html,body').animate({ scrollTop: target.offset().top - 70 }, 1000);
            }
        }
    });

    //Sidebar bookmark link
    $(".sidebar-bookmark").click(function (e) {
        var h = e.currentTarget.hash;
        if (h && h.length > 1) {
            var target = $(h);
            if (target.length) {
                $('html,body').animate({ scrollTop: target.offset().top - 70 }, 1000);
            }
        }
    });

    //Bookmark link transition on current page
    $(".current-page-bookmark a").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var top = $(this.getAttribute('href')).offset().top;
        $('html, body').animate({
            scrollTop: top - 70
        }, 500);
    });

    //Bookmark link transition on current page
    $(".current-page-bookmark-full-page a").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        if ($('html').hasClass("fp-enabled")) {
            fullpage_api.moveSectionDown();
        } else {
            var top = $(this.getAttribute('href')).offset().top;
            $('html, body').animate({
                scrollTop: top - 0
            }, 500);
        }        
    });

    // Do following on scroll
    // 1) Change to navbar background color
    // 2) Remove top bar on scroll
    // 3) Remove scroll down button

    window.onscroll = () => {
        let pageTopMenu = $('.page-top-menu');
        let scrolledMenu = $('.page-scrolled-menu');
        var scroll = $(window).scrollTop();
        const scrollDownBtn = $('.scroll-down');
        var scroll = $(window).scrollTop();
        if (scroll <= 40) {
            scrollDownBtn.removeClass('hidden');
        }
        else {
            scrollDownBtn.addClass('hidden');
        }
        if (scroll <= 150) {
            $(pageTopMenu).attr("style", "display: block");
            $(scrolledMenu).attr("style", "display: none");
        } else {
            $(pageTopMenu).attr("style", "display: none");
            $(scrolledMenu).attr("style", "display: block");
        }
    };

    // Do following on page load below top
    // 1) Change to navbar background color
    // 2) Remove top bar on scroll
    // 3) Remove scroll down button

    function checkScroll() {
        let pageTopMenu = $('.page-top-menu');
        let scrolledMenu = $('.page-scrolled-menu');
        var scroll = $(window).scrollTop();
        const scrollDownBtn = $('.scroll-down');
        var scroll = $(window).scrollTop();
        if (scroll <= 40) {
            scrollDownBtn.removeClass('hidden');
        }
        else {
            scrollDownBtn.addClass('hidden');
        }
        if (scroll <= 150) {
            $(pageTopMenu).attr("style", "display: block");
            $(scrolledMenu).attr("style", "display: none");
        } else {
            $(pageTopMenu).attr("style", "display: none");
            $(scrolledMenu).attr("style", "display: block");
        }
    }

    checkScroll();
    $(window).scroll(checkScroll);

    // Sroll the page to top
    $('body').on(clickEvent, '.scroll-to-top', function (event) {
        event.preventDefault();
        event.stopPropagation();
        if ($('html').hasClass("fp-enabled")) {
            fullpage_api.moveTo(1);
        } else {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        }
    });

    function fullPageChangeNavBarColor(destination) {

        let ftaLogoImageContainers = document.querySelectorAll(".fta-logo-image-container");
        let ftaLogoImageContainersScrolled = document.querySelectorAll(".fta-logo-image-container-scrolled");
        let ftaLogoImageContainersMobile = document.querySelectorAll(".fta-logo-image-container-mobile");

        let navMenus = document.querySelectorAll(".fta-navbar-menu");

        //Check if destination has light or dark bg

        let isDarkBg = destination.querySelector(".navbar-dark-bg");
        let isLightBg = destination.querySelector(".navbar-light-bg");

        if (isDarkBg) {
            ftaLogoImageContainers.forEach(function (ftaLogoImageContainer) {
                $(ftaLogoImageContainer).html("");
                $(ftaLogoImageContainer).html(`<img class="ui image" src="./assets/images/logo/4th-avenue-logo-title-color.svg" style="width: 180px; padding: 20px 0px;" alt="4th Avenue | Life Republic">`);
            });
            ftaLogoImageContainersScrolled.forEach(function (ftaLogoImageContainer) {
                $(ftaLogoImageContainer).html("");
                $(ftaLogoImageContainer).html(`<img class="ui image" src="./assets/images/logo/4th-avenue-logo-only-4-dark-bg.svg" style="width: 70px; padding: 20px 0px;" alt="4th Avenue | Life Republic">`);
            });
            ftaLogoImageContainersMobile.forEach(function (ftaLogoImageContainer) {
                $(ftaLogoImageContainer).html("");
                $(ftaLogoImageContainer).html(`<img class="ui image" src="./assets/images/logo/4th-avenue-logo-only-4-dark-bg.svg" style="width: 50px;" alt="4th Avenue | Life Republic">`);
            });
            navMenus.forEach(function (navMenu) {
                $(navMenu).removeClass("light-bg-menu");
                $(navMenu).addClass("dark-bg-menu");
            });
        } else if (isLightBg) {
            ftaLogoImageContainers.forEach(function (ftaLogoImageContainer) {
                $(ftaLogoImageContainer).html("");
                $(ftaLogoImageContainer).html(`<img class="ui image" src="./assets/images/logo/4th-avenue-logo-title-color.svg" style="width: 180px; padding: 20px 0px;" alt="4th Avenue | Life Republic">`);
            });
            ftaLogoImageContainersScrolled.forEach(function (ftaLogoImageContainer) {
                $(ftaLogoImageContainer).html("");
                $(ftaLogoImageContainer).html(`<img class="ui image" src="./assets/images/logo/4th-avenue-logo-only-4-color.svg" style="width: 70px; padding: 20px 0px;" alt="4th Avenue | Life Republic">`);
            });   
            ftaLogoImageContainersMobile.forEach(function (ftaLogoImageContainer) {
                $(ftaLogoImageContainer).html("");
                $(ftaLogoImageContainer).html(`<img class="ui image" src="./assets/images/logo/4th-avenue-logo-only-4-color.svg" style="width: 50px;" alt="4th Avenue | Life Republic">`);
            });         
            navMenus.forEach(function (navMenu) {
                $(navMenu).removeClass("dark-bg-menu");
                $(navMenu).addClass("light-bg-menu");
            });
        } else {
            return;
        }
    }

    function fullPageChangeNavBarStatus(destination) {
        let pageTopMenu = $('.page-top-menu');
        let scrolledMenu = $('.page-scrolled-menu');
        var scroll = destination.offsetTop;
        if (scroll <= 150) {
            $(pageTopMenu).attr("style", "display: block");
            $(scrolledMenu).attr("style", "display: none");
        } else {
            $(pageTopMenu).attr("style", "display: none");
            $(scrolledMenu).attr("style", "display: block");
        }
    }

    function fullPageNavigationColor(destination) {
        //Check if destination has light or dark bg
        let isDarkBg = destination.querySelector(".navbar-dark-bg");
        let isLightBg = destination.querySelector(".navbar-light-bg");

        if (isDarkBg) {
            $('#fp-nav').addClass("dark-bg");
            $('#fp-nav').removeClass("light-bg");
        } else if (isLightBg) {
            $('#fp-nav').removeClass("dark-bg");
            $('#fp-nav').addClass("light-bg");
        } else {
            return;
        }
    }

    function fullPageScrollDownColor(destination) {
        //Check if destination has light or dark bg
        let isDarkBg = destination.querySelector(".scroll-dark-bg");
        let isLightBg = destination.querySelector(".scroll-light-bg");

        if (isDarkBg) {
            $('.full-page-scroll-down').addClass("scroll-color-white");
            $('.full-page-scroll-down').removeClass("scroll-color-black");
        } else if (isLightBg) {
            $('.full-page-scroll-down').addClass("scroll-color-black");
            $('.full-page-scroll-down').removeClass("scroll-color-white");
        } else {
            return;
        }
    }

    function hideFullPageScrollDown(destination) {
        if (destination.isLast) {
            $('.full-page-scroll-down').css("display", "none");
        } else {
            $('.full-page-scroll-down').css("display", "block");
        }
    }

    function hideFooterNavigation(destination) {
        let footerSection = document.querySelector(".fp-footer-section");
        if (footerSection) {
            $("#fp-nav>ul>li").last().attr("style", "display: none");            
        }
    }

    function reloadAnimation(destination) {
        let allAnimatedContent = destination.querySelectorAll(".animated");
        allAnimatedContent.forEach(function (animatedContent) {
            let elm = animatedContent;
            let newone = elm.cloneNode(true);
            elm.parentNode.replaceChild(newone, elm);
        });
    }

    function resetBackgroundVideo(destination) {
        let allVideoContainers = destination.querySelectorAll("video");
        if (allVideoContainers) {
            allVideoContainers.forEach(function (videoContainer) {
                $(videoContainer).get(0).currentTime = 0;
                $(videoContainer).get(0).play();
            });
        }
    }

    function afterLoadDynamics(origin, destination, direction) {
        let destinationItem = destination.item;
        hideFooterNavigation();        
    }

    function onLeaveDynamics(origin, destination, direction) {
        let destinationItem = destination.item;
        fullPageChangeNavBarColor(destinationItem);
        fullPageChangeNavBarStatus(destinationItem);
        fullPageNavigationColor(destinationItem);
        fullPageScrollDownColor(destinationItem);
        hideFullPageScrollDown(destination);
        reloadAnimation(destinationItem);
        resetBackgroundVideo(destinationItem);
    }

    let fullPageSettings = {
        responsiveWidth: 760,
        scrollingSpeed: 700,
        navStatus: true,
        navigationPosition: 'left',
        loadAnimation: 'cubic-bezier(0.250, 0.100, 0.250, 1.000)',
    };

    new fullpage('#full-page-home', {
        licenseKey: '691E289E-54EF43D8-B1E98567-0A4D5DAE',
        responsiveWidth: fullPageSettings.responsiveWidth,
        scrollingSpeed: fullPageSettings.scrollingSpeed,
        navigation: fullPageSettings.navStatus,
        navigationPosition: fullPageSettings.navigationPosition,
        easingcss3: fullPageSettings.loadAnimation,
        navigationTooltips: ['COMING SOON', 'Reach us'],
        afterLoad: function (origin, destination, direction) {
            afterLoadDynamics(origin, destination, direction);                      
        },
        onLeave: function (origin, destination, direction) {
            onLeaveDynamics(origin, destination, direction); 
        },
    });

    // Sroll the page to top
    $('body').on(clickEvent, '#fp-nav .fp-tooltip', function (event) {
        let toolTip = event.target;
        let aTagClick = $(toolTip).prev();
        $(aTagClick[0]).get(0).click();
    });
    
});