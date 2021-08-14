const fs = require('fs');
const constants = require('fs');
const path = require('path');

export const pathOps = {
	filterCommonRestrictedPaths: (paths: any[]) => {
		return paths.filter((p: string) => {
			try {
				fs.accessSync(p, constants.R_OK | constants.W_OK | constants.F_OK | constants.X_OK);
			} catch (err) {
				console.error('no access!', p);
				return false
			}
			if (fs.lstatSync(p).isFile()) return false
			if (fs.lstatSync(p).isSymbolicLink()) return false
			if (p.includes('node_modules')) return false
			if (p.includes('$')) return false
			if (p.includes('Program Files')) return false
			if (p.includes('AppData')) return false
			if (RegExp('([\\][.][^git])').test(p)) return false

			return true
		})
	}
}