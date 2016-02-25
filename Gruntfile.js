module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');


  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),

    'meta': {
      'jsFilesForTesting': [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/moment/min/moment.js',
        'bower_components/underscore/underscore.js',
        'test/*Spec.js'
      ]
    },
    'htmlmin': {
      'dist': {
        'options': {
          'removeComments': true,
          'collapseWhitespace': true
        },
        'files': [{
          'expand': true,
          'src': ['*.html', 'partials/*.html', 'views/*.html'],
          'dest': 'dist'
        }]
      }
    },
    'jshint': {
      'beforeconcat': ['js/*.js'],
    },  

    'concat': {
      'dist': {
        'src': ['js/*.js'],
        'dest': 'dist/<%= pkg.namelower %>-<%= pkg.version %>.js'
      }
    },
    'jasmine': {
      'src': ['<%= meta.jsFilesForTesting %>','js/*.js'],
      'options': {
        'specs': 'test/*Spec.js'
      }
    },
    'uglify': {
      'options': {
        'mangle': false
      },  
      'dist': {
        'files': {
          'dist/<%= pkg.namelower %>-<%= pkg.version %>.min.js': ['dist/<%= pkg.namelower %>-<%= pkg.version %>.js']
        }
      }
    }
  });

  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('build',
    [
      'jshint',
      'concat',
      'uglify'
    ]);

};

