import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Zap, Info } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Match } from '../data/matches';

interface PredictionCardProps {
  match: Match;
  onSelect: (match: Match) => void;
}

const PredictionCard: React.FC<PredictionCardProps> = ({ match, onSelect }) => {
  const data = [
    { name: 'Home', value: match.prediction.homeWin, color: '#3b82f6' },
    { name: 'Draw', value: match.prediction.draw, color: '#94a3b8' },
    { name: 'Away', value: match.prediction.awayWin, color: '#ef4444' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-slate-900 border border-slate-800 rounded-xl p-5 cursor-pointer hover:border-blue-500/50 transition-all shadow-xl"
      onClick={() => onSelect(match)}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-400/10 px-2 py-1 rounded">
          {match.league}
        </span>
        <div className="flex items-center gap-1 text-xs text-slate-400">
          <TrendingUp size={14} className="text-emerald-400" />
          <span>Confidence: {match.prediction.confidence}%</span>
        </div>
      </div>

      <div className="grid grid-cols-3 items-center gap-4 mb-6">
        <div className="text-center">
          <div className="text-sm font-bold text-white mb-1 truncate">{match.homeTeam}</div>
          <div className="text-xs text-slate-500">HOME</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-16 w-16">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={20}
                  outerRadius={30}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <span className="text-[10px] text-slate-400 mt-1 uppercase">Win Prob.</span>
        </div>
        <div className="text-center">
          <div className="text-sm font-bold text-white mb-1 truncate">{match.awayTeam}</div>
          <div className="text-xs text-slate-500">AWAY</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-slate-800/50 p-2 rounded text-center">
          <div className="text-[10px] text-slate-500 uppercase">1</div>
          <div className="text-sm font-mono text-blue-400">{match.odds.home}</div>
        </div>
        <div className="bg-slate-800/50 p-2 rounded text-center">
          <div className="text-[10px] text-slate-500 uppercase">X</div>
          <div className="text-sm font-mono text-slate-300">{match.odds.draw}</div>
        </div>
        <div className="bg-slate-800/50 p-2 rounded text-center">
          <div className="text-[10px] text-slate-500 uppercase">2</div>
          <div className="text-sm font-mono text-red-400">{match.odds.away}</div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400 bg-slate-800/30 p-2 rounded">
        <Zap size={12} className="text-yellow-400" />
        <span className="italic truncate">{match.prediction.reasoning[0]}</span>
      </div>
    </motion.div>
  );
};

export default PredictionCard;
