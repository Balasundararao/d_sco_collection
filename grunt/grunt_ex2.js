module.exports = function(grunt){
	grunt.initConfig({
       asks:{
           one:"Hello",
           two:"TWO",
           three:"Three"
       }
    });
    grunt.registerMultiTask("asks",function(){
        grunt.log.writeln(this.target+ "---" +this.data);
    });
};