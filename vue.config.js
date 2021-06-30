module.exports = {
	// configureWebpack: {
	// 	target: 'electron-renderer'
	// },
	pluginOptions: {
		electronBuilder: {
			chainWebpackRendererProcess: (config) => {
				config.resolve.alias.set('@', path.resolve(__dirname + '/src/renderer'));
			},
			mainProcessFile: "src/main/index.ts",
			rendererProcessFile: "src/renderer/main.ts",
		},
	},
};