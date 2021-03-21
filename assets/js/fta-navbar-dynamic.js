(function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       can accounts for vertical position, horizontal, or both
     */
    var $w = $(window);
    $.fn.visible = function (partial, hidden, direction, container) {

        if (this.length < 1)
            return;

        // Set direction default to 'both'.
        direction = direction || 'both';

        var $t = this.length > 1 ? this.eq(0) : this,
            isContained = typeof container !== 'undefined' && container !== null,
            $c = isContained ? $(container) : $w,
            wPosition = isContained ? $c.position() : 0,
            t = $t.get(0),
            vpWidth = $c.outerWidth(),
            vpHeight = $c.outerHeight(),
            clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function') {

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = isContained ?
                    rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top :
                    rec.top >= 0 && rec.top < vpHeight,
                bViz = isContained ?
                    rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top :
                    rec.bottom > 0 && rec.bottom <= vpHeight,
                lViz = isContained ?
                    rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left :
                    rec.left >= 0 && rec.left < vpWidth,
                rViz = isContained ?
                    rec.right - wPosition.left > 0 && rec.right < vpWidth + wPosition.left :
                    rec.right > 0 && rec.right <= vpWidth,
                vVisible = partial ? tViz || bViz : tViz && bViz,
                hVisible = partial ? lViz || rViz : lViz && rViz,
                vVisible = (rec.top < 0 && rec.bottom > vpHeight) ? true : vVisible,
                hVisible = (rec.left < 0 && rec.right > vpWidth) ? true : hVisible;

            if (direction === 'both')
                return clientSize && vVisible && hVisible;
            else if (direction === 'vertical')
                return clientSize && vVisible;
            else if (direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop = isContained ? 0 : wPosition,
                viewBottom = viewTop + vpHeight,
                viewLeft = $c.scrollLeft(),
                viewRight = viewLeft + vpWidth,
                position = $t.position(),
                _top = position.top,
                _bottom = _top + $t.height(),
                _left = position.left,
                _right = _left + $t.width(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom,
                compareLeft = partial === true ? _right : _left,
                compareRight = partial === true ? _left : _right;

            if (direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if (direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if (direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };

})(jQuery);

$(document).ready(function () {
    function changeNavBarColor() {
        let ftaLogoImageContainers = document.querySelectorAll(".fta-logo-image-container");
        let ftaLogoImageContainersScrolled = document.querySelectorAll(".fta-logo-image-container-scrolled");
        let ftaLogoImageContainersMobile = document.querySelectorAll(".fta-logo-image-container-mobile");
        let navMenus = document.querySelectorAll(".fta-navbar-menu");

        if ($('.navbar-dark-bg').visible(true)) {
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
        } else if ($('.navbar-light-bg').visible(true)) {
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
        }
    }
    changeNavBarColor();
    $(window).scroll(changeNavBarColor); 
});