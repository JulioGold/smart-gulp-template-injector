var gulp = require('gulp'),
    path = require('path'),
    smartGulpTemplateInjector = require('../smartGulpTemplateInjector.js');

gulp.task('template1', function() {

    var destPath = path.join(__dirname, 'dest');
    var originPath = path.join(__dirname, '**', '*1.js');

    var dataObj = {
        libs: "var path = path || require('path');\nvar fs = fs || require('fs');\n",
        function: "function AnotherFunction() {\n	console.log('All ok.');\n};"
    };

    return gulp.src(originPath)
        .pipe(smartGulpTemplateInjector(dataObj))
        .pipe(gulp.dest(destPath));
});

gulp.task('template2', function() {

    var destPath = path.join(__dirname, 'dest');
    var originPath = path.join(__dirname, '**', '*2.js');

    var dataObj = {
        module: {
            libs: "var path = path || require('path');\nvar fs = fs || require('fs');\n",
            function: "function AnotherFunction() {\n	console.log('All ok.');\n};"
        }
    };

    return gulp.src(originPath)
        .pipe(smartGulpTemplateInjector(dataObj))
        .pipe(gulp.dest(destPath));
});

gulp.task('default', ['template1', 'template2']);
