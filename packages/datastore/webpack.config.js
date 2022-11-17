module.exports = {
	entry: {
		'aws-amplify-datastore.min': './lib-esm/index.js',
	},
	externals: [
		{
			'@aws-amplify/pubsub': 'aws_amplify_pubsub',
			'@aws-amplify/cache': 'aws_amplify_cache',
			'@aws-amplify/auth': 'aws_amplify_auth',
			'@aws-amplify/core': 'aws_amplify_core',
			'@aws-amplify/api': 'aws_amplify_api',
			'@aws-amplify/api-graphql': 'aws_amplify_api-graphql',
		},
	],
	output: {
		filename: '[name].js',
		path: __dirname + '/dist',
		library: 'aws_amplify_datastore',
		libraryTarget: 'umd',
		umdNamedDefine: true,
		devtoolModuleFilenameTemplate: require('../aws-amplify/webpack-utils')
			.devtoolModuleFilenameTemplate,
	},
	// Enable sourcemaps for debugging webpack's output.
	devtool: 'source-map',
	resolve: {
		extensions: ['.mjs', '.js', '.json'],
	},
	mode: 'production',
	module: {
		rules: [
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			//{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				],
			},
		],
	},
};
