Package.describe({
  summary: "Meteorite package containing third party libraries required by Squiddy app."
});

Package.on_use(function (api, where) {

  var clientFiles = [

    /* ========= CSS ========= */
    "public/assets/plugins/pace/pace-theme-flash.css",
    "public/assets/plugins/boostrapv3/css/bootstrap.min.css",
    "public/assets/plugins/boostrapv3/css/bootstrap-theme.min.css",
    "public/assets/plugins/font-awesome/css/font-awesome.css",
    "public/assets/css/animate.min.css",
    "public/assets/plugins/bootstrap-datepicker/css/datepicker.css",
    "public/assets/css/style.css",
    "public/assets/css/responsive.css",
    "public/assets/css/magic_space.css",
    "public/assets/css/custom-icon-set.css",
    "public/assets/plugins/jquery-slider/css/jquery.sidr.light.css",
    /* ========= END ========= */

    /* ========= JavaScript ========= */
    "public/assets/plugins/bootstrap/js/bootstrap.min.js",
    "public/assets/plugins/pace/pace.min.js",
    "public/assets/plugins/jquery-validation/js/jquery.validate.min.js",
    "public/assets/plugins/jquery-lazyload/jquery.lazyload.min.js",
    "public/assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js",
    "public/assets/plugins/jquery-ui/jquery-ui-1.10.1.custom.min.js",
    "public/assets/plugins/breakpoints.js",
    "public/assets/plugins/jquery-unveil/jquery.unveil.min.js",
    "public/assets/plugins/jquery-block-ui/jqueryblockui.js",
    "public/assets/plugins/jquery-slider/jquery.sidr.min.js",
    "public/assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js",
    "public/assets/plugins/jquery-numberAnimate/jquery.animateNumbers.js",
    "public/assets/js/core.js",
    /* =========    END     ========= */

    /* =========    IMG     ========= */
    "public/assets/img/work.jpg",
    "public/assets/img/logo.png",
    "public/assets/img/logo2x.png",
    "public/assets/img/profiles/d.jpg",
    "public/assets/img/profiles/d2x.jpg",
    "public/assets/img/profiles/h.jpg",
    "public/assets/img/profiles/h2x.jpg",
    "public/assets/img/profiles/c.jpg",
    "public/assets/img/profiles/c2x.jpg",
    "public/assets/img/profiles/avatar.jpg",
    "public/assets/img/profiles/avatar2x.jpg",
    "public/assets/img/profiles/avatar_small.jpg",
    "public/assets/img/profiles/avatar_small2x.jpg",
    "public/assets/img/icon/top-trayx2.png",
    "public/assets/img/icon/status2x.png",
    "public/assets/img/pullup2x.png",

    /* =========    END     ========= */

    /* =========    FONT    ========= */
    "public/assets/plugins/font-awesome/fonts/fontawesome-webfont.woff",
    "public/assets/plugins/font-awesome/fonts/fontawesome-webfont.ttf",
    "public/assets/plugins/font-awesome/fonts/fontawesome-webfont.svg",
    "public/assets/fonts/custom-set.dev.svg",
    "public/assets/fonts/custom-set.eot",
    "public/assets/fonts/custom-set.svg",
    "public/assets/fonts/custom-set.ttf",
    "public/assets/fonts/custom-set.woff",
    /* =========    END     ========= */
  ];
  //
  api.use('jquery', 'client');
  api.add_files(clientFiles, "client");
  //
  console.log("SQUIDDY-DEPENDENCY : Loaded asset.")
});



