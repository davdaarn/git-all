import { vision } from './vision';

export const childProcess = {
	/**
	 * @param  {string} command 
	 */
	exec: (command: any) => {
		return new Promise((resolve, reject) => {
			vision.red(command)
			if (process.platform === 'win32') {

				// const win = mainAppWindow.getInstance();
				const exec = require('child_process').exec;
				const cmd = exec(command);

				cmd.stdout.on('data', function (data: string) {
					console.log(typeof data)
					console.log(data)
					const re = /(?<=On\sbranch\s)(\S*)(?=\s)/gi
					const branch = data.match(re)
					vision.green(branch)
					if (branch && branch.length)
						resolve(branch[0])
				})

				cmd.stderr.on('data', function (data: any) {
					console.log(data)
				})

				cmd.on('exit', function (code: string | number) {
					console.log('Child process exited with exit code ' + code)
					if (code === 0) {
						// win.webContents.send('foundGitInPath', true)
					} else {
						// win.webContents.send('foundGitInPath', false)
					}
				});
			}
		})
	}
}