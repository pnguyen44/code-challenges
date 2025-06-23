// 490. The Maze
// There is a ball in a maze with empty spaces and walls. The ball can go through empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction.

// Given the ball's start position, the destination and the maze, determine whether the ball could stop at the destination.

// The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. You may assume that the borders of the maze are all walls. The start and destination coordinates are represented by row and column indexes.

// Input 1: a maze represented by a 2D array
// 0 0 1 0 0
// 0 0 0 0 0
// 0 0 0 1 0
// 1 1 0 1 1
// 0 0 0 0 0
// Input 2: start coordinate (rowStart, colStart) = (0, 4)
// Input 3: destination coordinate (rowDest, colDest) = (4, 4)
// Output: true
// Explanation: One possible way is : left -> down -> left -> down -> right -> down -> right.

/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function (maze, start, destination) {
	// simulate rolling behavior using BFS:
	// Use queue to track all positions to explore
	// At each position, try all 4 direction (up, down, left, right)
	// Once stopped, if not visited, add to queue
	// repeat until you either reach destination or exhaust all options

	const m = maze.length;
	const n = maze[0].length;

	// directions: up, down, left, right
	const dirs = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	const visited = Array.from({ length: m }, () => Array(n).fill(false));
	const q = [start];
	visited[start[0]][start[1]] = true;

	while (q.length > 0) {
		const [x, y] = q.shift();

		// if we reached destination, return true
		if (x === destination[0] && y === destination[1]) return true;

		for (const [dx, dy] of dirs) {
			let newX = x;
			let newY = y;

			// Roll in direction until hitting wall or boundary
			while (
				newX + dx >= 0 &&
				newX + dx < m &&
				newY + dy >= 0 &&
				newY + dy < n &&
				maze[newX + dx][newY + dy] === 0
			) {
				newX += dx;
				newY += dy;
			}

			// Check stop position after roll ends
			if (!visited[newX][newY]) {
				visited[newX][newY] = true;
				q.push([newX, newY]);
			}
		}
	}

	// no path to destination found
	return false;
};


// ____ test harness ____
function testMaze() {
	const maze = [
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 1, 0],
		[1, 1, 0, 1, 1],
		[0, 0, 0, 0, 0],
	];

	const tests = [
		{
			maze,
			start: [0, 4],
			destination: [4, 4],
			expected: true,
		},
		{
			maze,
			start: [0, 4],
			destination: [3, 2],
			expected: false,
		},
	];

	tests.forEach((test, index) => {
		const { maze, start, destination, expected } = test;
		const result = hasPath(maze, start, destination);
		console.log(
			`Test #${index + 1}: ${result === expected ? '✅ Passed' : '❌ Failed'}`
		);
		console.log(`Expected: ${expected}, Got: ${result}`);
	});
}

testMaze();
