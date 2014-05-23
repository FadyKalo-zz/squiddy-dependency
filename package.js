Package.describe({
  summary: "Meteorite package containing third party libraries required by Squiddy app."
});

Package.on_use(function (api, where) {

  /*
   var clientFiles = getFilesFromFolder("squiddy-dependency" , "public")
   console.log(clientFiles);
   */
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
  ];
  api.add_files(clientFiles, "client");
});


/******************************
 *        Helper methods        *
 *******************************/

function getFilesFromFolder(packageName, folder) {
  // local imports
  var _ = Npm.require("underscore");
  var fs = Npm.require("fs");
  var path = Npm.require("path");
  // helper function, walks recursively inside nested folders and return absolute filenames
  function walk(folder) {
    var filenames = [];
    // get relative filenames from folder
    var folderContent = fs.readdirSync(folder);
    // iterate over the folder content to handle nested folders
    _.each(folderContent, function (filename) {
      // build absolute filename
      var absoluteFilename = folder + path.sep + filename;
      // get file stats
      var stat = fs.statSync(absoluteFilename);
      if (stat.isDirectory()) {
        // directory case => add filenames fetched from recursive call
        filenames = filenames.concat(walk(absoluteFilename));
      }
      else {
        // file case => simply add it
        filenames.push(absoluteFilename);
      }
    });
    return filenames;
  }

  // save current working directory (something like "/home/user/projects/my-project")
  var cwd = process.cwd();
  // chdir to our package directory
  process.chdir("packages" + path.sep + packageName);
  // launch initial walk
  var result = walk(folder);
  // restore previous cwd
  process.chdir(cwd);
  return result;
}
