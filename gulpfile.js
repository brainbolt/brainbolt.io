var gulp = require('gulp');
var execSync = require('child_process').execSync;
var del = require('del');

gulp.task('b', function (cb) {
  console.log('deleting files...');
  del.sync([
    '../brainbolt.github.io/**/*',
    '!../brainbolt.github.io/.git/',
    '!../brainbolt.github.io/.gitattributes',
    '!../brainbolt.github.io/CNAME',
  ], { force: true });

  console.log('building...');
  execSync('ng build --prod --output-hashing none', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });

  console.log('copying files...');
  gulp.src('dist/**')
    .pipe(gulp.dest('../brainbolt.github.io'));
  console.log('done');
})
