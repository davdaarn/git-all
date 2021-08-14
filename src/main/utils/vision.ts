export const colorCode = {
	black: 30,
	red: 31,
	green: 32,
	yellow: 33,
	blue: 34,
	purple: 35,
	cyan: 36,
	white: 37
}

/**
 * Color codes by use type
 * @typedef {(colorType|colorCode)} ColorType
 */
export const colorType = {
	error: 31,
	success: 32,
	warning: 33,
	ok: 34,
	info: 37
}

export const vision = {
	/**
	 * @param  {string} message Message to be logged to the console
	 * @param  {ColorType} color Color of text
	 * @param  {} modifiers
	 */
	format: (message: string, color = 37, modifiers: any) => {
		const prefix = '\u001b['
		const suffix = '\u001b[0m'

		if (message)
			console.log(`${prefix}${color}m${message}${suffix}`)
	},


	//** Depreciated */
	red: function (message: any) {
		console.log(`\u001b[0;31m${message}\u001b[0m`)
	},

	//** Depreciated */
	green: function (message: any) {
		console.log(`\u001b[0;32m${message}\u001b[0m`)
	},

	//** Depreciated */
	yellow: function (message: any) {
		console.log(`\u001b[0;33m${message}\u001b[0m`)
	}
};