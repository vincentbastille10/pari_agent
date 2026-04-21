import React, { useState, useMemo } from 'react';
import { matches, Match } from './data/matches';
import PredictionCard from './components/PredictionCard';
import MatchDetails from './components/MatchDetails';
import { Search, Filter, BrainCircuit, Trophy, Info, Bell, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLeague, setActiveLeague] = useState<string>('All');

  const leagues = useMemo(() => {
    return ['All', ...new Set(matches.map((m) => m.league))];
  }, []);

  const filteredMatches = matches.filter((match) => {
    const matchesSearch = 
      match.homeTeam.toLowerCase().includes(searchQuery.toLowerCase()) ||
      match.awayTeam.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLeague = activeLeague === 'All' || match.league === activeLeague;
    return matchesSearch && matchesLeague;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <BrainCircuit className="text-white" size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight">
              Bet<span className="text-blue-500">Mind</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-4 text-sm font-medium text-slate-400">
              <a href="#" className="text-white">Predictions</a>
              <a href="#" className="hover:text-white transition-colors">Stats</a>
              <a href="#" className="hover:text-white transition-colors">Leagues</a>
              <a href="#" className="hover:text-white transition-colors">Live</a>
            </nav>
            <div className="h-4 w-px bg-slate-800" />
            <div className="flex items-center gap-3">
              <button className="p-2 text-slate-400 hover:text-white transition-colors">
                <Bell size={20} />
              </button>
              <button className="p-2 text-slate-400 hover:text-white transition-colors">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-900 p-8 md:p-12">
            <div className="relative z-10 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-100 mb-6"
              >
                <Trophy size={14} />
                <span>AI-POWERED SPORTS INSIGHTS</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
              >
                Predict the Unpredictable with Precision
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-blue-100 text-lg mb-8 leading-relaxed opacity-90"
              >
                Our neural network analyzes over 1,000 data points per match to give you the most accurate sports predictions on the market.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white text-blue-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Explore Today's Picks
              </motion.button>
            </div>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill="#FFFFFF" d="M45.7,-77.6C58.9,-71.1,69.1,-58.5,76.4,-44.6C83.7,-30.7,88.1,-15.3,88.5,0.2C88.8,15.7,85.1,31.4,77.3,44.5C69.5,57.6,57.6,68.1,43.9,74.3C30.2,80.5,15.1,82.4,0.1,82.2C-14.8,82,-29.7,79.7,-43.1,73.1C-56.5,66.5,-68.4,55.7,-76.3,42.5C-84.1,29.3,-88,14.7,-87.6,0.2C-87.1,-14.2,-82.4,-28.4,-74.6,-41.5C-66.8,-54.6,-56,-66.6,-43.1,-73.3C-30.2,-80,-15.1,-81.4,0.3,-81.9C15.7,-82.4,32.5,-84.1,45.7,-77.6Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>
        </section>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {leagues.map((league) => (
              <button
                key={league}
                onClick={() => setActiveLeague(league)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeLeague === league
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                }`}
              >
                {league}
              </button>
            ))}
          </div>

          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search teams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Match Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match) => (
              <PredictionCard
                key={match.id}
                match={match}
                onSelect={setSelectedMatch}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 mb-4">
                <Info size={32} className="text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-400">No matches found</h3>
              <p className="text-slate-600">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 mt-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-slate-800 p-1.5 rounded-lg">
                <BrainCircuit className="text-slate-400" size={20} />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-400">
                BetMind
              </span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2026 BetMind AI. All rights reserved. Play responsibly.
            </p>
            <div className="flex gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Match Details Modal */}
      <MatchDetails
        match={selectedMatch}
        onClose={() => setSelectedMatch(null)}
      />
    </div>
  );
}

export default App;
