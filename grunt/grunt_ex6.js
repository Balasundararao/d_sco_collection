module.exports=function(grunt){
    grunt.initConfig({
        concat: {
            foo: {
                files: {
                   'dest/foo.js': ['src/CODE_TESTING.js', 'src/aaa.js', 'dest/*.js']
                },
            },
            bar: {
                files: {
                   'dest/bar.js': ['src/CODE_TESTING.js', 'src/aaa.js', 'dest/*.js']
                },
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
};