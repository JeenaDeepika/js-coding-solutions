const maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    let totalCandies = 0;
    let haveBoxes = new Set(initialBoxes); 
    let haveKeys = new Set();
    let queue = [];
    const N = status.length;
    for (let i = 0; i < N; i++) {
        if (status[i] === 1) {
            haveKeys.add(i); 
        }
    }
    for (const box of initialBoxes) {
        if (haveKeys.has(box)) {
            queue.push(box);
        }
    }
    while (queue.length > 0) {
        const currentBox = queue.shift(); 
        if (!haveBoxes.has(currentBox)) {
            continue;
        }
        totalCandies += candies[currentBox];
        haveBoxes.delete(currentBox);
        haveKeys.delete(currentBox); 
        for (const newKey of keys[currentBox]) {
            haveKeys.add(newKey);
        }
        for (const newBox of containedBoxes[currentBox]) {
            haveBoxes.add(newBox);
        }
        let addedToQueue = true;
        let newlyOpenable = [];
        for (const boxLabel of haveBoxes) {
             if (haveKeys.has(boxLabel)) {
                newlyOpenable.push(boxLabel);
            }
        }
        for (const boxLabel of newlyOpenable) {
            queue.push(boxLabel);
            haveKeys.delete(boxLabel); 
        }
    }
    return totalCandies;
};
