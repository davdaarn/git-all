import DataStore from 'nedb-electron';

import {
	app
} from 'electron';

let instance: { workspaces: any; errorLogs: any; } | null = null;

export const datastore = {
	getInstance() {
		if (instance) return instance;

		instance = {
			workspaces: new DataStore({
				filename: `${app.getPath('appData')}\\gamora\\db\\workspaces.db`,
				autoload: true
			}),
			errorLogs: new DataStore({
				filename: `${app.getPath('appData')}\\gamora\\db\\error_logs.db`,
				autoload: true
			}),
		}

		return instance;
	},
}