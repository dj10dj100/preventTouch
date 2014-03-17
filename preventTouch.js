(function($) {

    var methods = {

        settings: {},

        init: function(options) {

            if (options.any == true && methods.any() == true) {
                console.log('any mobile device');
            }


        },
        android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        blackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        ios: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (methods.android() || methods.blackBerry() || methods.ios() || methods.opera() || methods.windows());
        }

    };

    $.fn.preventTouch = function(methodOrOptions) {

        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + methodOrOptions + ' does not exist.');
        }
    };

})(jQuery);