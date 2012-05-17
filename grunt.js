/*global module:false*/
module.exports = function(grunt) { 

grunt.initConfig({
  min: {
    dist: {
          src: ['javascript/development/zepto.js','javascript/development/underscore.js','javascript/development/backbone.js','javascript/development/app.js'],
          dest: 'javascript/app.min.js',
          separator: ';'
    }
  }
});

  // Default task.
  grunt.registerTask('default','min');

};
