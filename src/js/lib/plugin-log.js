define(function() {
    var data = seajs.config.data;
    seajs.message = function(type, args) {
        try {
            window.console && data.debug && console[type] && console[type].apply(console, args);
        } catch (e) {
        }
    };
    seajs.log = function() {
        seajs.message("log", arguments);
    };
    seajs.warn = function() {
        seajs.message("warn", arguments);
    };
    seajs.error = function() {
        seajs.message("error", arguments);
    };
});
