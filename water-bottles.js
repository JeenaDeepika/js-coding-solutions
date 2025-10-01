/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let totalDrunk = numBottles;
    let emptyBottles = numBottles;
    while (emptyBottles >= numExchange) {
        const newFullBottles = Math.floor(emptyBottles / numExchange);
        totalDrunk += newFullBottles;
        const leftoverEmpty = emptyBottles % numExchange;
        emptyBottles = leftoverEmpty + newFullBottles;
    }
    return totalDrunk;
};
