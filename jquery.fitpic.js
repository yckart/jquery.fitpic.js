/*!
 * jquery.fitpic.js 0.0.2 - https://github.com/yckart/jquery.fitpic.js
 * Stretch images perfect.
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/09
*/
(function($, window){
    $.fn.fitPic = function(url) {
        var winW = $(window).width(),
            winH = window.innerHeight || $(window).height(); // `innerHeight` for mobile safari

        return this.each(function() {
            if(url) this.src = url;
            var elem = $(this),
                elemW = elem.width(),
                elemH = elem.height(),

                imgW = (elemW * winH) / elemH,
                imgH = (elemH * winW) / elemW,

                newW = imgH < winH ? imgW : winW,
                newH = imgH < winH ? winH : imgH;

            this.style.width = newW + "px";
            this.style.height = newH + "px";
        });
    };
}(jQuery, window));