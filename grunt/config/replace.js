// https://github.com/outaTiME/grunt-replace
module.exports = {
	style: {
		options: {
			patterns: [
				{
					// Add line break between banner and minified
					match: /\*\/(?=\S)/g,
					replacement: '*/\n'
				}
			]
		},
		files: [{
			expand: true,
			src: [
				'<%= paths.tmp %>style.min.css',
				'<%= paths.tmp %>style-rtl.min.css',
				'<%= paths.tmp %>editor-style.min.css'
			]
		}]
	},
	genericons: {
		options: {
			patterns: [
				{
					// Change path to match theme font location.
					match: /url\(\'/g,
					replacement: 'url(\'..font/'
				},
				{
					// Change path to match theme font location.
					match: /url\(\"\.\//g,
					replacement: 'url(\"..font/'
				}
			]
		},
		files: [
			{
				expand: true,
				src: [
					'<%= paths.bower %>genericons/genericons.css'
				]
			}
		]
	},
	release: {
		options: {
			patterns: [
				{
					match: 'release',
					replacement: '<%= pkg.version %>'
				}
			]
		},
		files: [
			{
				expand: true,
				src: [
					'<%= paths.theme %>**/*'
				]
			}
		]
	},
	// Useful when forking this project into a new project
	packagename: {
		options: {
			patterns: [
				{
					match: /woodd/g,
					replacement: '<%= pkg.name %>'
				},
				{
					match: /Woodd/g,
					replacement: '<%= pkg.capitalname %>'
				}
			]
		},
		files: [
			{
				expand: true,
				src: [
					'**',
					'.*',
					'!<%= paths.bower %>**/*',
					'!<%= paths.composer %>**/*',
					'!**/*.{png,ico,jpg,gif}',
					'!node_modules/**',
					'!.sass-cache/**',
					'!dist/**',
					'!logs/**',
					'!tmp/**',
					'!*.sublime*',
					'!.DS_Store'
				]
			}
		]
	}
};
