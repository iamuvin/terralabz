import { motion } from 'framer-motion';
import { Trophy, Medal, RotateCw } from 'lucide-react';

interface GameResultProps {
  winner: string | null;
  onPlayAgain: () => void;
}

const GameResult = ({ winner, onPlayAgain }: GameResultProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-gradient-to-br from-black/90 to-black/80 p-8 rounded-2xl border border-gray-800
          shadow-2xl max-w-md w-full mx-4"
      >
        <div className="text-center">
          {winner === 'X' ? (
            <div className="mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-2 text-yellow-500">Victory!</h2>
              <p className="text-gray-300">Congratulations! You've beaten the AI!</p>
            </div>
          ) : winner === 'O' ? (
            <div className="mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <Medal className="w-16 h-16 text-secondary mx-auto mb-4" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-2 text-secondary">AI Wins!</h2>
              <p className="text-gray-300">Good game! Want to try again?</p>
            </div>
          ) : (
            <div className="mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 text-4xl">🤝</div>
              </motion.div>
              <h2 className="text-3xl font-bold mb-2">It's a Draw!</h2>
              <p className="text-gray-300">Great match! Both players played well.</p>
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPlayAgain}
            className="btn btn-primary w-full flex items-center justify-center gap-2"
          >
            <RotateCw size={20} />
            Play Again
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GameResult;