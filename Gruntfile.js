module.exports=function(grunt){
	var path = require("path");

	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'tasks'),
		data: {
			pkg: "this is pkg"
		}
	});
};