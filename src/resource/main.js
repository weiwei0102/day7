require.config({
    baseUrl: "./resource/app/",
    paths: {
        css: "../libs/css.min",
        jquery: "../libs/jquery.min"
    }
})
require(['demo'], function(opt) {
    opt.fight();
})