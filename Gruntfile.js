'use strict';
module.exports = function(grunt) {

  
  // Load all tasks
  require('load-grunt-tasks')(grunt);

  // Show elapsed time
  require('time-grunt')(grunt);
  
  //grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    // node-sass config
    sass: {
      dev: {
        options: {
          outputStyle: 'nested',
          sourceMap: true
        },
        files: { 'css/style.css': 'scss/style.scss' }
      },
      build: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true
        },
        files: { 'css/style.min.css': 'scss/style.scss' }
      }

    },
    // grunt-contrib-sass config
    // sass: {
    //   dev: {
    //     options: {
    //       style: 'nested',
    //       sourceMap: auto
    //     },
    //     files: { 'css/style.css': 'scss/style.scss' }
    //   },
    //   build: {
    //     options: {
    //       style: 'compressed',
    //       sourceMap: auto
    //     },
    //     files: { 'css/style.min.css': 'scss/style.scss' }
    //   }

    // },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
      },
      dev: {
        options: {
          map: true
        },
        src: 'css/style.css'
      },
      build: {
        options: {
          map: true
        },
        src: 'css/style.min.css'
      }
    },
    notify: {
      options: {
        enabled: true,
        max_jshint_notifications: 5, // maximum number of notifications from jshint output
        title: "Project Name" // defaults to the name in package.json, or will use project directory's name
      }
    },
    watch: {
      sass: {
        files: [
          'scss/*.scss',
          'scss/**/*.scss'
        ],
        tasks: [
          'sass:dev', 
          'autoprefixer:dev'
        ]
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: true
        },
        files: [
          'css/main.css',
          'index.html'
        ]
      }
    }
  });


  // Register tasks
  grunt.registerTask('default', [
    'dev'
  ]);
  grunt.registerTask('dev', [
    'sass:dev',
    'autoprefixer:dev',
    'notify'
  ]);
  grunt.registerTask('build', [
    'sass:build',
    'autoprefixer:build',
    'notify'
  ]);

};
