// https://github.com/jgable/grunt-phplint
module.exports = {
	theme: [
		'<%= files.php %>',
		'!<%= paths.theme %>includes/vendor/**/*.php'
	]
};
