module.exports=function(grunt){
	   grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       uglify: {
           options: {
               banner: '/*! Balasundar <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
           },
           build: {
               src: 'src/<%= pkg.name %>.js',
               dest: 'build/<%= pkg.name %>.min.js'
           }
       }
   });
   // Load the plugin that provides the "uglify" task.
   grunt.loadNpmTasks('grunt-contrib-uglify');

   // Default task(s).
   grunt.registerTask('default', function(){
       grunt.log.writeln(grunt.config.get("pkg").name).ok();
   });
};