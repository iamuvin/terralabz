import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Trophy, RotateCw } from 'lucide-react';
import { useGameState } from './hooks/useGameState';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';
import GameResult from './GameResult';
import { calculateWinner } from '../../utils/gameLogic';

const AIGame = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { state, handleMove, resetGame, setDifficulty } = useGameState();
  const winningLine = state.winner ? calculateWinner(state.board) : null;
  const isDraw = !state.winner && !state.board.includes(null);

  return (
    <section id="ai-game" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Challenge Our AI</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Test your skills against our AI in a game of Tic-Tac-Toe. The AI uses advanced algorithms 
            to make strategic moves.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center max-w-6xl mx-auto">
          <div className="w-full max-w-md">
            <GameBoard
              squares={state.board}
              onClick={handleMove}
              winner={state.winner}
              winningLine={winningLine}
            />
          </div>

          <div className="w-full max-w-xs space-y-6">
            <ScoreBoard
              playerScore={state.scores.player}
              aiScore={state.scores.ai}
              currentTurn={state.isXNext ? 'player' : 'ai'}
            />

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-black/40 to-black/60 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-secondary mb-4">
                  <Brain size={20} />
                  <span className="font-bold">AI Difficulty</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {(['easy', 'medium', 'hard'] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => setDifficulty(level)}
                      className={`
                        px-3 py-2 rounded-lg text-sm font-semibold capitalize
                        transition-all duration-300
                        ${state.difficulty === level
                          ? 'bg-secondary text-black'
                          : 'bg-black/30 text-gray-400 hover:text-white'
                        }
                      `}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetGame}
                className="w-full btn btn-primary flex items-center justify-center gap-2"
              >
                <RotateCw size={20} />
                New Game
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {(state.winner || isDraw) && (
            <GameResult
              winner={state.winner}
              onPlayAgain={resetGame}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AIGame;