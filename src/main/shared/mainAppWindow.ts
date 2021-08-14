import {
	BrowserWindow
} from 'electron';


let instance: BrowserWindow | null = null;

export const mainAppWindow = {
	getInstance() {
		if (instance) {
			return instance;
		} else {
			instance = new BrowserWindow({
				width: 1280,
				height: 720,
				// minWidth: 1280,
				// minHeight: 720,
				autoHideMenuBar: true,
				backgroundColor: '#262c36',
				titleBarStyle: 'hidden',
				darkTheme: true,
				webPreferences: {
					// Use pluginOptions.nodeIntegration, leave this alone
					// See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
					// nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
					nodeIntegration: true,
					contextIsolation: false
				}
			});
			return instance;
		}
	}
}