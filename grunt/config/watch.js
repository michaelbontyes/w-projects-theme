// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
	grunt: {
		options: {
			livereload: true
		},
		files: [
			'<%= files.grunt %>',
			'<%= files.config %>'
		],
		tasks: [
			'jshint:grunt',
			'jsvalidate:grunt',
			'jscs:grunt'
		]
	},
	php: {
		files: [
			'<%= files.php %>'
		],
		tasks: [
			'phplint',
			'phpcs'
		]
	},
	js: {
		files: [
			'<%= files.js %>'
		],
		tasks: [
			'build:js',
			'jshint:assets',
			'jsvalidate:assets',
			'jscs:assets'
		]
	},
	scss: {
		files: [
			'<%= files.scss %>'
		],
		tasks: [
			'sass:theme',
			'usebanner:theme',
			'autoprefixer',
			'wpcss:css',
			'cssjanus',
			'cssmin:style',
			'replace:style',
			'copy:css'
		]
	}
};
