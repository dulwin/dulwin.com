"use strict";

module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ["./js/*.js"],
                tasks: ["uglify"]
            },
            less: {
                files: "less/*.less",
                tasks: ["less", "cssmin"]
            }
        },
        less: {
            development: {
                options: {
                    paths: ["./less/"],
                },
                files: {
                    "./css/style.css": "./less/main.less"
                }
            },
        },
        cssmin: {
            minify : {
                expand: true,
                cwd: "./css/",
                src: [ "*.css", "!*.min.css" ],
                dest: "./css/",
                ext: ".min.css"
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: './js/scripts.js',
                dest: './js/scripts.min.js'
            }
        },
    });
    // the default task (running "grunt" in console) is "watch"
    grunt.registerTask("default", ["watch"]);
};
