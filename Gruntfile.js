
/* Src File listing
Format:
"map_dir/*.js", "!map_dir/*.min.js"
The second part is to avoid to use the min file
*/
src_file_listing = [
    'algeria/*.js', '!algeria/*.min.js',
    'argentina/*.js', '!argentina/*.min.js',
    'belgium/*.js', '!belgium/*.min.js',
    'canada/*.js', '!canada/*.min.js',
    'croatia/*.js', '!croatia/*.min.js',
    'england/*.js', '!england/*.min.js',
    'european_union/*.js', '!european_union/*.min.js',
    'france/*.js', '!france/*.min.js',
    'germany/*.js', '!germany/*.min.js',
    'india/*.js', '!india/*.min.js',
    'mexico/*.js', '!mexico/*.min.js',
    'netherlands/*.js', '!netherlands/*.min.js',
    'poland/*.js', '!poland/*.min.js',
    'scandinavia/*.js', '!scandinavia/*.min.js',
    'thailand/*.js', '!thailand/*.min.js',
    'srilanka/*.js', '!srilanka/*.min.js',
    'thailand/*.js', '!thailand/*.min.js',
    'ukraine/*.js', '!ukraine/*.min.js',
    'united_kingdom/*.js', '!united_kingdom/*.min.js',
    'wales/*.js', '!wales/*.min.js'
];

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: src_file_listing
        },
        uglify: {
            options: {
                compress: true,
                mangle: true,
                preserveComments: 'some',
                report: 'gzip',
                screwIE8: false
            },
            build: {
                files: [
                    {
                        expand: true,     // Enable dynamic expansion.
                        src: src_file_listing,
                        ext: '.min.js',   // Dest filepaths will have this extension.
                        extDot: 'last'   // Extensions in filenames begin after the last dot
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'uglify']);
};
