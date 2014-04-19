/*!
 * Grunt
 * $ npm install grunt-contrib-uglify grunt-autoprefixer grunt-contrib-cssmin grunt-contrib-imagemin grunt-contrib-sass grunt-contrib-watch grunt-contrib-concat grunt-contrib-clean grunt-contrib-jshint grunt-notify --save-dev
 */

module.exports = function(grunt) {

  grunt.initConfig({

    // Sass
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'assets/styles/main.css': 'styles/main.scss'
        }
      }
    },

    // Autoprefix
    autoprefixer: {
      options: {
        browsers: [
          'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
        ]
      },
      dist: {
        src: 'assets/styles/main.css'
      }
    },

    // CSS minify
    cssmin: {
      dist: {
        files: {
          'assets/styles/main.min.css': 'assets/styles/main.css'
        }
      }
    },

    // JShint
    jshint: {
      files: ['js/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Concat
    concat: {
      js: {
        src: ['js/**/*.js'],
        dest: 'assets/js/main.js'
      },
    },

    // Uglify
    uglify: {
      dist: {
        src: 'assets/scripts/main.js',
        dest: 'assets/scripts/main.min.js'
      },
    },

    // Imagemin
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3,
          progressive: true,
          interlaced: true
        },
        files: [{
          expand: true,
          cwd: 'images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/images'
        }]
      }
    },

    // Clean
    clean: {
      build: ['assets/styles', 'assets/scripts', 'assets/images']
    },

    // Notify
    notify: {
      styles: {
        options: {
          message: 'Styles task complete',
        }
      },
      scripts: {
        options: {
          message: 'Scripts task complete',
        }
      },
      images: {
        options: {
          message: 'Images task complete',
        }
      },
    },

    // Watch
    watch: {
      styles: {
        files: 'styles/**/*.scss',
        tasks: ['sass', 'autoprefixer', 'cssmin', 'notify:styles'],
      },
      scripts: {
        files: 'js/**/*.js',
        tasks: ['concat', 'uglify', 'notify:scripts'],
      },
      images: {
        files: 'images/**/*',
        tasks: ['imagemin', 'notify:images'],
      },
      livereload: {
        options: { livereload: true },
        files: [
          'assets/styles/**/*.css',
          'assets/scripts/**/*.js',
          'assets/images/**/*'
        ]
      }
    }
  });

  // Default task
  grunt.registerTask('default', [
    'jshint',
    'clean',
    'concat',
    'uglify',
    'sass',
    'autoprefixer',
    'cssmin',
    'imagemin'
  ]);

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-notify');

};