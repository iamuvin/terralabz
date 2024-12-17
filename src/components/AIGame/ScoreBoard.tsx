import { Trophy, User, Cpu } from 'lucide-react';

interface ScoreBoardProps {
  playerScore: number;
  aiScore: number;
  currentTurn: 'player' | 'ai';
}

const ScoreBoard = ({ playerScore, aiScore, currentTurn }: ScoreBoardProps) => {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-black/40 to-black/60 p-4 rounded-xl">
        <div className="flex items-center gap-2 text-secondary mb-2">
          <Trophy size={20} />
          <span className="font-bold">Score</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2 text-primary">
              <User size={16} />
              <span>You</span>
            </div>
            <div className="text-2xl font-bold">{playerScore}</div>
          </div>
          <div className="text-2xl font-bold">-</div>
          <div>
            <div className="flex items-center gap-2 text-secondary">
              <Cpu size={16} />
              <span>AI</span>
            </div>
            <div className="text-2xl font-bold">{aiScore}</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-black/40 to-black/60 p-4 rounded-xl">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${currentTurn === 'player' ? 'bg-primary' : 'bg-secondary'} animate-pulse`} />
          <span className="font-bold">
            {currentTurn === 'player' ? 'Your Turn' : 'AI Thinking...'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;