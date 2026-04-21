import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, AlertCircle, BarChart3, Clock, Calendar } from 'lucide-react';
import { Match } from '../data/matches';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface MatchDetailsProps {
  match: Match | null;
  onClose: () => void;
}

const MatchDetails: React.FC<MatchDetailsProps> = ({ match, onClose }) => {
  if (!match) return null;

  const chartData = [
    { name: match.homeTeam, value: match.prediction.homeWin, color: '#3b82f6' },
    { name: 'Draw', value: match.prediction.draw, color: '#94a3b8' },
    { name: match.awayTeam, value: match.prediction.awayWin, color: '#ef4444' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-slate-800 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <BarChart3 className="text-blue-500" />
                AI Prediction Analysis
              </h2>
              <p className="text-slate-400 text-sm">{match.league}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 space-y-8 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-300">
                  <Calendar size={18} className="text-blue-400" />
                  <span>{match.date}</span>
                  <Clock size={18} className="text-blue-400 ml-2" />
                  <span>{match.time}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Probabilities</h3>
                  <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData} layout="vertical">
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" width={100} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                        <Tooltip 
                          cursor={{ fill: 'transparent' }}
                          contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                        />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-500/5 border border-blue-500/20 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="text-blue-400" size={18} />
                    <span className="text-sm font-bold text-blue-400">AI Confidence: {match.prediction.confidence}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${match.prediction.confidence}%` }}
                      className="bg-blue-500 h-full"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Key Insights</h3>
                  {match.prediction.reasoning.map((reason, i) => (
                    <div key={i} className="flex gap-3 text-sm text-slate-300 items-start">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                      <p>{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2 text-amber-400 mb-4 text-xs font-medium bg-amber-400/5 p-3 rounded-lg border border-amber-400/10">
                <AlertCircle size={16} />
                <span>Disclaimer: This is an AI prediction. Betting involves risk. Never bet more than you can afford to lose.</span>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]">
                Place Simulated Bet
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MatchDetails;
