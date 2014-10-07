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
            nowPlaying: {
                src: [
                    // Explicitly list files to determine order
                    'libs/handlebars.js',
                    'dev/handlebars/nowHandlebars.js',
                    'dev/js/nowWidget.js'
                ],
                dest: 'js/nowScript.js'
            },
            playlistCalendar: {
                src: [
                    'libs/history.js',
                    'libs/handlebars.js',
                    'libs/pikaday.js',
                    'dev/handlebars/calendarHandlebars.js',
                    'dev/js/calendarWidget.js'
                ],
                dest: 'js/calendarScript.js'
            }
        },
        uglify: {
            build: {
                files: {
                    'js/calendarScript.min.js': 'js/calendarScript.js',
                    'js/nowScript.min.js': 'js/nowScript.js'
                }
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
                files: ['dev/js/*.js',
                    'dev/handlebars/nowHandlebars.js',
                    'dev/handlebars/calendarHandlebars.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                    livereload: true
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
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: 'css/*.css'
                },
                options: {
                    watchTask: true
                }
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
    grunt.registerTask('default', ['browserSync', 'watch']);

};
