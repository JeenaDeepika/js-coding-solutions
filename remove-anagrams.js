const getCanonicalForm = (word) => {
    return word.split('').sort().join('');
};
let removeAnagrams = function(words) {
    if (words.length <= 1) {
        return words;
    }
    const result = [words[0]];
    let lastKeptCanonical = getCanonicalForm(words[0]);
    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i];
        const currentCanonical = getCanonicalForm(currentWord);
        if (currentCanonical === lastKeptCanonical) {
            continue; 
        } else {
            result.push(currentWord);
            lastKeptCanonical = currentCanonical;
        }
    }
    return result;
};
