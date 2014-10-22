module.exports=function(grunt){
	   grunt.initConfig({
       jshint: {
           foo: {
               src: ['src/CODE_TESTING.js', 'src/aaa.js', 'dest/*.js']
           },
       },
       concat: {
           bar: {
               src: ['src/aaa.js', 'src/CODE_TESTING.js'],
               dest: 'dest/b.js',
           },
       },
   });
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.registerTask('default', ['jshint', 'concat']);
};
