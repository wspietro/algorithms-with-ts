/**
 * Example with list of string
 * 
 * [
 *  "#######E#",
 *  "#       #",
 *  "#S#######",
 * ]
 * 
 * Base Cases (requires us to know were we are currently at):
 * 1. off the map
 * 2. its a wall
 * 3. its the end
 * 4. if we have seen it
 * 
 * Recursive Step (require us to be able to walk in directions):
 * 1. Go all 4 directions
 * 
 * Maze is a square.  
 * x = horizontal (rows)
 * y = vertical (columns)
 * 2d arrays, you traverse the columns then the rows
 * 
 *  */

const dir = [
  [-1, 0], // esquerda
  [1, 0], // direita
  [0, -1], // cima
  [0, 1], // baixo
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  // Base Cases
  // 1. off the map
  if (curr.x < 0 || curr.x >= maze[0].length ||
    curr.y < 0 || curr.y >= maze.length
  ) {
    return false
  }

  // 2. its a wall
  if (maze[curr.y][curr.x] === wall) {
    return false
  }

  // 3. its the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end)
    return true
  }

  // 4. if we have seen it
  if (seen[curr.y][curr.x]) {
    return false
  }

  // Recurse cases
  //pre
  seen[curr.y][curr.x] = true
  path.push(curr);

  // recurse
  for (let i = 0; i < dir.length; ++i) {
    const [x, y] = dir[i]
    if (walk(maze, wall, {
      x: curr.x + x,
      y: curr.y + y
    }, end, seen, path)) {
      return true
    }
  }

  //post
  path.pop();

  return false;

}

// returns list of points from start to the end
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = []
  const path: Point[] = []

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false))
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}