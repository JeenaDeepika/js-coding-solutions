const numOfUnplacedFruits = function(fruits, baskets) {
    let used = new Array(baskets.length).fill(false);
    let unplaced = 0;
    for (let i = 0; i < fruits.length; i++) {
        let placed = false;
        for (let j = 0; j < baskets.length; j++) {
            if (!used[j] && baskets[j] >= fruits[i]) {
                used[j] = true;
                placed = true;
                break;
            }
        }
        if (!placed) {
            unplaced++;
        }
    }
    return unplaced;
};
