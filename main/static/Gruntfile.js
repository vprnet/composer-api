module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: 'dev/sass',
                    cssDir: 'css'
                }
            }
        },
        concat: {
            dist: {
                src: [
                    // Explicitly list files to determine order
                    'libs/*',
                    'dev/handlebars/templates.js',
                    'dev/js/script.js'
                ],
                dest: 'js/script.js'
            }
        },
        uglify: {
            build: {
                src: 'js/script.js',
                dest: 'js/script.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'dev/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img'
                    }]
            }
        },
        watch: {
            scripts: {
                files: ['dev/js/*.js', 'dev/handlebars/templates.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                    livereload: false
                }
            },
            css: {
                files: 'dev/sass/*.scss',
                tasks: ['compass', 'cssmin']
            },
            images: {
                files: 'dev/img/*',
                tasks: ['imagemin']
            }
        },
        handlebars: {
            compile: {
                src: 'dev/handlebars/*.handlebars',
                dest: 'dev/handlebars/templates.js',
                options: {
                    namespace: false
                }
            }
        },
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    // What tasks should be run when "grunt" is entered in the command line
    grunt.registerTask('default', ['watch']);

};
