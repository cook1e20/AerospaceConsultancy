
module.exports = (grunt) => {
    grunt.initConfig({
        watch: {
            sass:{
                files: "stylesheets/*.sass",
                tasks: ['sass']
            }
        },
        sass: {
            dev: {
                files:{
                    "stylesheets/styles.css" : "stylesheets/styles.sass"
                }
            }
        },
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "stylesheets/*.css", "*html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        },

    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-postcss');
    
    grunt.registerTask('default', ['browserSync', 'watch']);

}
