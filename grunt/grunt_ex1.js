module.exports = function(grunt){
	grunt.initConfig({
		person:{
			firstName:"Frank"
		}
	})
	grunt.initConfig(grunt.file.readJSON("config.json"));
    grunt.registerTask("default", function(name){
       grunt.log.writeln("Hello  "  + "--" +name +" --" + grunt.config.get("person").firstName);
    });
};