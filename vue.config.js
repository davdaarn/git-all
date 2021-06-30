/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
	configureWebpack: {
		// target: 'electron-renderer',
		devtool: 'source-map'
	},
	pluginOptions: {
		electronBuilder: {
			chainWebpackRendererProcess: (config) => {
				config.resolve.alias.set('@', path.resolve(__dirname + '/src/renderer/'));
			},
			mainProcessFile: "src/main/index.ts",
			rendererProcessFile: "src/renderer/main.ts",
		},
	},
};