(function () {
    //var basepath = "/compile";
    var basepath = "/src";
    var config = {
        base: basepath,
        v: "R",
        map: [
            ["https://passport.uucin.com" + basepath, location.protocol + "//" + location.host + basepath]
        ],
        debug: false,
        preload: ["load", "text", "log"],
        paths: {
            "playviewpath": "https://github.com/yucopowo/playview/master",
            "libspath": "/src/js/lib"
        },
        alias: {
            "load": "libspath/plugin-load",
            "text": "libspath/plugin-text",
            "log": "libspath/plugin-log.min",
            "$": "libspath/jquery-1.12.3.min",
            "ko": "libspath/knockout-3.4.0",
            "iScroll": "libspath/iscroll-probe",
            "handlebars": "libspath/handlebars",
            "cookies": "libspath/cookies",
            "FlyJSONP": "libspath/FlyJSONP",
            "jqueryJson": "libspath/jquery.json-2.4",
            "base64": "libspath/base64",
            "Class": "playviewpath/Class",
            "Message": "playviewpath/Message",
            "ViewArray": "playviewpath/ViewArray",
            "ViewModel": "playviewpath/ViewModel",
            "View": "playviewpath/View",
            "Application": "playviewpath/Application"
        }
    };
    seajs.config(config);
}());
