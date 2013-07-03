/*!
 * jquery.fitpic.js 0.0.5 - https://github.com/yckart/jquery.fitpic.js
 * Stretch images perfect.
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/04/02
*/
(function ($, window) {

    function fitPic(img, parent) {
        var winW = window.innerWidth || $(parent).width(),
            winH = window.innerHeight || $(parent).height(),

            // get the image dimensions
            imgW = img.width,
            imgH = img.height,

            // calculate the ratio
            ratioW = (imgW * winH) / imgH,
            ratioH = (imgH * winW) / imgW,

            // check/compare the width and height
            width = ratioW < winW ? winW : ratioW,
            height = ratioH < winH ? winH : ratioH,

            // position/center the image
            left = (width - winW) / 2,
            top = (height - winH) / 2,

            style = img.style;

        // apply new dimensions for image
        style.width = width + 'px';
        style.height = height + 'px';
        style.marginTop = -top + 'px';
        style.marginLeft = -left + 'px';
        
    }

    $.fn.fitPic = function (parent) {
        return this.each(function () {
            var img = this;
            $(window).on('resize load', function () {
                fitPic(img, parent || this);
            }).resize(); 
        });
    };

}(jQuery, this));
