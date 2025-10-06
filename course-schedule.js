const canFinish = function(numCourses, prerequisites) {
    const adj = new Array(numCourses).fill(0).map(() => []);
    const inDegree = new Array(numCourses).fill(0);
    for (const [course, preReq] of prerequisites) {
        adj[preReq].push(course);
        inDegree[course]++;
    }
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    let coursesTaken = 0;
    while (queue.length > 0) {
        const currentCourse = queue.shift();
        coursesTaken++;
        for (const neighbor of adj[currentCourse]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    return coursesTaken === numCourses;
};
