cont minCost = function(colors, neededTime) {
    let totalTime = 0;
    let maxTimeInGroup = 0;
    let currentTimeInGroup = 0;
    for (let i = 0; i < colors.length; i++) {
        if (i > 0 && colors[i] === colors[i - 1]) {
            currentTimeInGroup += neededTime[i];
            maxTimeInGroup = Math.max(maxTimeInGroup, neededTime[i]);
        } else {
            if (i > 0) {
                totalTime += (currentTimeInGroup - maxTimeInGroup);
            }
            currentTimeInGroup = neededTime[i];
            maxTimeInGroup = neededTime[i];
        }
    }
    totalTime += (currentTimeInGroup - maxTimeInGroup);
    return totalTime;
};
