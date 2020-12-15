const paths = require('./paths');
const path = require('path');

const outputPath = path.join(__dirname, '../dist/');

const baseConfig = {
	entry: ['./src/DefDateTime.js'],
	mode: 'production',

	resolve: {
		extensions: ['.js']
	},

	externals: {
		'react': 'react',
		'react-dom': 'react-dom',
		'moment': 'moment',
		'moment-timezone': 'moment-timezone'
	},

	module: {
		rules: [
			{
				test: /\.(js|mjs|jsx|ts|tsx)$/,
				include: paths.appSrc,
				loader: require.resolve('babel-loader')
			}
		]
	},
	devtool: 'source-map'
};

const umdConfig = {
	...baseConfig,
	output: {
		path: outputPath,
		library: 'DefDateTime',
		libraryTarget: 'umd',
		filename: 'def-react-datetime.umd.js',
		auxiliaryComment: 'React defdatetime',
		libraryExport: 'default'
	}
};

const cjsConfig = {
	...baseConfig,
	output: {
		path: outputPath,
		library: 'DefDateTime',
		libraryTarget: 'commonjs2',
		filename: 'def-react-datetime.cjs.js',
		auxiliaryComment: 'React defdatetime'
	}
};

module.exports = [ umdConfig, cjsConfig ];
