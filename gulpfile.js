const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('default', () => {
  const stream = nodemon({
    script: 'searches/dfs-binary-tree.js'
  });

  stream
    .on('restart', () => {
      console.log('restarted!');
    })
    .on('crash', () => {
      console.error('Application has crashed!\n');
      stream.emit('restart', 10); // restart the server in 10 seconds
    });
});
