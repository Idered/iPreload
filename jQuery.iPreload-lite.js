/**
 * iPreload lite 1.0.5
 * https://demo.idered.pl/jQuery.iPreload
 *
 * Copyright 2011, Kasper Mikiewicz <http://idered.pl>
 * Released under the MIT license.
 * Date 2011-08-20
 */
(function($) {
    $.fn.iPreload = function () {
        var delay = 0,

            i = -1,

            images = $('img', this).fadeOut(0).parent().css({
                background : 'url(img/loader.gif) 50% 50% no-repeat'
            }).end(),

            links = $('a', this).filter(function(){
                return (/(jpe?g|png|gif)$/i).test(this.href);
            }),

            timer = setInterval(function () {

                if ( ! (images = images.filter(function () {

                    if ( ! this.complete) return this;

                    $(this).delay(delay += 100).fadeIn(500, function() {
                        $(this).parent().removeAttr('style');
                    });

                }))[0]) clearInterval(timer);

            }, 200);

        for(; links[++i] ;) new Image().src=links[i];

    };
})(jQuery);
