/**
 * @callback AsyncFunction
 * 
 * @param {*} value
 * @param {number} index
 * @param {Array} array
 * 
 * @returns {Promise<*>}
 */

/**
 * @param {Array} array 
 * @param {AsyncFunction} asyncCallback 
 */
export default async function asyncForEach (array, asyncCallback) {
    for (let index = 0; index < array.length; index++) {
        await asyncCallback(array[index], index, array)
    }
}
