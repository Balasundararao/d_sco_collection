module.exports=function(grunt){
   	grunt.initConfig({
        jshint:{
           foo:{
               src:'calculator/add.js'
           }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
};