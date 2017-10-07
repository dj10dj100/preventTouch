(function ($) {
    $.fn.preventTouch = function (options) {
        var device = {
            android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            blackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            ios: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            iPhone: function () {
                return navigator.userAgent.match(/iPhone/i);
            },
            iPad: function () {
                return navigator.userAgent.match(/iPad/i);
            },
            iPod: function () {
                return navigator.userAgent.match(/iPod/i);
            },
            opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return (device.android() || device.blackBerry() || device.ios() || device.opera() || device.windows());
            }
        }

        //store defaults().
        var settings = $.extend({}, options);

        //store constant current device
        var CURRENT_DEVICE = device;

        if (settings['any'] && CURRENT_DEVICE.any()
            || settings['android'] && CURRENT_DEVICE.android()
            || settings['ios'] && CURRENT_DEVICE.ios()
            || settings['blackberry'] && CURRENT_DEVICE.blackBerry()
            || settings['ios'] && CURRENT_DEVICE.opera()
            || settings['windows'] && CURRENT_DEVICE.windows()) {

            return this.each(function () {

                $(this).data('touched', false);

                $(this).click(function (e) {

                    if ($(this).data('touched')) {
                        return true;
                    } else {
                        $(this).data('touched', true);
                        e.preventDefault();
                    }
                });
            });
        }
    };

})(jQuery);