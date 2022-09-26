const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

/**
 *
 * @param {string} player x|circle
 *
 * @returns boolean true|false
 */
export function checkWin(player) {
  // Tip1: Here you have access to DOM elements
  // Tip2: You can get all elements that contains an attribute data-cell or a class called cell using a DOM function
  // Tip3: If the element was clicked by any player, it will have an extra css class[x | circle] on it
  // Tip4: If x is in the position 0,1,2 on the board x is the winner
}
