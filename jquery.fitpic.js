/*!
 * jquery.fitpic.js 0.0.3 - https://github.com/yckart/jquery.fitpic.js
 * Stretch images perfect.
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/04/02
*/
(function ($, window) {

    var win = $(window);

    // Compute new dimensions for image
    function fitPic(elem) {
        var winW = win.width(),
            winH = window.innerHeight || win.height(), // `innerHeight` for mobile safari

            elemW = elem.width,
            elemH = elem.height,

            imgW = (elemW * winH) / elemH,
            imgH = (elemH * winW) / elemW,

            // Check the width and height
            ratioW = imgH < winH ? imgW : winW,
            ratioH = imgH < winH ? winH : imgH,

            // Position the image
            left = (ratioW - winW) / 2,
            top = (ratioH - winH) / 2;

        elem.style.width = ratioW + "px";
        elem.style.height = ratioH + "px";
        elem.style.marginTop = -top + "px";
        elem.style.marginLeft = -left + "px";
    }

    $.fn.fitPic = function () {
        return this.each(function () {
            var elem = this,
                timeout;

            fitPic(elem);
            win.resize(function () {
                clearTimeout(timeout);
                timeout = setTimeout(function(){
                    fitPic(elem);
                }, 100);
            });
        });
    };

}(jQuery, window));