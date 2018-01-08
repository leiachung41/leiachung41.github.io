'use strict'
var ngrok = require('ngrok');

module.exports = function(grunt) {

	// // Load grunt tasks
	require('load-grunt-tasks')(grunt);

	// Grunt configuration
	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						name: 'five',
						width: '5%',
						quality: 30
					},{
						name: 'half',
						width: '100%',
						quality: 50
					}]
				},
				files: [{
					expand: true,
					src: ['*.{gif,jpg,png,JPG}'],
					cwd: 'img/opt_img',
					dest: 'img/opt_img'
				}]
			}
		},
		pagespeed: {
			options: {
				nokey: true,
				locale: "en_GB",
				threshold: 40
			},
			local: {
				options: {
					strategy: "desktop"
				}
			},
			mobile: {
				options: {
					strategy: "mobile"
				}
			}
		}
	});

	// Register customer task for ngrok
	grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function() {
		var done = this.async();
		var port = 8000;

		ngrok.connect(port, function(err, url) {
			if (err !== null) {
				grunt.fail.fatal(err);
				return done();
			}
			grunt.config.set('pagespeed.options.url', url);
			grunt.task.run('pagespeed');
			done();
		});
	});

	// Register default tasks
	grunt.registerTask('default', ['responsive_images','psi-ngrok']);


};
