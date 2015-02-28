// https://github.com/gruntjs/grunt-contrib-sass
module.exports = {
	options: {
		force: true,
		sourcemap: 'none',
		style: 'expanded',
		trace: true,
		lineNumbers: false
	},
	theme: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.authorAssets %>scss/',
				src: 'style.scss',
				dest: '<%= paths.tmp %>',
				ext: '.css'
			}
		]
	},
	editorstyle: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.authorAssets %>scss/',
				src: 'editor-style.scss',
				dest: '<%= paths.tmp %>',
				ext: '.css'
			}
		]
	}
};
