module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
       banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      build: {
       src: 'js/dist/scripts.js',
       dest: 'js/dist/scripts.min.js'
     }
   },
   concat: {
    dist: {
      src: ['js/src/vendor/*.js','js/src/*.js'],
      dest: 'js/dist/scripts.js'
    }
  },
  sass: {
    dist: {
      options: {
       style: 'expanded'
     },
     files: {
       'css/style.css' : 'scss/style.scss'
     }
   }
 },
 autoprefixer: {
  single_file: {
    src: 'css/style.css',
    dest:'css/style.css'
  }
},
connect: {
  server: {
   options: {}
 }
},
watch: {
  js: {
    files: ['js/src/*.js'],
    tasks: ['concat','uglify'],
    options: {
     spawn: false
   }
 },
 scss: {
  files: ['scss/*.scss'],
  tasks: ['sass','autoprefixer']
},
html: {
  files: ['*.html'],
  options: {
   livereload: true
 }
},
css: {
  files: ['css/*.css'],
  options: {
   livereload: true
 }
}
},
cssmin: {
  minify: {
    src:['css/*.css','!css/*.min.css'],
    dest: 'css/style.min.css'
  }
}

});
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.registerTask('default',['concat','uglify']);
grunt.registerTask('serve', [ 'connect','watch' ]);
grunt.registerTask('build', [ 'sass','cssmin','concat','uglify']);
}
