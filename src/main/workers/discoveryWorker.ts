const {
	workerData,
	parentPort
} = require('worker_threads');

const fs = require('fs');
const path = require('path');
const os = require('os');

const {
	vision
} = require('../utils/vision')
const {
	pathOps
} = require('../utils/pathOps')

const paths: any[] = []
let deepSearchHalts = 0;

const walk = (currentDirectory: any, tripCount = 1) => {
	if (tripCount > 3) {
		return ++deepSearchHalts
	}
	try {
		// vision.yellow(currentDirectory)

		let subDirectories = fs.readdirSync(currentDirectory).map((x: any) => `${currentDirectory}\\${x}`)

		subDirectories = pathOps.filterCommonRestrictedPaths(subDirectories)

		if (subDirectories.find((x: string) => RegExp('(.git)$').test(x))) {
			// console.log(true);
			return paths.push(currentDirectory)
		}

		subDirectories.forEach((directory: any) => {
			walk(directory, tripCount + 1)
		})
	} catch (error) {
		vision.red(error);
	}
}

workerData.forEach((directory: any) => {
	walk(directory)
})

console.log('hello from the inside');

parentPort.postMessage({
	filePaths: paths,
	status: 'Done',
	deepSearchHalts
});