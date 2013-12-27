module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({

    clean: {
      all: ['app.css', 'app.js']
    },

    compass: {
      development: {
        options: {
          specify: 'sass/app.sass',
          cssPath: '.',
          outputStyle: 'expanded',
          noLineComments: true
        }
      },
      production: {
        options: {
          specify: 'sass/app.sass',
          cssPath: '.',
          outputStyle: 'compressed',
          noLineComments: true
        }
      }
    },

    jshint: {
      all: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: [
          'Gruntfile.js',
          'js/main.js'
        ]
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      all: {
        files: {
          'app.js': [
            'js/lib/prism.js',
            'js/main.js'
          ]
        }
      }
    },

    watch: {

      css: {
        files: ['**/*.sass'],
        tasks: ['compass'],
        options: {
          spawn: false,
        }
      },
      jshint: {
        files: [
          'Gruntfile.js',
          'js/main.js'
        ],
        tasks: ['jshint'],
        options: {
          spawn: false,
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['clean', 'compass:development', 'jshint', 'uglify', 'watch']);
  grunt.registerTask('publish', ['clean', 'compass:production', 'uglify']);

};
