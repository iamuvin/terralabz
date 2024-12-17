import { motion } from 'framer-motion';

interface GameBoardProps {
  squares: Array<string | null>;
  onClick: (index: number) => void;
  winner: string | null;
  winningLine: number[] | null;
}

const GameBoard = ({ squares, onClick, winner, winningLine }: GameBoardProps) => {
  const renderSquare = (index: number) => {
    const isWinningSquare = winningLine?.includes(index);

    return (
      <motion.button
        key={index}
        whileHover={!squares[index] && !winner ? { scale: 1.05 } : {}}
        whileTap={!squares[index] && !winner ? { scale: 0.95 } : {}}
        onClick={() => onClick(index)}
        className={`
          aspect-square flex items-center justify-center text-4xl font-bold
          bg-gradient-to-br from-black/40 to-black/60 rounded-lg
          border-2 transition-all duration-300
          ${!squares[index] && !winner ? 'hover:border-secondary cursor-pointer' : 'cursor-not-allowed'}
          ${isWinningSquare ? 'border-secondary' : 'border-gray-800'}
        `}
        disabled={Boolean(squares[index]) || Boolean(winner)}
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={squares[index] === 'X' ? 'text-primary' : 'text-secondary'}
        >
          {squares[index]}
        </motion.span>
      </motion.button>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-full max-w-[400px] aspect-square">
      {squares.map((_, index) => renderSquare(index))}
    </div>
  );
};

export default GameBoard;