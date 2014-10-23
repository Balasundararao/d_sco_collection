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


/**
module.exports=function(grunt){

//File1:
//    grunt.initConfig({
//        person:{
//            firstName:"Frank"
//        }
//    })
//    grunt.initConfig(grunt.file.readJSON("config.json"));
//    grunt.registerTask("default", function(name){
//        grunt.log.writeln("Hello  "  + "--" +name +" --" + grunt.config.get("person").firstName);
//    });

//File2:
//    grunt.initConfig({
//        asks:{
//            one:"Hello",
//            two:"TWO",
//            three:"Three"
//        }
//    });
//    grunt.registerMultiTask("asks",function(){
//        grunt.log.writeln(this.target+ "---" +this.data);
//    });

//File3:
    grunt.initConfig({
        min:{
            dist:{
                src:'calculator/add.js',
                dest:'add.min.js'

            }
        }
    });
//    grunt.registerMultiTask("asks",function(){
//        grunt.log.writeln(this.target+ "---" +this.data);
//    });
}; **/