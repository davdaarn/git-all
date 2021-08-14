const {
	app,
	ipcMain,
	webContents
} = require('electron');

const {
	Worker
} = require('worker_threads');

const fs = require('fs');
const path = require('path');
const util = require('util')

import {
	datastore
} from '../../shared/datastore'


const db = datastore.getInstance();

import {
	childProcess,
} from '../../utils/process'

import {
	mainAppWindow
} from '../../shared/mainAppWindow';

// // const {
// //     vision
// // } = require('../../utils/vision');

import {
	vision,
	colorType
} from '../../utils/vision'

import {
	pathOps
} from '../../utils/pathOps'


let win: Electron.BrowserWindow | null = null;

const Git = require("nodegit");

// const runDiscoveryWorker = (workerData: any) => {
// 	return new Promise((resolve, reject) => {
// 		const worker = new Worker('./src/main/workers/discoveryWorker.js', {
// 			workerData
// 		})

// 		worker.on('message', (data: unknown) => {
// 			// console.log(data);
// 			win.webContents.send('SET_GIT_REPOSITORIES', data)
// 			return resolve(data)
// 		});
// 		worker.on('error', (data: any) => {
// 			console.log(data);
// 			return reject('oh snap!!!');
// 		});
// 		worker.on('exit', (code: number) => {
// 			if (code !== 0) {
// 				reject(new Error(`Worker Thread stopped with exit code: ${code}`));
// 			} else {
// 				return resolve('all done');
// 			}
// 		});
// 	})
// }

// ipcMain.handle('FIND_GIT_REPOSITORIES', async (event, paths) => {
// 	vision.green(paths.length)
// 	// vision.green(typeof paths)
// 	// vision.green([...paths])

// 	if (!win) win = mainAppWindow.getInstance()

// 	const pathsContainSystemDrive = paths.some((x: string | any[]) => {
// 		if (x.length <= 3) {
// 			vision.red('failed the test bro')
// 			win.webContents.send('ERROR', {
// 				system: 'Root path probably system drive',
// 				user: 'System drives use you must not'
// 			})

// 			return true
// 		}
// 	})

// 	if (paths && paths.length && !pathsContainSystemDrive) {
// 		paths = pathOps.filterCommonRestrictedPaths(paths)
// 		vision.yellow(paths.length)

// 		win.webContents.send('SEARCHING_FOR_REPOSITORIES', true)
// 		try {
// 			runDiscoveryWorker(paths).then(res => {
// 				console.log(res);
// 			})
// 		} catch (error) {
// 			vision.red('well that sucked')
// 		}
// 	} else {
// 		// handle condition
// 		vision.yellow('Some other condition...')
// 	}

// })

// const gitStatus = async (pathToRepo: any) => {
// 	let repoObject = {
// 		currentBranch: null,
// 		branches: []
// 	}

// 	const repo = await Git.Repository.open(pathToRepo)

// 	repoObject.currentBranch = (await repo.getCurrentBranch()).name()

// 	const refs = await repo.getReferences()

// 	vision.yellow(refs)

// 	repoObject.branches = refs.filter((r: { isRemote: () => number; }) => r.isRemote() !== 1).map((r: { name: () => any; }) => r.name())


// 	// repoObject.branches = (await Git.Reference.list(repo)).filter(r => r.isRemote() !== 1)

// 	console.log(repoObject)

// 	return repoObject
// }

// ipcMain.handle('GIT_STATUS', async (event, pathToRepo) => {
// 	return await gitStatus(pathToRepo)
// 	//   return await childProcess.exec(`cd /d ${pathToRepo} && git status`)
// })

// const checkoutBranch = async (pathToRepo: any, branchName: any) => {
// 	const repo = await Git.Repository.open(pathToRepo)

// 	const checkoutResult = repo.checkoutBranch(branchName)

// 	console.log(checkoutResult);
// }

// ipcMain.handle('CHECKOUT_BRANCH', async (event, pathToRepo, branchName) => {
// 	return await checkoutBranch(pathToRepo, branchName)
// })

// ipcMain.handle('TEST', async (event, test) => {
// 	console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			return resolve('test is complete')
// 		}, 3000);
// 	})
// })