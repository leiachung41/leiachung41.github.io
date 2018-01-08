module.exports = function(grunt) {

	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						name: 'small',
						width: '30%',
						quality: 20
					}, {
						name: 'medium',
						width: '60%',
						quality: 40
					}, {
						name: 'gallery',
						width: 240,
						quality: 50
					}, {
						name: '800',
						width: 800,
						suffix: '_large_1x',
						quality: 50
					}]
				},
					files: [{
						expand: true,
						src: ['*.{gif,jpg,png,JPG}'],
						cwd: 'img/res_img',
						dest: 'img/res_img'
					}]
				}
			},
	  });

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default', ['responsive_images']);

};
