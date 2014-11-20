module.exports = function (grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    hostname: '*',
                    livereload: true,
                    open: {
                        target: 'http://127.0.0.1:1337'
                    },
                    port: 1337,
                    useAvailablePort: true
                }
            }
        },
        less: {
            build: {
                files: {
                    'css/main.css': 'less/main.less'
                },
                options: {
                    cleancss: true
                }
            }
        },
        watch: {
            build: {
                files: ['less/**'],
                tasks: ['less']
            },
            options: {
                livereload: true
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['less', 'connect', 'watch']);
};
