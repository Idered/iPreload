/**
 * iPreload 1.0.5
 * https://demo.idered.pl/jQuery.iPreload
 *
 * Copyright 2012, Kasper Mikiewicz <http://idered.pl>
 * Released under the MIT license.
 * Date 2012-09-8
 */
(function($) {

    $.fn.iPreload = function (settings) {

        settings = $.extend({
            onAll : function () {},
            onOne : function (i) {},
            onFail : function (i) {},
            beforeShow : function (i) {},
            fadeTime : 500,
            delay : 100,
            interval : 200,
            wrapper : 'a',
            placeholder : 'img/loader.gif',
            preloadLinkImages: true
        }, settings);

        var i = 0,

            images = $('img', this).fadeOut(0).each(function () {
                $(this).wrap($(this).parent(settings.wrapper)[0] ? '' : '<a class="u"/>').parent().css({
                    background : 'url(' + settings.placeholder + ') 50% 50% no-repeat',
                    display : 'inline-block',
                    'min-width' : 20,
                    'min-height' : 20
                });
            }),

            links = settings.preloadLinkImages ? $('a', this).filter(function(){ return /(jpe?g|png|gif)$/i.test(this.href); }) : null,

            timer = setInterval(function () {

                images = images.filter(function () {

                    var $this = $(this);

                    this.onerror = function () {
                        settings.onFail(this);
                    };

                    if (this.complete) {

                        settings.beforeShow($this);

                        $this.delay(i += settings.delay).fadeIn(settings.fadeTime, function () {
                            $this.parent('.u')[0] ? $this.unwrap() : $this.parent().removeAttr('style');
                            settings.onOne($this);
                        });

                    } else return this;
                });

                if ( ! images[0]) {

                    clearInterval(timer);

                    setTimeout(settings.onAll, i + settings.delay);

                    for(i=-1; links[++i];) new Image().src=links[i];

                }

            }, settings.interval);

    };
})(jQuery);
