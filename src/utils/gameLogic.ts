export const calculateWinner = (squares: Array<string | null>): number[] | null => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }
  }
  return null;
};

export const minimax = (
  squares: Array<string | null>, 
  depth: number, 
  isMaximizing: boolean
): number => {
  const winningLine = calculateWinner(squares);
  const winner = winningLine ? squares[winningLine[0]] : null;
  
  if (winner === 'O') return 10 - depth;
  if (winner === 'X') return depth - 10;
  if (squares.every(square => square !== null)) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        squares[i] = 'O';
        const score = minimax(squares, depth + 1, false);
        squares[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        squares[i] = 'X';
        const score = minimax(squares, depth + 1, true);
        squares[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};

export const getAIMove = (
  board: Array<string | null>,
  difficulty: 'easy' | 'medium' | 'hard'
): number => {
  if (difficulty === 'easy') {
    const emptySquares = board.reduce((acc: number[], curr, idx) => {
      if (curr === null) acc.push(idx);
      return acc;
    }, []);
    return emptySquares[Math.floor(Math.random() * emptySquares.length)];
  }

  let bestScore = -Infinity;
  let move = 0;
  const newBoard = [...board];

  for (let i = 0; i < newBoard.length; i++) {
    if (newBoard[i] === null) {
      newBoard[i] = 'O';
      const score = minimax(newBoard, 0, false);
      newBoard[i] = null;

      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  // For medium difficulty, occasionally make suboptimal moves
  if (difficulty === 'medium' && Math.random() < 0.3) {
    const emptySquares = board.reduce((acc: number[], curr, idx) => {
      if (curr === null) acc.push(idx);
      return acc;
    }, []);
    return emptySquares[Math.floor(Math.random() * emptySquares.length)];
  }

  return move;
};