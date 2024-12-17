import { useState, useCallback } from 'react';
import { calculateWinner, getAIMove } from '../../../utils/gameLogic';

export interface GameState {
  board: Array<string | null>;
  isXNext: boolean;
  winner: string | null;
  scores: {
    player: number;
    ai: number;
  };
  difficulty: 'easy' | 'medium' | 'hard';
}

export const useGameState = () => {
  const [state, setState] = useState<GameState>({
    board: Array(9).fill(null),
    isXNext: true,
    winner: null,
    scores: { player: 0, ai: 0 },
    difficulty: 'medium'
  });

  const handleMove = useCallback((index: number) => {
    if (state.winner || state.board[index]) return;

    const newBoard = [...state.board];
    newBoard[index] = 'X';

    const winningLine = calculateWinner(newBoard);
    if (winningLine) {
      setState(prev => ({
        ...prev,
        board: newBoard,
        winner: 'X',
        scores: { ...prev.scores, player: prev.scores.player + 1 }
      }));
      return;
    }

    if (newBoard.includes(null)) {
      setTimeout(() => {
        const aiMove = getAIMove(newBoard, state.difficulty);
        const aiBoard = [...newBoard];
        aiBoard[aiMove] = 'O';

        const aiWinningLine = calculateWinner(aiBoard);
        setState(prev => ({
          ...prev,
          board: aiBoard,
          isXNext: true,
          winner: aiWinningLine ? 'O' : null,
          scores: aiWinningLine 
            ? { ...prev.scores, ai: prev.scores.ai + 1 }
            : prev.scores
        }));
      }, 500);
    }

    setState(prev => ({
      ...prev,
      board: newBoard,
      isXNext: false
    }));
  }, [state]);

  const resetGame = useCallback(() => {
    setState(prev => ({
      ...prev,
      board: Array(9).fill(null),
      isXNext: true,
      winner: null
    }));
  }, []);

  const setDifficulty = useCallback((difficulty: 'easy' | 'medium' | 'hard') => {
    setState(prev => ({ ...prev, difficulty }));
  }, []);

  return {
    state,
    handleMove,
    resetGame,
    setDifficulty
  };
};