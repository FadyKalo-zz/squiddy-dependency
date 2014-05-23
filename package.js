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
    /* ========= END ========= */

    /* ========= JavaScript ========= */
    "public/assets/plugins/jquery-1.8.3.min.js",
    "public/assets/plugins/bootstrap/js/bootstrap.min.js",
    "public/assets/plugins/pace/pace.min.js",
    "public/assets/plugins/jquery-validation/js/jquery.validate.min.js",
    "public/assets/plugins/jquery-lazyload/jquery.lazyload.min.js",
    "public/assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js",
    /* =========    END     ========= */

    /* =========    IMG     ========= */
    "public/assets/img/work.jpg",
    /* =========    END     ========= */

    /* =========    FONT    ========= */
    "public/assets/plugins/font-awesome/fonts/fontawesome-webfont.woff",
    "public/assets/plugins/font-awesome/fonts/fontawesome-webfont.ttf",
    "public/assets/plugins/font-awesome/fonts/fontawesome-webfont.svg"
    /* =========    END     ========= */
  ];
  //
  api.add_files(clientFiles, "client");
  //
  console.log("SQUIDDY-DEPENDENCY : Loaded asset.")
});



