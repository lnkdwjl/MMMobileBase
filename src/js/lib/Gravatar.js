define(function(require) {

    var swfobject = require("swfobject");

    var GravatarUpload = function(settings) {
        this.initSettings(settings);
        this.showFlash();
    };
    GravatarUpload.prototype.swfVersionStr = "11.1.0";
    GravatarUpload.prototype.initSettings = function(settings) {
        if (!settings)
            throw new Error("No settings!");
        !settings.id && (settings.id = "Gravatar_" + new Date().getTime());
        if (!settings.swf_src)
            throw new Error("No swf!");
        if (!settings.container_id)
            throw new Error("No swf container_id!");
        !settings.swf_width && (settings.swf_width = 402);
        !settings.swf_height && (settings.swf_height = 362);
        if (!settings.request_url)
            throw new Error("No swf request_url!");
        if (!settings.request_filename)
            throw new Error("No swf request_filename!");
        !settings.request_params && (settings.request_params = {});
        !settings.file_maxsize && (settings.file_maxsize = 2048000);
        !settings.filefilters && (settings.filefilters = []);
        !settings.select_button_text && (settings.select_button_text = "选择文件");
        !settings.select_button_color && (settings.select_button_color = "#fe8500");
        !settings.select_button_fontsize && (settings.select_button_fontsize = 12);
        !settings.upload_button_text && (settings.upload_button_text = "保存文件");
        !settings.upload_button_color && (settings.upload_button_color = "#fe8500");
        !settings.upload_button_fontsize && (settings.upload_button_fontsize = 12);
        typeof settings.file_queued_handler !== "function" && (settings.file_queued_handler = new Function());
        typeof settings.file_queue_error_handler !== "function" && (settings.file_queue_error_handler = new Function());
        typeof settings.upload_success_handler !== "function" && (settings.upload_success_handler = new Function());
        typeof settings.upload_error_handler !== "function" && (settings.upload_error_handler = new Function());
        typeof settings.progress_handler !== "function" && (settings.progress_handler = new Function());
        var file_types = "";
        for (var i = 0; i < settings.filefilters.length; i++) {
            file_types += settings.filefilters[i].types + ";";
        }
        settings.file_types = file_types;

        this.settings = settings;

        window[settings.id + "_"] = {
            getSettings : function() {
                return settings;
            },
            file_queued_handler : settings.file_queued_handler,
            file_queue_error_handler : settings.file_queue_error_handler,
            upload_success_handler : settings.upload_success_handler,
            upload_error_handler : settings.upload_error_handler,
            progress_handler : settings.progress_handler
        };
    };
    GravatarUpload.prototype.showFlash = function() {
        var settings = this.settings;
        var params = {};
        params.quality = "high";
        params.bgcolor = "#FFFFFF";
        params.allowscriptaccess = "sameDomain";
        params.allowfullscreen = "true";
        var attributes = {};
        attributes.id = attributes.name = settings.id;
        attributes.align = "middle";
        swfobject.embedSWF(settings.swf_src, settings.container_id, settings.swf_width, settings.swf_height,
        this.swfVersionStr, "", {}, params, attributes
        );
    };

    return GravatarUpload;
}
);
