const restoreIpAddresses = function(s) {
    const result = [];
    if (s.length < 4 || s.length > 12) {
        return result;
    }
    function backtrack(start_index, current_segments) {
        if (current_segments.length === 4) {
            if (start_index === s.length) {
                result.push(current_segments.join('.'));
            }
            return;
        }
        if (current_segments.length > 4 || start_index >= s.length) {
             return;
        }
        for (let len = 1; len <= 3; len++) {
            if (start_index + len > s.length) {
                continue; 
            }
            const segment = s.substring(start_index, start_index + len);
            if (isValid(segment)) {
                current_segments.push(segment);
                backtrack(start_index + len, current_segments);
                current_segments.pop(); 
            }
        }
    }
    function isValid(segment) {
        if (segment.length > 1 && segment[0] === '0') {
            return false;
        }
        const num = parseInt(segment, 10);
        if (num >= 0 && num <= 255) {
            return true;
        }
        return false;
    }
    backtrack(0, []);
    return result;
};
