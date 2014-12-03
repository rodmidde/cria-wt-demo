// Karma configuration file
// See http://karma-runner.github.io/0.10/config/configuration-file.html
module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // libraries
      'src/main/javascript/libs/jquery-1.9.1.min.js',
      'src/main/javascript/libs/jasmine-jquery-1.5.0.js',

      // our app
      'src/main/javascript/*.js',

      // tests
      'src/test/javascript/*.js',
    ],

    browsers: ['PhantomJS'],
    singleRun: true,
    reporters: ['progress', 'coverage', 'dots', 'junit'],

    preprocessors: {
      'src/main/javascript/*.js': ['coverage']
    },

    coverageReporter: {
      type : 'lcovonly',
      dir : 'coverage/'
    },

    junitReporter: {
      outputFile: 'test-results.xml'
    },
  });
};
