module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-wintersmith');
  grunt.loadNpmTasks('grunt-livescript');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-hashres');

  grunt.registerTask('default', ['preview']);
  grunt.registerTask('build', ['clean', 'wintersmith', 'sprite', 'less', 'livescript', 'copy', 'concat']);
  grunt.registerTask('server', ['express']);
  grunt.registerTask('preview', ['build', 'server', 'watch']);
  grunt.registerTask('minify', ['cssmin', 'uglify']);
  grunt.registerTask('deploy', ['build', 'minify', 'hashres', 'gh-pages']);

  var jsVendors = [
    'bower_components/jquery/jquery.js',
    'bower_components/bootstrap/dist/js/bootstrap.js'
  ],
      defaultBanner = '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      lessPaths = [
    'bower_components/bootstrap/less/',
    'bower_components/font-awesome/less/',
    'contents/css/'
  ],
      fontFiles = [
    'bower_components/bootstrap/fonts/*',
    'bower_components/font-awesome/font/*'
  ];

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: ['build'],

    wintersmith: {
      build: {}
    },

    sprite: {
      build: {
        src: 'contents/img/sprites/*.png',
        destImg: 'contents/img/spritesheet.png',
        destCSS: 'contents/css/mysprites.less'
      }
    },

    copy: {
      build: {
        src: fontFiles,
        dest: 'build/fonts/',
        expand: true,
        flatten: true,
        filter: 'isFile'
      }
    },

    less: {
      options: {
        paths: lessPaths,
        compress: false
      },
      build: {
        src: 'contents/css/main.less',
        dest: 'build/css/main.css'
      }
    },

    livescript: {
      build: {
        src: 'contents/js/**/*.ls',
        dest: 'build/js/main.js'
      }
    },



    concat: {
      options: {
        banner: defaultBanner
      },
      build: {
        files: {
          'build/js/main.js': [jsVendors, ['build/js/main.js']],
          'build/js/html5shiv.js': 'bower_components/html5shiv/dist/html5shiv.js'
        }
      }
    },

    express: {
      server: {
        options: {
          bases: 'build',
          livereload: true,
          port: 8088
        }
      }
    },

    watch: {
      build: {
        files: [
          'Gruntfile.js',
          'contents/css/*.less',
          'contents/**/*.md',
          'templates/**/*.jade',
          'contents/img/**',
          'contents/js/*.ls',
          jsVendors
        ],
        tasks: ['build']
      }
    },

    cssmin: {
      options: {
        banner: defaultBanner,
        report: 'min'
      },
      'build/css/main.css': 'build/css/main.css'
    },

    uglify: {
      options: {
        banner: defaultBanner,
        report: 'min'
      },
      'build/js/main.js': 'build/js/main.js'
    },

    hashres: {
      options: {},
      deploy: {
        src: [
          'build/js/main.js',
          'build/css/main.css'
        ],
        dest: 'build/index.html'
      }
    },

    'gh-pages': {
      deploy: {
        options: {
          base: 'build',
          repo: 'https://github.com/ahdinosaur/ahdinosaur.github.io.git',
          branch: 'master',
          message: defaultBanner
        },
        src: ['**/*']
      }
    }

  });

};