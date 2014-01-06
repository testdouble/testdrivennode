"use strict"
module.exports = (grunt) ->

  grunt.loadNpmTasks "grunt-jasmine-bundle"

  grunt.initConfig
    spec:
      unit:
        options:
          helpers: "test/unit/helpers/**/*.{js,coffee}"
          specs: "test/unit/**/*.{js,coffee}"
          minijasminenode:
            showColors: true
