# smart-gulp-template-injector  
You can process an template injecting stretches of anything with an context object using gulp.  
  
## Usage  

```
npm install smart-gulp-template-injector
```

### Selectors
You can use basically on pattern to select inject tag:  
* `/*inject:*/`  
  
After of `:` you can put the property name of the object what you want to use.  
  
### Gulp example  

```javascript
var gulp = require('gulp'),
    path = require('path'),
    smartGulpTemplateInjector = require('smart-gulp-template-injector');

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

```  
  
### News  
- 0.0.1 Created gulp plugin.  
- 0.0.2 Changed acceptable version of *smart-template-injector*.  
- 0.0.3 Fix dependency version.
  
Danke  
  