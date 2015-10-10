module.exports=function(grunt){
	grunt.initConfig({
		
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', function(){
		console.log("this is default grunt task");
	});
}